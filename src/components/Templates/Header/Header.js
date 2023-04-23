import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';
import '../../Molecules/Logo';
import '../../Molecules/HeaderPhone';
import '../../Organisms/Navigation';
import '../../Molecules/StoreOpeningHours';
import '../../Atoms/Link';
import '../../Molecules/Basket';
import '../../Organisms/Burger';
import './Header.scss';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { ADMIN } from '../../../constants/userRoles';

class Header extends Component {
  static get observedAttributes() {
    return ['user'];
  }

  getItems() {
    const user = JSON.parse(this.props.user);
    console.log(user);
    if (user) {
      if (toString(user.email) === ADMIN) {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      } else {
        return appPages.filter((menuItem) => {
          return [APP_ROUTES.signUp, APP_ROUTES.signIn].every((item) => item !== menuItem.href);
        });
      }
    } else {
      return appPages.filter((menuItem) => {
        return [APP_ROUTES.signOut, APP_ROUTES.adminPage].every((item) => item !== menuItem.href);
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
            <it-burger></it-burger>
        </header>
        `;
  }
}

customElements.define('it-header', Header);
