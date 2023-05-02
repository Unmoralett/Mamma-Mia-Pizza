import { APP_ROUTES } from './appRoutes';

export const routes = {
  main: {
    href: APP_ROUTES.main,
    component: 'it-main',
  },
  mainPage: {
    href: APP_ROUTES.mainPage,
    component: 'it-mainpage',
  },
  menuPage: {
    href: APP_ROUTES.menuPage,
    component: 'it-catalogproducts',
  },
  aboutUsPage: {
    href: APP_ROUTES.aboutUsPage,
    component: 'it-aboutus',
  },
  galleryPage: {
    href: APP_ROUTES.galleryPage,
    component: 'it-gallery',
  },
  salesPage: {
    href: APP_ROUTES.salesPage,
    component: 'it-sales',
  },
  contactsPage: {
    href: APP_ROUTES.contactsPage,
    component: 'it-footer',
  },
  signUp: {
    href: APP_ROUTES.signUp,
    component: 'sign-up-page',
  },
  signIn: {
    href: APP_ROUTES.signIn,
    component: 'sign-in-page',
  },
  signOut: {
    href: APP_ROUTES.signOut,
    component: 'sign-out-page',
  },
  adminPage: {
    href: APP_ROUTES.adminPage,
    component: 'admin-page',
  },
  cartPage: {
    href: APP_ROUTES.cartPage,
    component: 'cart-page',
  },
  errorPage: {
    href: APP_ROUTES.errorPage,
    component: 'error-page',
  },
  confirmPage: {
    href: APP_ROUTES.confirmPage,
    component: 'confirm-page',
  },
};
