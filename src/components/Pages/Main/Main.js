import { Component } from '../../../core/Component';

import '../../Templates/MainPage';
import '../../Templates/Header';
import '../../Templates/AboutUs';
import '../../Molecules/Gallery';
import '../../Templates/CatalogProducts';
import '../../Templates/Sales';
import '../../Templates/Footer';

import './Main.scss';

class Main extends Component {
  render() {
    return `
        <it-header></it-header>
        <it-mainpage></it-mainpage>
        <it-catalogproducts></it-catalogproducts>
        <it-aboutus></it-aboutus>
        <it-gallery></it-gallery>
        <it-sales></it-sales>
        <it-footer></it-footer>
        `;
  }
}

customElements.define('it-main', Main);
