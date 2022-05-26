#!/usr/bin/env node
const path = require('path');

const docgen = require('react-docgen-typescript').withCompilerOptions(
  {
    noErrorTruncation: true,
    compilerOptions: {
      esModuleInterop: true,
      forceConsistentCasingInFileNames: true,
      isolatedModules: true,
      jsx: 'react-jsx',
      module: 'esnext',
      moduleResolution: 'node',
      noEmit: true,
      noUnusedLocals: true,
      skipLibCheck: true,
      strict: true,
      target: 'esnext',
      types: ['node', 'jest'],
    },
    include: ['**/*'],
    exclude: ['**/dist/**/*', 'docs', '**/node_modules/**/*'],
  },
  {
    propFilter: {
      skipPropsWithName: ['children'],
    },
    shouldExtractValuesFromUnion: true,
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
  }
);

// const resolvedPath = path.resolve('../../packages/divider/src/Divider.tsx');
// const resolvedPath = path.resolve('../../packages/box/src/Box.tsx');
const resolvedPath = path.resolve('../../packages/button/src/Button.tsx');
// const resolvedPath = path.resolve('../../packages/accordion/src/Accordion.tsx');
// Parse a file for docgen info
console.log(JSON.stringify(docgen.parse(resolvedPath), null, 2));
