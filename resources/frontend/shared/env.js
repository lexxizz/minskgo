export default {
  webpack: {

    public: {
      port: 3001,
      entry: './public/index.js',
      output: 'bundle.js'
    },

    host: '0.0.0.0',
    url: 'http://stock.lc'

  }
}
