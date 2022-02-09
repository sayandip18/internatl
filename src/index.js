import React from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { useTranslation, initReactI18next } from "react-i18next";
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'hin', 'ben'],
    fallbackLng: 'en',
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  })

function App() {
  const { t } = useTranslation();

  return <>
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <button onClick={() => i18next.changeLanguage('hin')}>Click here for Hindi</button>
      <button onClick={() => i18next.changeLanguage('ben')}>Click here for Bengali</button>
      <button onClick={() => i18next.changeLanguage('en')}>Click here for English</button>
    </div>
    <h2>{t('welcome_text')}</h2>
  </>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);