const path = require('path');

module.exports = (env, argv) => {
  const distPath = argv.mode === 'development' ? 'debug' : 'release';

  return {
    entry: './src/js/index.ts',
    output: {
      path: path.resolve(__dirname, 'build', 'dist', distPath),
      filename: 'module.js',
      clean: true,
      library: {
          type: "module"
      }
    },
    module: {
      rules: [
        {
          test: /\.wasm$/,
          type: 'asset/inline',
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: "/node_modules/"
        }
      ],
    },
    experiments: {
      asyncWebAssembly: true,
      topLevelAwait: true,
      outputModule: true
    },
  }
};