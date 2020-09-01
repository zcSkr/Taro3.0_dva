const path = require('path');
const config = {
  projectName: 'Taro3.0_dva',
  date: '2020-7-1',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: `dist_${process.env.TARO_ENV}`,
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    webpackChain(chain, webpack) {
      // chain.plugin('analyzer')
      //   .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
      chain.merge({
        optimization: {
          splitChunks: {
            cacheGroups: {
              moment: {
                name: 'moment',
                priority: 1000,
                test(module) {
                  return /node_modules[\\/]moment/.test(module.context)
                }
              }
            }
          }
        }
      })
    },
    commonChunks(commonChunks) {
      commonChunks.push('moment')
      return commonChunks
    },
    imageUrlLoaderOption: {
      limit: 10240 // 大小限制，单位为 b
    },
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]_[local]_[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    devServer: {
      port: 8080
    },
    esnextModules: ['taro-ui'],
     // webpackChain(chain, webpack) { },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          // browsers: [
          //   'last 3 versions',
          //   'Android >= 4.1',
          //   'ios >= 8'
          // ]
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]_[local]_[hash:base64:5]'
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
