import { Component } from '../../../core/Component';
import '../../Atoms/Image';
import '../../Atoms/Button';
import '../../Molecules/CartSummary';
import '../../Molecules//CartCounter';
import './CartPage.scss';
import '../../Molecules/Preloader';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { APP_ROUTES } from '../../../constants/appRoutes';
import '../../../core/Router/Link';
import '../../../constants/Sales';
import { getFormData } from '../../../utils/form';
import { sales } from '../../../constants/Sales';

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
    this.state.sumProducts = items.length;
    this.setProducts(items ?? []);
    this.addEventListener('click', this.onDeleteItem);
    eventEmmiter.on(APP_EVENTS.storage, this.onStorage);
    this.addEventListener('click', this.counter);
    this.addEventListener('submit', this.promocode);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onDeleteItem);
    eventEmmiter.off(APP_EVENTS.storage, this.onStorage);
    this.removeEventListener('click', this.counter);
    this.removeEventListener('submit', this.promocode);
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
                                <strong class="basket_table">Стоимость</strong>
                              </div>
                            </th>

                            <th scope="col" class="border-0 bg-warning">
                              <div class="py-2 text-uppercase">
                                <strong class="basket_table">Количество</strong>
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
                                      <span class="text-muted font-weight-normal font-italic d-block">${item.description}</span>
                                    </div>
                                  </div>
                                </th>
                                <td class="border-1 align-middle"><strong>${item.price} BYN</strong></td>
                                <td class="border-1 align-middle"><strong>
                                  <div class="cart-counter">
                                    <button type="button" class="cart-counter-remove" data-id='${item.id}'>
                                      <svg width="10" height="10" viewBox="0 0 10 10" class="icon" data-id='${item.id}'>
                                        <rect fill="#454B54" y="4" width="10" height="2" rx="1" data-id='${item.id}'></rect>
                                      </svg>
                                    </button>
                                    <div class="cart-counter-count">${item.quantity}</div>
                                      <button type="button" class="cart-counter-add" data-id='${item.id}'>
                                        <svg width="10" height="10" viewBox="0 0 10 10" class="icon" data-id='${item.id}'>
                                          <g fill="#454B54"><rect x="4" width="2" height="10" ry="1" data-id='${item.id}'></rect><rect y="4" width="10" height="2" rx="1" data-id='${item.id}'></rect></g>
                                        </svg>
                                      </button>
                                    </div></strong>
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
                    <div class="bg-warning rounded px-4 py-3 text-uppercase font-weight-bold basket_table">
                      <strong class="basket_table">Промокод</strong>
                    </div>
                    <div class="p-4">
                      <p class="font-italic mb-4">Если Вы имеете промокод, введите в поле ниже</p>
                      <div class="input-group mb-4 border rounded p-0 ssss">
                        <form class='d-flex' enctype='multipart/form-data'>
                          <input name="coupon" type="text" placeholder="LIKE" class="form-control border-0 p-2 me-auto">
                          <div class="input-group-append border-0 w-60 p-1">
                            <button type="submit" class="btn btn-dark px-4 m-0 me-auto bg-warning list-group-item-warning basket_table"><i class="fa fa-gift mr-2"></i>Применить</button>
                          </div>
                        </form>
                      </div>
                    </div>

                    <div class="bg-warning rounded px-4 py-3 text-uppercase font-weight-bold basket_table">
                      <strong class="basket_table">Комментарий к заказу</strong>
                    </div>
                    <div class="p-4">
                      <p class="font-italic mb-4">Укажите пожелания к заказу</p>
                      <textarea name="comment" cols="30" rows="2" class="form-control"></textarea>
                    </div>
                  </div>

                  <div class="col-lg-6">
                    <div class="bg-warning rounded px-4 py-3 text-uppercase font-weight-bold basket_table">
                    <strong class="basket_table">
                      Сумма заказа
                    </strong>
                      
                    </div>
                    <div class="p-4">
                      <ul class="list-unstyled mb-4">
                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="basket_table">Всего товаров</strong>
                          <strong>${sumProducts}</strong>
                        </li>

                        <li class="d-flex justify-content-between py-3 border-bottom">
                          <strong class="basket_table">Общая сумма товаров</strong>
                          <strong>${sumPrice} BYN</strong>
                        </li>

                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="basket_table">Скидка</strong>
                          <strong>
                            ${priceDiscount} BYN
                          </strong>
                        </li>
                        <li class="d-flex justify-content-between py-3 border-bottom"><strong class="basket_table">К оплате</strong>
                          <h5 class="font-weight-bold">
                            ${totalPrice} BYN
                          </h5>
                        </li> 
                      </ul>
                      <a href="${
                        APP_ROUTES.confirmPage
                      }" class="btn btn-dark py-2 btn-block bg-warning list-group-item-warning"><strong class="basket_table">Оформить заказ</strong></a>
                    </div>
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
      <div class='container container_clear'>
        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" class="container_clear_image">
        <h1 class="d-flex justify-content-center">Ой, пусто!</h1>
        <div class="d-flex justify-content-center">Ваша корзина пуста, откройте «Меню» и выберите понравившийся Вам товар.</div>
      </div>
      `;
    }
  }
}

customElements.define('cart-page', CartPage);
