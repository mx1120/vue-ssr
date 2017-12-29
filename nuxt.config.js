module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'SSR',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, maximum-scale=1.0, minimum-scale=1.0' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css:[
  	'assets/reset.scss', 'assets/main.scss'
  ],
  script:[
	'assets/rem.js'
  ],
  router:{
  	middleware: 'global'
  },
  plugins: [{ src: '~/plugins/vue-notifications.js', ssr: false }],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    vendor:['axios', 'vue-notifications'],
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
