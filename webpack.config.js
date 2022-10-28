/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

function baseConfig({ devtool, filename }) {
  return {
    entry: './src/polyfill.ts',
    target: ['web', 'es5'],
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                configFile: 'tsconfig.es5.json',
              },
            },
          ],
        },
      ],
    },
    devtool,
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
      fallback: {
        // this allow to build the all in one bundle
        // nodejs cannot use this bundle (the bundle depends on window)
        // so no problem to break this module
        https: false,
      },
    },
    output: {
      path: path.resolve(__dirname, 'lib'),
      filename,
      globalObject: 'window',
      library: {
        name: 'gladiaio_sdk',
        type: 'umd',
        umdNamedDefine: true,
      },
      libraryExport: 'default',
    },
  };
}

module.exports = [
  baseConfig({ devtool: 'inline-source-map', filename: 'gladiaio-sdk.js' }),
  baseConfig({ devtool: 'source-map', filename: 'gladiaio-sdk.min.js' }),
];
