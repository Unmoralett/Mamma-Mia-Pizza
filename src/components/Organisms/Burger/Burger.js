import { Component } from '../../../core/Component';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import '../../Atoms/Image';
import '../../Atoms/Button';
import '../../Molecules/CartSummary';
import '../../Molecules//CartCounter';
import './Burger.scss';

class Burger extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  setProducts = (products) => {
    const mapProducts = products
      .filter((item, index, arr) => {
        return arr.findIndex((findItem) => findItem.id === item.id) === index;
      })
      .map((item) => {
        return {
          ...item,
          quantity: item.quantity
            ? item.quantity
            : products.filter((filterItem) => filterItem.id === item.id).length,
        };
      });

    this.setState((state) => {
      return {
        ...state,
        products: mapProducts,
      };
    });
  };

  onStorage = (evt) => {
    this.setProducts(evt.detail.data);
  };

  onDeleteItem = (evt) => {
    if (evt.target.closest('.btn-close')) {
      const id = evt.target.parentElement.dataset.id;
      const items = this.state.products;
      const filteredItems = items
        .map((item) => {
          if (item.id === Number(id)) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      console.log(filteredItems);
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
  };

  componentDidMount() {
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.setProducts(items ?? []);
    this.addEventListener('click', this.onDeleteItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onDeleteItem);
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }
  render() {
    return `
        <input class='header__burger-input' id='burger' type="checkbox"/>
        <div class='header__burger'>
            <div class='container'>
                <div class='header__burger-title'>
                    <h2>Ваш заказ</h2>
                </div>
                <ul class="header__burger-ul">
                    ${this.state.products
                      .map((item) => {
                        return `
                        <li>
                            <div class="header__burger-pizzaCart">
                                <it-image
                                    class='header__burger-pizzaCart_logo'
                                    src='${item.img}'>
                                </it-image>
                                <div class="header__burger-pizzaCart_desc" >   
                                    <h3 class="m-0">${item.title}</h3>
                                    <p>Стандартная 32см</p>
                                </div>
                                <it-cartcounter 
                                    count='${item.quantity}'
                                ></it-cartcounter>
                                <p class="header__burger-pizzaCart_current m-0">30р</p>
                                <it-button
                                    type="button"
                                    classname="btn-close"
                                    content=""
                                    aria-label="Close"
                                    data-id='${item.id}'>
                                </it-button>
                            </div>
                        </li>
                        `;
                      })
                      .join(' ')}
                </ul>
                <it-cartsummary
                    summary='сумма'
                ></it-cartsummary>
            </div>
        </div>
        `;
  }
}

customElements.define('it-burger', Burger);
