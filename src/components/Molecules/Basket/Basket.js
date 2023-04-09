import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';

import '../../Atoms/Link';
import '../../Atoms/Image';
import './Basket.scss';

class Basket extends Component {
  constructor() {
    super();
    this.state = {
      productsCount: 0,
    };
  }

  setProductsCount = (count) => {
    this.setState(() => {
      return {
        productsCount: count,
      };
    });
  };

  onStorage = (evt) => {
    this.setProductsCount(evt.detail.data.length);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    this.setProductsCount(items.length);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
        <div class='header__basket'>
            <label for='burger'>    
                <it-image 
                    class='header__basket-img'
                    src='../../assets/images/basket.png'>
                </it-image>
                <span class=" header__basket-img-summ badge rounded-pill bg-success">
                    ${this.state.productsCount}
                </span>
            </label>
        </div>  
        `;
  }
}

customElements.define('it-basket', Basket);
