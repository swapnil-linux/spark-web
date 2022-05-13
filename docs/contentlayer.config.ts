import { plugin as untitledLiveCode } from '@untitled-docs/live-code/rehype/dist/live-code.cjs.js';
import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import { readFile } from 'node:fs/promises';
import rehypeSlug from 'rehype-slug';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkMdx from 'remark-mdx';
import remarkStripMarkdown from 'strip-markdown';

import { generatePropsDocument } from './utils/generate-props-document';
import { generateToc } from './utils/generate-toc';

async function mdxToStr(mdx: string): Promise<string> {
  const file = await remark()
    .use(remarkGfm)
    .use(remarkMdx)
    //@ts-expect-error: Can't pass property remove to object Pluggable<any[]>.
    .use([remarkStripMarkdown, { remove: ['jsx', 'import', 'export'] }])
    .process(mdx);
  return String(file);
}
// const ignoreDirs = ['core', 'theme', 'analytics', 'ssr', 'next-utils'];

export const Home = defineDocumentType(() => ({
  name: 'Home',
  contentType: 'mdx',
  filePathPattern: 'docs/pages/index.md',
  isSingleton: true,
  fields: {
    title: {
      type: 'string',
      description: 'The title of the package',
      required: true,
    },
  },
  computedFields: {
    toc: {
      type: 'json',
      resolve: async doc => generateToc(doc.body.raw),
    },
  },
}));

export const Package = defineDocumentType(() => ({
  name: 'Package',
  contentType: 'mdx',
  filePathPattern: 'packages/**/README.md',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the package',
      required: true,
    },
    storybookPath: {
      type: 'string',
      description: 'Path for Storybook',
      required: false,
    },
  },
  computedFields: {
    packageName: {
      type: 'string',
      resolve: async pkg => {
        return JSON.parse(
          (
            await readFile(`../${pkg._raw.sourceFileDir}/package.json`)
          ).toString()
        ).name;
      },
    },
    slug: {
      type: 'string',
      resolve: pkg => pkg._raw.sourceFileDir.replace(/^packages\//, ''),
    },
    version: {
      type: 'string',
      resolve: async pkg => {
        return JSON.parse(
          (
            await readFile(`../${pkg._raw.sourceFileDir}/package.json`)
          ).toString()
        ).version;
      },
    },
    toc: {
      type: 'json',
      resolve: async doc => generateToc(doc.body.raw),
    },
    plaintext: {
      type: 'string',
      resolve: async doc => {
        return mdxToStr(doc.body.raw);
      },
    },
    props: {
      type: 'json',
      resolve: async pkg => {
        // const isComponent = !ignoreDirs.includes(
        //   pkg._raw.sourceFileDir.replace('packages/', '')
        // );
        // const componentSrc = `../${pkg._raw.sourceFileDir.replace(
        //   '/README.md',
        //   ''
        // )}/src/${pkg.title.replace(' ', '-')}.tsx`;
        // console.log({ componentSrc }, 'ssss');
        console.log('SLUG', pkg._raw.sourceFileDir);
        return pkg._raw.sourceFileDir === 'packages/divider'
          ? generatePropsDocument('')
          : {};
      },
    },
  },
}));

export default makeSource({
  contentDirInclude: ['{docs/pages,packages}'],
  contentDirPath: '..',
  disableImportAliasWarning: true,
  documentTypes: [Home, Package],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, untitledLiveCode],
  },
  onUnknownDocuments: 'skip-ignore',
});
