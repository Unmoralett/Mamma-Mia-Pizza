import { Component } from '../../../core/Component';
import { appPages } from '../../../constants/appPages';
import '../../Molecules/Logo';
import '../../Molecules/HeaderPhone';
import '../../Organisms/Navigation';
import '../../Molecules/StoreOpeningHours';
import '../../Atoms/Link';
import '../../Molecules/Basket';
import '../../Molecules/LoginLogo';
import '../../Molecules/AdminLogo';
import '../../Molecules/SignOutLogo';
import '../../Pages/CartPage';
import './Header.scss';
import { ADMIN } from '../../../constants/userRoles';
import { storageService } from '../../../services/StorageService';

class Header extends Component {
  static get observedAttributes() {
    return ['user'];
  }

  render() {
    const user = storageService.getItem('user');

    if (user) {
      if (user.email === ADMIN) {
        return `
          <header class='header'>
              <it-logo></it-logo>     
              <it-navigation items='${JSON.stringify(appPages)}'></it-navigation>
              <it-storeopeninghours></it-storeopeninghours>
              <it-headerphone></it-headerphone>
              <div>
                <it-admin></it-admin>
                <it-signoutlogo></it-signoutlogo>
              </div>
              <it-basket></it-basket>
          </header>
        `;
      } else {
        return `
        <header class='header'>
            <it-logo></it-logo>     
            <it-navigation items='${JSON.stringify(appPages)}'></it-navigation>
            <it-storeopeninghours></it-storeopeninghours>
            <it-headerphone></it-headerphone>
            <it-signoutlogo></it-signoutlogo>
            <it-basket></it-basket>
        </header>
        `;
      }
    } else {
      return `
    <header class='header'>
        <it-logo></it-logo>     
        <it-navigation items='${JSON.stringify(appPages)}'></it-navigation>
        <it-storeopeninghours></it-storeopeninghours>
        <it-headerphone></it-headerphone>
        <it-login></it-login>
        <it-basket></it-basket>
    </header>
    `;
    }
  }
}

customElements.define('it-header', Header);
