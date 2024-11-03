import { createI18n } from 'vue-i18n';
import es from './locales/es';

export default createI18n({
  legacy: false,
  locale: 'es',
  fallbackLocale: 'es',
  messages: {
    es
  }
});