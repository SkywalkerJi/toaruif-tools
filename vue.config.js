module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= 'ToaruIF Tools'
        return args
      })
  },
  pluginOptions: {
    i18n: {
      locale: "zh-CN",
      fallbackLocale: "zh-CN",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/toaruif-tools/'
    : '/',
}
