const CracoAntdLessPlugin = require('./craco-antd-less')

module.exports = {
  babel: {
    plugins: [
      ['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }, 'import']
    ]
  },
  plugins: [
    {
      plugin: CracoAntdLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        },
        cssLoaderOptions: {
          modules: {
            localIdentName: '[local]_[hash:base64:5]'
          }
        }
      }
    }
  ]
}
