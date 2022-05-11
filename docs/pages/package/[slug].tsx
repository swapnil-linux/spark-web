import { ButtonLink } from '@spark-web/button';
import { Divider } from '@spark-web/divider';
import { Heading } from '@spark-web/heading';
import type { IconProps } from '@spark-web/icon';
import { PencilIcon } from '@spark-web/icon';
import { Inline } from '@spark-web/inline';
import { Link } from '@spark-web/link';
import { Stack } from '@spark-web/stack';
import { Text } from '@spark-web/text';
import { TextLink } from '@spark-web/text-link';
import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
} from 'next';
import { createElement } from 'react';

import { allPackages } from '../../.contentlayer/generated';
import { GITHUB_URL } from '../../components/constants';
import { DocsContent } from '../../components/content';
import { InlineCode } from '../../components/example-helpers';
import { MDXContent } from '../../components/mdx-components/mdx-content';
import { LadleIcon } from '../../components/vectors/stroke';
import type { HeadingData } from '../../utils/generate-toc';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allPackages.map(pkg => `/package/${pkg.slug}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  code: string;
  packageName: string;
  storyPath: string | null;
  title: string;
  toc: HeadingData[];
}> = async ({ params }) => {
  const pkg = allPackages.find(p => p.slug === params!.slug);
  if (!pkg) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      code: pkg.body.code,
      packageName: pkg.packageName,
      storyPath: pkg.storyPath ?? null,
      title: pkg.title,
      toc: pkg.toc,
    },
  };
};

export default function Packages({
  code,
  packageName,
  storyPath,
  title,
  toc,
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
  const packageSlug = packageName.replace('@spark-web/', '');

  return (
    <DocsContent pageTitle={title} includeNavigation toc={toc}>
      <Stack gap="xlarge">
        <Heading level="1">{title}</Heading>
        <OpenInLinks packageSlug={packageSlug} storyPath={storyPath} />
        <InstallationInstructions
          packageName={packageName}
          packageSlug={packageSlug}
        />
        <Divider />
        <MDXContent code={code} />
      </Stack>
    </DocsContent>
  );
}

function OpenInLinks({
  storyPath,
  packageSlug,
}: {
  storyPath: string | null;
  packageSlug: string;
}) {
  return (
    <Inline gap="large">
      <LadleLink storyPath={storyPath} />
      <EditThisPageLink packageSlug={packageSlug} />
    </Inline>
  );
}

function ButtonLinkWithIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: (props: IconProps) => JSX.Element | null;
  label: string;
}) {
  return (
    <ButtonLink href={href} tone="neutral">
      {createElement(icon, { size: 'xxsmall' })}
      {label}
    </ButtonLink>
  );
}

function LadleLink({ storyPath: storyPath }: { storyPath: string | null }) {
  if (!storyPath) return null;

  return (
    <ButtonLinkWithIcon
      href={`${process.env.NEXT_PUBLIC_LADLE_URL}?path=/story/${storyPath}`}
      label="Open in Ladle"
      icon={LadleIcon}
    />
  );
}

function EditThisPageLink({ packageSlug }: { packageSlug: string }) {
  return (
    <ButtonLinkWithIcon
      href={`${GITHUB_URL}/edit/main/packages/${packageSlug}/README.md`}
      label="Edit this page"
      icon={PencilIcon}
    />
  );
}

function InstallationInstructions({
  packageName,
  packageSlug,
}: {
  packageName: string;
  packageSlug: string;
}) {
  return (
    <Stack gap="xlarge">
      <Heading level="2">Installation</Heading>
      <Inline gap="xlarge">
        <Stack gap="xlarge">
          <Text>
            Install <InlineCode>{`yarn add ${packageName}`}</InlineCode>
          </Text>
          <Text>
            npm{' '}
            <Link href={`https://www.npmjs.com/package/${packageName}`}>
              <InlineCode>{packageName}</InlineCode>
            </Link>
          </Text>
        </Stack>
        <Stack gap="xlarge">
          <Inline>
            <Text>
              Source{' '}
              <TextLink
                href={`${GITHUB_URL}/tree/main/packages/${packageSlug}`}
              >
                GitHub.com
              </TextLink>
            </Text>
          </Inline>
          <Text>
            Bundle{' '}
            <TextLink href={`https://unpkg.com/@spark-web/${packageSlug}/`}>
              unpkg.com
            </TextLink>
          </Text>
        </Stack>
      </Inline>
    </Stack>
  );
}
