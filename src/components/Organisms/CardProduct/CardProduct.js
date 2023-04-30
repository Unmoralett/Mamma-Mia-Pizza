import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './CardProduct.scss';

class CardProduct extends Component {
  static get observedAttributes() {
    return ['filteredproducts'];
  }

  addToCart = (evt) => {
    if (evt.target.parentElement.closest('.addtocart')) {
      if (storageService.getItem('user')) {
        const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];

        const menu = JSON.parse(this.props.filteredproducts);
        storageService.setItem(APP_STORAGE_KEYS.cartData, [
          ...allItems,
          menu[evt.target.dataset.id],
        ]);
      } else {
        eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.signIn });
      }
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addToCart);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addToCart);
  }

  render() {
    const menu = JSON.parse(this.props.filteredproducts);
    return `
            <div class='CatalogProducts_menu'>
              ${menu
                .map((item, index) => {
                  return `
                  <form class="menu__product">
                    <img alt="pizza1" src='${item.preview}'>
                    <div>
                        <h3 class="menu__product-title">${item.title}</h3>
                        <p class="menu__product-price">${item.price} BYN</p>
                        <p class="menu__product-descr">${item.description}</p>
                        <a type='submit' class='addtocart'>
                          <p data-id='${index}'>В корзину</p>
                        </a>
                    </div>
                  </form>
                  `;
                })
                .join('')} 
            </div>
        `;
  }
}

customElements.define('it-cardproduct', CardProduct);
