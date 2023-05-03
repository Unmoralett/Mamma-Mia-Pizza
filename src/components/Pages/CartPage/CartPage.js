import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { getFormData } from '../../../utils/form';
import { sales } from '../../../constants/Sales';

import '../../Atoms/Image';
import '../../Atoms/Button';
import '../../Molecules/CartSummary';
import '../../Molecules//CartCounter';
import '../../Molecules/Preloader';
import '../../Organisms/CalcCartPage';
import '../../Organisms/PromoCartPage';
import '../../Organisms/EmptyCart';
import '../../../core/Router/Link';
import '../../../constants/Sales';
import './CartPage.scss';

class CartPage extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      sumProducts: 0,
      isLoading: false,
      promocode: 0,
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

  onStorage = () => {
    this.setProducts(storageService.getItem(APP_STORAGE_KEYS.cartData) ?? []);
  };

  onDeleteItem = (evt) => {
    if (evt.target.closest('.btn-close')) {
      const id = evt.target.parentElement.dataset.id;
      const items = this.state.products;
      const filteredItems = items
        .map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: 0,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, filteredItems);
    }
  };

  sumPrice(products) {
    return products.reduce((acc, item) => {
      return (acc += item.quantity ? item.price * item.quantity : item.price);
    }, 0);
  }

  sumCount(products) {
    return products.reduce((acc, item) => {
      return (acc += item.quantity ? item.quantity : 1);
    }, 0);
  }

  counter = (evt) => {
    if (evt.target.closest('.cart-counter-remove')) {
      const items = this.state.products;
      const deleteItem = items
        .map((item) => {
          if (item.id === evt.target.dataset.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => Boolean(item.quantity));
      storageService.setItem(APP_STORAGE_KEYS.cartData, deleteItem);
    }
    if (evt.target.closest('.cart-counter-add')) {
      const items = this.state.products;
      const addItem = items.map((item) => {
        if (item.id === evt.target.dataset.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      storageService.setItem(APP_STORAGE_KEYS.cartData, addItem);
    }
  };

  promocode = (evt) => {
    evt.preventDefault();
    const { coupon } = getFormData(evt.target);
    sales.map((item) => {
      if (item.label === coupon) {
        this.setState((state) => {
          return {
            ...state,
            promocode: item.percent,
          };
        });
      }
    });
  };

  componentDidMount() {
    const items = storageService.getItem(APP_STORAGE_KEYS.cartData);
    this.state.sumProducts = items?.length;
    this.setProducts(items ?? []);
    this.addEventListener('click', this.onDeleteItem);
    this.addEventListener('click', this.counter);
    this.addEventListener('submit', this.promocode);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onDeleteItem);
    this.removeEventListener('click', this.counter);
    this.removeEventListener('submit', this.promocode);
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
  }

  render() {
    const sumProducts = this.sumCount(this.state.products);
    const sumPrice = this.sumPrice(this.state.products);
    const priceDiscount = (sumPrice * (this.state.promocode / 100)).toFixed(1);
    const totalPrice = sumPrice - priceDiscount;
    if (this.state.products.length > 0) {
      return ` 
      <it-preloader is-loading='${this.state.isLoading}'>
            <div class='container container-cart'>
            <div class="px-4 px-lg-0">

            <div class="pb-5">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12 p-5 bg-white shadow-sm mb-3">
          
                    <div class="table-responsive">
                      <table class="table">
                        <thead class='basket_table'>
                          <tr>
                            <th scope="col" class="border-0 bg-warning rounded-start">
                              <div class="p-2 px-3 text-uppercase">
                                <strong class="basket_table">Товары</strong>
                              </div>
                            </th>

                            <th scope="col" class="border-0 bg-warning">
                              <div class="py-2 text-uppercase">
                                <strong class="basket_table">Количество</strong>
                              </div>
                            </th>

                            <th scope="col" class="border-0 bg-warning">
                              <div class="py-2 text-uppercase">
                                <strong class="basket_table">Стоимость</strong>
                              </div>
                            </th>

                            <th scope="col" class="border-0 bg-warning rounded-end">
                              <div class="py-2 text-uppercase"></div>
                            </th>
                          </tr>
                        </thead>

                        <tbody>
                          ${this.state.products
                            .map((item) => {
                              return `
                              <tr>
                                <th scope="row" class="border-1">
                                  <div class="p-2 d-flex">
                                    <it-image
                                          class='header__burger-pizzaCart_logo align-middle'
                                          src='${item.preview}'>
                                    </it-image>
                                    <div class="ml-3 d-inline-block align-middle">
                                      <h5 class="mb-0">${item.title}</h5>
                                      <span class="text-muted font-weight-normal font-italic d-block">
                                        ${item.description}
                                      </span>
                                    </div>
                                  </div>
                                </th>
                                
                                <td class="border-1 align-middle"><strong>
                                  <div class="cart-counter">
                                    <button type="button" 
                                    class="cart-counter-remove" 
                                    data-id='${item.id}'>
                                      <svg width="10" height="10" viewBox="0 0 10 10" class="icon" 
                                        data-id='${item.id}'>
                                        <rect fill="#454B54" y="4" width="10" height="2" rx="1" 
                                          data-id='${item.id}'>
                                        </rect>
                                      </svg>
                                    </button>
                                    <div class="cart-counter-count">${item.quantity}</div>
                                      <button type="button" 
                                        class="cart-counter-add" data-id='${item.id}'>
                                        <svg width="10" height="10" viewBox="0 0 10 10" class="icon" 
                                          data-id='${item.id}'>
                                          <g fill="#454B54"><rect x="4" width="2" height="10" ry="1" 
                                            data-id='${item.id}'>
                                            </rect><rect y="4" width="10" height="2" rx="1" 
                                              data-id='${item.id}'>
                                            </rect>
                                          </g>
                                        </svg>
                                      </button>
                                    </div></strong>
                                </td>
                                <td class="border-1 align-middle">
                                  <strong>${item.price * item.quantity} BYN</strong>
                                </td>
                                <td class="border-1 align-middle">
                                  <it-button
                                    type="button"
                                    classname="btn-close"
                                    content=""
                                    aria-label="Close"
                                    data-id='${item.id}'>
                                  </it-button>
                                </td>
                              </tr>
                              `;
                            })
                            .join(' ')}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
          
                <div class="row py-5 p-4 bg-white rounded shadow-sm">

                  <div class="col-lg-6">
                    <promo-cart-page></promo-cart-page>            
                  </div>

                  <div class="col-lg-6">
                    <calc-cart-page
                      sumproducts='${sumProducts}' 
                      sumprice='${sumPrice}'
                      pricediscount='${priceDiscount}'
                      totalprice='${totalPrice}' 
                      href='${APP_ROUTES.confirmPage}'
                    ></calc-cart-page>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </it-preloader>
      `;
    } else {
      return `
        <empty-page></empty-page>
      `;
    }
  }
}

customElements.define('cart-page', CartPage);
