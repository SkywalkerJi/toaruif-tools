import Vue from "vue";
import VueI18n from "vue-i18n";
import getBrowserLocale from "./util/i18n/get-browser-locale.js";
import { supportedLocalesInclude } from "./util/i18n/supported-locales"

Vue.use(VueI18n);

/**
 * 將 locales/__.json 中的內容取出來轉成 messages 的結構
 * @returns {Object} VueI18n 實體的 messages 內容
 */
function loadLocaleMessages() {
  // Webpack 引入一堆檔案的方法
  const locales = require.context(
    // 開始比對的目錄
    "./locales",
    // 是否比對子目錄
    true,
    // 用正則表達式篩選檔案名稱，限定檔名為大小寫英數字、橫線底線逗號及空白的 JSON 檔
    /[A-Za-z0-9-_,\s]+\.json$/i
  );
  const messages = {};
  // 用每個檔名去比對並作為 key
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i);
    if (matched && matched.length > 1) {
      const locale = matched[1];
      messages[locale] = locales(key);
    }
  });
  return messages;
}

//获取浏览器语言
function getStartingLocale() {
  const browserLocale = getBrowserLocale({ countryCodeOnly: true });

  if (supportedLocalesInclude(browserLocale)) {
    return browserLocale;
  } else {
    return process.env.VUE_APP_I18N_LOCALE || "en";
  }
}

// 指定 locale 、 fallbackLocale 和 messages
export default new VueI18n({
  locale: getStartingLocale(),
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
