// @ts-ignore
import { readFileSync } from 'node:fs';
import path from 'node:path';
// @ts-ignore
import reactDocs from 'react-docgen';

const ignoreDirs = [
  'core',
  'theme',
  'analytics',
  'ssr',
  'next-utils',
  'utils',
  'icon', // Icon is a special component that creats all other icons
];

const multiComponentsMap: { [key: string]: string[] } = {
  a11y: ['Emoji', 'VisuallyHidden'],
  accordion: ['Accordion', 'Accordion Item'],
  'text-link': ['Text Link', 'Text Link Button'],
  field: ['Field', 'Field Message'],
};

export const generateProps = ({
  rawSourceFileDir,
  pkgTitle,
}: {
  rawSourceFileDir: string;
  pkgTitle: string;
}) => {
  const packageName = rawSourceFileDir.replace('packages/', '');
  const isComponent = !ignoreDirs.includes(packageName);
  return isComponent ? componentPropsDocument({ packageName, pkgTitle }) : [];
};

type CompoenentPackageType = {
  packageName: string;
  pkgTitle: string;
};

/** some packages have multiple components, due to
 * react-docgen only can process each component from
 * its seperate file
 * For Xxaple: packages/text-input has Text-Link.tsx
 * and Text-Link-Button.tsx , both of components need
 * be extracted for props document
 */
const componentPropsDocument = ({
  packageName,
  pkgTitle,
}: CompoenentPackageType) => {
  const multiComponents: string[] | undefined = multiComponentsMap[packageName];

  if (multiComponents) {
    const multiComponentProps: any[] = [];
    multiComponents.forEach(component => {
      const props = generateComponentProps({
        packageName,
        pkgTitle: component,
      });
      multiComponentProps.push(props);
    });
    return multiComponentProps;
  }
  return [generateComponentProps({ packageName, pkgTitle })];
};

/**
* In order to let react docgen to consume all
* components and generate props docs, we need to unify
* our naming convention for component files
* for example:
* "name": "@spark-web/text-link" in package.json,
* the component file name has to be Text-Link.tsx in /src
* If you need multiple components for this package,
please add the mapping to multiComponentsMap above
*/

const generateComponentProps = ({
  packageName,
  pkgTitle,
}: CompoenentPackageType) => {
  const componentSrcPath = `packages/${packageName}/src/${pkgTitle.replace(
    /\s+/g,
    '-'
  )}.tsx`;

  try {
    const filePath = path.resolve(process.cwd() + `/../${componentSrcPath}`);
    const componentSrc = readFileSync(filePath);

    const propsDocument = reactDocs.parse(componentSrc, undefined, undefined, {
      filename: filePath,
      cwd: path.resolve(process.cwd() + '/..'),
    });

    return propsDocument;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
