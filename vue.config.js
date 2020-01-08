const autoprefixer = require('autoprefixer');
// const pxtorem = require('postcss-pxtorem');
const path = require('path');
const resolve = dir => {
    return path.join(__dirname, dir);
};
// 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制) 
const BASE_URL = process.env.NODE_ENV === 'production' ?'./' :'/';

module.exports = {
    assetsDir: '.',
    outputDir: 'docs',//运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
    publicPath: BASE_URL,
    lintOnSave: false,// 是否在保存的时候检
    productionSourceMap: false,// 生产环境是否生成 sourceMap 文
    devServer: {
        host: '0.0.0.0', //本地服务器访问的路径
        port: 88, //本地服务器访问的端口
        https: false,
        hotOnly: false,
        open: true, //配置自动启动浏览器
        proxy: {
            '/api': {
                target: 'http://jiumu.dd.tmf520.cn/#/', 
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '' //通过pathRewrite重写地址，将前缀/api转为/
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('_com', resolve('src/components'))
            .set('_views', resolve('src/views'))
            .set('_imgs', resolve('src/assets/images'))
            .set('_libs', resolve('src/libs'))
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    autoprefixer(),
                    // pxtorem({
                    //     rootValue: 37.5,
                    //     propList: ['*'],
                    // })
                ]
            }
        }
    },
    pluginOptions: { // 第三方插件配置
        // ...
    },
};
