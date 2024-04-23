import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "~": path.resolve(__dirname, "./src"),
        },
        extensions: ['.js', '.mjs', '.vue', '.json', '.less', '.css']

    },

    server: {
        // 配置监听的ip和端口
        host: '0.0.0.0',
        port: 80,
        // proxy: {
        // // 这里 /api 就代理 真实的baseURL， 该配置在 axios.js 应用
        // // 配置此 proxy 可以直接解决跨域问题，但是原理利用了前端服务器作为所有请求的代理，性能上看，前端服务器作为了中间人
        //   '/api': {
        //     // target: "http://1.92.65.117:80",
        //     target: "http://192.227.167.113",
        //     changeOrigin: true,
        //     // rewrite: (path) => path.replace(/^\/api/, ''),
        //   },
        // }
    },
    css: {
        preprocessorOptions: {
          less: {
            additionalData: '@import "./src/styles/variables.module.less";',
            javascriptEnabled: true
          }
        }
      },
    plugins: [vue(), WindiCSS()],

})
