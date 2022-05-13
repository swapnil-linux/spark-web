// @ts-ignore
import { readFileSync } from 'node:fs';
// @ts-ignore
import reactDocs from 'react-docgen';

export const generatePropsDocument = (componentSrc: string) => {
  console.log(componentSrc);
  console.log('about to generate props doc');
  try {
    const filePath =
      '/Users/matilda.pan/Code/spark-web/packages/divider/src/Divider.tsx';
    const componentSrc = readFileSync(filePath);

    const propsDocument = reactDocs.parse(componentSrc, undefined, undefined, {
      filename: filePath,
      cwd: '/Users/matilda.pan/Code/spark-web',
    });

    console.log({ propsDocument }, 'pppppp');
    return propsDocument;
  } catch (error) {
    console.error(error, 'xxxxxx');
  }
};
