const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/all.scss";`
      }
    }

  },
  pluginOptions: {
    i18n: {
      locale: 'us',
      fallbackLocale: 'us',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },
  devServer: {
    proxy: "http://localhost:5000"
  }
})

