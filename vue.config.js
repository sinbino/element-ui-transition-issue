
const webpack = require('webpack')

module.exports = {

  devServer: {
    public: '0.0.0.0',
    allowedHosts: (process.env.HOST_NAMES || '').split(','),
  },

}
