const path = require('path');
const { injectBabelPlugin } = require('react-app-rewired');

module.exports = {
  webpack: function (config, env) {
    config = injectBabelPlugin('babel-plugin-styled-components', config);
    config = injectBabelPlugin(['@babel/plugin-proposal-decorators', { 'legacy': true }], config);
    return config;
  },
  jest: function (config) {
    Object.keys(config.transform).forEach(key => {
      if (config.transform[key].endsWith('babelTransform.js')) {
        config.transform[key] = path.resolve(__dirname + '/babel-transform-jest.js');
      }
    });
    return config;
  }
};
