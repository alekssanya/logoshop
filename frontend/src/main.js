import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import i18n from './i18n'
import FlagIcon from 'vue-flag-icon'
import './assets/scss/reset.scss'
createApp(App).use(router).use(FlagIcon)
    .use(i18n)
    .use(store)
    .mount('#app')



