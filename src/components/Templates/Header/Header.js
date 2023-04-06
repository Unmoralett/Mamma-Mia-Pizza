import { Component } from '../../../core/Component';

import '../../Molecules/Logo';
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
            <it-navigation></it-navigation>
            <it-storeopeninghours></it-storeopeninghours>
            <it-link
                class="header__tel"
                href="tel:7755"
                content="Заказ по телефону: 7755">
            </it-link>
            <it-basket></it-basket>
            <it-burger></it-burger>
        </header>
        `;
  }
}

customElements.define('it-header', Header);
