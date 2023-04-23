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

class Header extends Component {
  render() {
    return `
        <header class='header'>
            <it-logo></it-logo>     
            <it-navigation items='${JSON.stringify(appPages)}'></it-navigation>
            <it-storeopeninghours></it-storeopeninghours>
            <it-headerphone></it-headerphone>
            <it-basket></it-basket>
            <it-burger></it-burger>
        </header>
        `;
  }
}

customElements.define('it-header', Header);
