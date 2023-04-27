import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';

import '../../Atoms/Link';
import '../../Atoms/Image';
import './Basket.scss';
import { routes } from '../../../constants/routes';

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

  countProducts = (data) => {
    return data
      .filter((item, index, arr) => {
        return arr.findIndex((indexItem) => indexItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : data.filter((filteredItem) => filteredItem.id === item.id).length,
        };
      })
      .reduce((acc, item) => acc + item.quantity, 0);
  };

  onStorage = (evt) => {
    const count = this.countProducts(evt.detail.data);
    this.setProductsCount(count);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
    const count = this.countProducts(items);
    this.setProductsCount(count);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    return `
        <div class='header__basket'>
          <route-link to='${routes.cartPage.href}'>
            <it-image class='header__basket-img' src='../../assets/images/basket.png'></it-image>
            <span class='header__basket-img-summ badge rounded-pill bg-success'>
              ${this.state.productsCount}
            </span>
          </route-link>
        </div>  
        `;
  }
}

customElements.define('it-basket', Basket);
