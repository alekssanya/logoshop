import { createI18n } from 'vue-i18n'
import us from "./locales/us.json"
import ru from "./locales/ru.json"
import kz from "./locales/kz.json"
/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 * See: https://github.com/intlify/vue-i18n-loader#rocket-i18n-resource-pre-compilation
 */


export default createI18n(
  {
    legacy: false,
    locale: 'us',
    fallbackLocale: 'us',
    messages: {
      us, ru, kz
    },
    globalInjection: true
  })
