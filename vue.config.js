const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    devServer: {

        proxy: {
            '/api': {
                port: 8010,
                target: 'http://localhost:8000',//这里填入你要请求的接口的前缀   后台在哪个端口上
                ws:true,//代理websocked
                changeOrigin:true,//虚拟的站点需要更管origin
                secure: true,                   //是否https接口
                pathRewrite:{
                    '^/api':''//重写路径
                }
            }
        }
    }

})
