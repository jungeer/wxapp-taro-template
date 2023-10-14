module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  defineConstants: {},
  cache: {
    enable: true, // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  mini: {
    webpackChain: (chain) => {
      chain.merge({
        plugin: {
          install: {
            plugin: require("terser-webpack-plugin"),
            args: [
              {
                terserOptions: {
                  compress: true, // 默认使用terser压缩
                  // mangle: false,
                  keep_classnames: true, // 不改变class名称
                  keep_fnames: true, // 不改变函数名称
                },
              },
            ],
          },
        },
      });
    },
  },
  h5: {},
};
