import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          hero: {
            title: 'Project <1>managment app</1>',
            description:
              'Trello is an app that will help you collaborate on your projects and reach new peaks of productivity. It also supports multiple languages . Join now to organize your tasks and change the way your team works.',
            getStarted: 'Get started',
          },
          header: {
            logIn: 'Log in',
            signUp: 'Sign up',
            signOut: 'Sign out',
            editProfile: 'Edit profile',
          },
        },
      },
      pl: {
        translation: {
          hero: {
            title: 'Aplikacja do <1>zarządzania projektami</1>',
            description:
              'Trello to aplikacja, która pomoże Ci współpracować przy projektach i osiągać nowe szczyty produktywności. Obsługuje również wiele języków. Dołącz teraz, aby uporządkować swoje zadania i zmienić sposób pracy zespołu.',
            getStarted: 'Rozpocznij',
          },
          header: {
            logIn: 'Zaloguj się',
            signUp: 'Zarejestruj się',
            signOut: 'Wyloguj się',
            editProfile: 'Edytuj profil',
          },
        },
      },
    },
    detection: { order: ['queryString', 'cookie'] },
    cache: ['cookie'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
