const ZipPlugin = require('zip-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const PACKAGE = require('./package.json');
const version = PACKAGE.version;

module.exports = (env, argv) => ({
  mode: 'production',
  entry: {},
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'src',
          transform(content) {
            return content
                .toString()
                .replace('$VERSION$', version);
          }
        }
      ]
    }),
    new ZipPlugin({
      filename: `latest.zip`
    })
  ],
});
