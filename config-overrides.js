const path = require('path');
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  webpack: function (config, env) {
    if (env === 'development') {
      config.plugins.push(
        new StylelintPlugin({
          configFile: path.resolve(__dirname, 'stylelintrc.js'),
          files: './components/**/*.styled.js',
        })
      )
    }

    return config
  }
}