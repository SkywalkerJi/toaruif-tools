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
      locale: "zh_CN",
      fallbackLocale: "zh_CN",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/toaruif-tools/'
    : '/',
}
