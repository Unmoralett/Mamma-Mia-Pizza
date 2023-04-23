import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';
import { PRODUCTS } from '../../../constants/products';
import { Component } from '../../../core/Component';
import { storageService } from '../../../services/StorageService';
import './CardProduct.scss';

class CardProduct extends Component {
  static get observedAttributes() {
    return ['filteredproducts'];
  }

  addToCart = (evt) => {
    if (evt.target.parentElement.closest('.addtocart')) {
      const allItems = storageService.getItem(APP_STORAGE_KEYS.cartData) ?? [];
      storageService.setItem(APP_STORAGE_KEYS.cartData, [
        ...allItems,
        PRODUCTS[evt.target.dataset.id - 1],
      ]);
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
                .map((item) => {
                  if (item.price32 === '' || null || undefined) {
                    return `
                  <form class="menu__product">
                    <img alt="pizza1" src='${item.preview}'>
                    <div>
                        <h3 class="menu__product-title">${item.title}</h3>
                        <p class="menu__product-price">${item.price}</p>
                        <p class="menu__product-descr">${item.description}</p>
                        <a href="#" type='submit' class='addtocart'><p data-id='${item.id}'>В корзину</p></a>
                    </div>
                  </form>
                `;
                  } else {
                    return `
                  <form class="menu__product">
                    <img alt="pizza1" src='${item.preview}'>
                    <div>
                        <h3 class="menu__product-title">${item.title}</h3>
                        <p class="menu__product-price">${item.price}</p>
                        <p class="menu__product-descr">${item.description}</p>
                        <input class='size32 item${item.id}' type="radio" name="size" value='32'><label for="size">32см</label>
                        <input class='size45 item${item.id}' type="radio" name="size" value='45'><label for="size">45см</label>
                        <a href="#" type='submit' class='addtocart'><p data-id='${item.id}'>В корзину</p></a>
                    </div>
                  </form>
                `;
                  }
                })
                .join(' ')} 
            </div>
        `;
  }
}

customElements.define('it-cardproduct', CardProduct);
