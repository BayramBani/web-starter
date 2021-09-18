const path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'bootstrap'),
    compress: true,
    port: 9000
  }
};
