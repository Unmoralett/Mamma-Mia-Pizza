import { Component } from '../../../core/Component';

import '../../Templates/MainPage';
import '../../Templates/Header';
import '../../Templates/AboutUs';
import '../../Molecules/Gallery';
import '../../Templates/CatalogProducts';
import '../../Templates/Sales';
import '../../Templates/Footer';
import '../../Molecules/Preloader';
import './Main.scss';
import { appGallery } from '../../../constants/appGallery';

class Main extends Component {
  render() {
    return `
      <it-preloader is-loading='${JSON.stringify(false)}'>
        <it-mainpage></it-mainpage>
        <it-catalogproducts></it-catalogproducts>
        <it-aboutus></it-aboutus>
        <it-gallery slides='${JSON.stringify(appGallery)}'></it-gallery>
        <it-sales></it-sales>
        <it-footer></it-footer>
      </it-preloader>
        `;
  }
}

customElements.define('it-main', Main);
