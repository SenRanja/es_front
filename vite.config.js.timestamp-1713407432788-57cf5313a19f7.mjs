// vite.config.js
import { defineConfig } from "file:///C:/Users/ranja/Desktop/WorkTask/exam_system/es_front/node_modules/.store/vite@5.2.8/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/ranja/Desktop/WorkTask/exam_system/es_front/node_modules/.store/@vitejs+plugin-vue@4.6.2/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import WindiCSS from "file:///C:/Users/ranja/Desktop/WorkTask/exam_system/es_front/node_modules/.store/vite-plugin-windicss@1.9.3/node_modules/vite-plugin-windicss/dist/index.mjs";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\ranja\\Desktop\\WorkTask\\exam_system\\es_front";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    // 配置监听的ip和端口
    host: "0.0.0.0",
    port: 80,
    proxy: {
      // 这里 /api 就代理 真实的baseURL， 该配置在 axios.js 应用
      // 配置此 proxy 可以直接解决跨域问题，但是原理利用了前端服务器作为所有请求的代理，性能上看，前端服务器作为了中间人
      "/api": {
        target: "http://1.92.65.117:80",
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, ''),
      }
    }
  },
  plugins: [vue(), WindiCSS()]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyYW5qYVxcXFxEZXNrdG9wXFxcXFdvcmtUYXNrXFxcXGV4YW1fc3lzdGVtXFxcXGVzX2Zyb250XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyYW5qYVxcXFxEZXNrdG9wXFxcXFdvcmtUYXNrXFxcXGV4YW1fc3lzdGVtXFxcXGVzX2Zyb250XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9yYW5qYS9EZXNrdG9wL1dvcmtUYXNrL2V4YW1fc3lzdGVtL2VzX2Zyb250L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtkZWZpbmVDb25maWd9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xyXG5pbXBvcnQgV2luZGlDU1MgZnJvbSAndml0ZS1wbHVnaW4td2luZGljc3MnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcblxyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICBcIn5cIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHNlcnZlcjoge1xyXG4gICAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1NzZEMVx1NTQyQ1x1NzY4NGlwXHU1NDhDXHU3QUVGXHU1M0UzXHJcbiAgICAgICAgaG9zdDogJzAuMC4wLjAnLFxyXG4gICAgICAgIHBvcnQ6IDgwLFxyXG4gICAgICAgIHByb3h5OiB7XHJcbiAgICAgICAgLy8gXHU4RkQ5XHU5MUNDIC9hcGkgXHU1QzMxXHU0RUUzXHU3NDA2IFx1NzcxRlx1NUI5RVx1NzY4NGJhc2VVUkxcdUZGMEMgXHU4QkU1XHU5MTREXHU3RjZFXHU1NzI4IGF4aW9zLmpzIFx1NUU5NFx1NzUyOFxyXG4gICAgICAgIC8vIFx1OTE0RFx1N0Y2RVx1NkI2NCBwcm94eSBcdTUzRUZcdTRFRTVcdTc2RjRcdTYzQTVcdTg5RTNcdTUxQjNcdThERThcdTU3REZcdTk1RUVcdTk4OThcdUZGMENcdTRGNDZcdTY2MkZcdTUzOUZcdTc0MDZcdTUyMjlcdTc1MjhcdTRFODZcdTUyNERcdTdBRUZcdTY3MERcdTUyQTFcdTU2NjhcdTRGNUNcdTRFM0FcdTYyNDBcdTY3MDlcdThCRjdcdTZDNDJcdTc2ODRcdTRFRTNcdTc0MDZcdUZGMENcdTYwMjdcdTgwRkRcdTRFMEFcdTc3MEJcdUZGMENcdTUyNERcdTdBRUZcdTY3MERcdTUyQTFcdTU2NjhcdTRGNUNcdTRFM0FcdTRFODZcdTRFMkRcdTk1RjRcdTRFQkFcclxuICAgICAgICAgICcvYXBpJzoge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IFwiaHR0cDovLzEuOTIuNjUuMTE3OjgwXCIsXHJcbiAgICAgICAgICAgIGNoYW5nZU9yaWdpbjogdHJ1ZSxcclxuICAgICAgICAgICAgLy8gcmV3cml0ZTogKHBhdGgpID0+IHBhdGgucmVwbGFjZSgvXlxcL2FwaS8sICcnKSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBwbHVnaW5zOiBbdnVlKCksIFdpbmRpQ1NTKCldLFxyXG5cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VixTQUFRLG9CQUFtQjtBQUN2WCxPQUFPLFNBQVM7QUFDaEIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sVUFBVTtBQUhqQixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsSUFDeEM7QUFBQSxFQUNKO0FBQUEsRUFFQSxRQUFRO0FBQUE7QUFBQSxJQUVKLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLE9BQU87QUFBQTtBQUFBO0FBQUEsTUFHTCxRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixjQUFjO0FBQUE7QUFBQSxNQUVoQjtBQUFBLElBQ0Y7QUFBQSxFQUNKO0FBQUEsRUFFQSxTQUFTLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUUvQixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
