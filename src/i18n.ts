import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';
import { initReactI18next } from 'react-i18next';
import ko from './locale/ko/translation.json'
import en from './locale/en/translation.json'
import id from './locale/id/translation.json'
import zh from './locale/zh/translation.json'
import jp from './locale/jp/translation.json'
//
// function loadLocales(url, options, callback, data) {
//     try {
//         const waitForLocale = require('locales/'+url+'.json');
//         waitForLocale((locale) => {
//             callback(locale, {status: '200'});
//         })
//     } catch (e) {
//         callback(null, {status: '404'});
//     }
// }

i18n
    .use(initReactI18next)
    .use(XHR)
    .use(LanguageDetector)
    .init({
        resources : {
            ko : { translation: ko },
            en : { translation: en },
            id : { translation: id },
            zh : { translation: zh },
            jp : { translation: jp },
        },
        lng: 'ko',
        fallbackLng: 'ko',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        load: 'languageOnly',
        // backend: {
        //     loadPath: '/locales/{{lng}}/{{ns}}.json',
        //     parse: (data) => data,
        // },
        react: {
            wait: true,
        },
    });

// i18n.on("languageChanged", (language) => document.documentElement.setAttribute("lang", language));
i18n.on("languageChanged", (language) => document.body.setAttribute("lang", language));


export default i18n;
