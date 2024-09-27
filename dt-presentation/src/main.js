import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import router from './router';

// L'anglais est la langue par défaut
const defaultLanguage = 'en';

// Configuration de Vue I18n
const i18n = createI18n({
  locale: defaultLanguage, // On définit la langue par défaut sur l'anglais
  fallbackLocale: 'en', // Si la traduction n'est pas disponible dans la langue actuelle, utiliser l'anglais
  messages: {
    en,
    fr
  }
});

createApp(App)
  .use(router) 
  .use(i18n)
  .mount('#app');
