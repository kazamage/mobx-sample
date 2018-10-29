const path = require('path');
const webpack = require('webpack');
const { injectBabelPlugin } = require('react-app-rewired');
const rewireEslint = require('react-app-rewire-eslint');

function overrideEslintOptions(options) {
  return options;
}

module.exports = {
  webpack: function (config, env) {
    config = injectBabelPlugin('babel-plugin-styled-components', config);
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }], config);
    config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        React: 'react',
        ReactDOM: 'react-dom',
        $: 'jquery',
      }),
    ]);
    config = rewireEslint(config, env, overrideEslintOptions);
    config.resolve.alias = { '@': path.resolve(__dirname, 'src/') };
    return config;
  },
  jest: function (config) {
    Object.keys(config.transform).forEach(key => {
      if (config.transform[key].endsWith('babelTransform.js')) {
        config.transform[key] = path.resolve(__dirname + '/babel-transform-jest.js');
      }
    });
    config.moduleNameMapper["^@/(.+)"] = "<rootDir>/src/$1";
    return config;
  }
};
