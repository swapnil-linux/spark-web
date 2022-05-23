const babelConfig = require('../babel.config');
const { ProvidePlugin } = require('webpack');

const playroomConfig = {
  title: 'Playroom | Brighte Spark',
  components: './playroom/components.ts',
  outputPath: './public/playroom/',
  baseUrl: '/playroom/',
  exampleCode: `<Text>Hello world</Text>`,
  frameComponent: './playroom/frame.tsx',
  webpackConfig,
};

function webpackConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: { loader: 'babel-loader', options: babelConfig },
        },
      ],
    },
    resolve: { extensions: ['.js', '.ts', '.tsx'] },
    plugins: [new ProvidePlugin({ process: 'process/browser' })],
  };
}

module.exports = playroomConfig;
