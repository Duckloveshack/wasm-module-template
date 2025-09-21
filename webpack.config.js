const path = require('path');

module.exports = (env, argv) => {
  const distPath = argv.mode === 'development' ? 'debug' : 'release';

  return {
    entry: './src/index.js',
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
      ],
    },
    experiments: {
      asyncWebAssembly: true,
      topLevelAwait: true,
      outputModule: true
    },
  }
};