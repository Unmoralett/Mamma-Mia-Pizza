import { APP_ROUTES } from './appRoutes';

export const appPages = [
  {
    label: 'Главная',
    href: APP_ROUTES.main,
    group: 1,
  },
  {
    label: 'Меню',
    href: APP_ROUTES.menuPage,
    group: 1,
  },
  {
    label: 'О нас',
    href: APP_ROUTES.aboutUsPage,
    group: 1,
  },
  {
    label: 'Галерея',
    href: APP_ROUTES.galleryPage,
    group: 1,
  },
  {
    label: 'Акции',
    href: APP_ROUTES.salesPage,
    group: 1,
  },
  {
    label: 'Контакты',
    href: APP_ROUTES.contactsPage,
    group: 1,
  },
  {
    label: 'Регистрация',
    href: APP_ROUTES.signUp,
    group: 2,
  },
  {
    label: 'Войти',
    href: APP_ROUTES.signIn,
    group: 2,
  },
  {
    label: 'Админ',
    href: APP_ROUTES.adminPage,
    group: 2,
  },
  {
    label: 'Выйти',
    href: APP_ROUTES.signOut,
    group: 2,
  },
];
