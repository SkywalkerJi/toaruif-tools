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
  publicPath: process.env.NODE_ENV === 'production'
    ? '/toaruif-tools/'
    : '/',
}
