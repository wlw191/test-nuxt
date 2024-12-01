// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // modules: [
  //   '@nuxtjs/i18n', // 多语言支持
  //   '@nuxtjs/sitemap' // Sitemap 生成
  // ],

  // i18n: {
  //   locales: [
  //     { code: 'en', name: 'English', file: 'en.json' },
  //   ],
  //   defaultLocale: 'en', // 默认语言
  //   strategy: 'prefix', // 每个语言使用不同的 URL 前缀
  //   langDir: 'locales/', // 语言文件的存放目录
  //   vueI18n: {
  //     fallbackLocale: 'en', // 如果没有找到对应语言，使用英语作为后备
  //   }
  // },



  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/animate.css',                      // 自定义样式
    '~/assets/css/bootstrap-5.0.0-alpha.min.css',    // 自定义样式
    '~/assets/css/bootstrap-5.0.0-beta1.min.css',    // 自定义样式
    '~/assets/css/glightbox.min.css',                // 自定义样式
    '~/assets/css/LineIcons.2.0.css',                // 自定义样式
    '~/assets/css/main.css',                         // 自定义样式

  ],

  // 配置插件加载
  plugins: [
    // 引入 Bootstrap 的 JS 和其他自定义 JS 文件
    // { src: 'bootstrap/dist/js/dist/bootstrap.bundle.min.js', mode: 'client' },         // 客户端加载
    { src: '~/assets/js/bootstrap.bundle-5.0.0-beta1.min.js' },  // 客户端加载
    { src: '~/assets/js/bootstrap.bundle-5.0.0.alpha-min.js' },   // 客户端加载
    { src: '~/assets/js/contact-form.js' },                       // 客户端加载
    { src: '~/assets/js/tiny-slider.js' },                        // 客户端加载
  ],

  app: {
    baseURL: '/',
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',  
    }
  }
})