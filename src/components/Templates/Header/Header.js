import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';
import '../../Molecules/Logo';
import '../../Molecules/HeaderPhone';
import '../../Organisms/Navigation';
import '../../Molecules/StoreOpeningHours';
import '../../Atoms/Link';
import '../../Molecules/Basket';
import '../../Pages/CartPage';
import './Header.scss';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { ADMIN } from '../../../constants/userRoles';
import { storageService } from '../../../services/StorageService';

class Header extends Component {
  static get observedAttributes() {
    return ['user'];
  }

  getItems() {
    const user = storageService.getItem('user');
    if (user) {
      if (user.email === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn, APP_ROUTES.adminPage].every(
            (item) => item !== menuItem.href,
          );
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.adminPage, APP_ROUTES.signOut].every((item) => item !== menuItem.href);
      });
    }
  }

  render() {
    return `
        <header class='header'>
            <it-logo></it-logo>     
            <it-navigation items='${JSON.stringify(this.getItems())}'></it-navigation>
            <it-storeopeninghours></it-storeopeninghours>
            <it-headerphone></it-headerphone>
            <it-basket></it-basket>
        </header>
        `;
  }
}

customElements.define('it-header', Header);
