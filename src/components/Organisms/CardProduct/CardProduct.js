import { Component } from '../../../core/Component';
import './CardProduct.scss';

class CardProduct extends Component {
  static get observedAttributes() {
    return ['products'];
  }

  render() {
    const menu = JSON.parse(this.props.products);
    return `
            <div class='CatalogProducts_menu'>
              ${menu
                .map((item) => {
                  return `
                  <form class="menu__product">
                    <img alt="pizza1" src='${item.img}'>
                      <div>
                          <h3 class="menu__product-title">${item.title}</h3>
                          <p class="menu__product-price">${item.price}</p>
                          <p class="menu__product-descr">${item.desc}</p>
                          <input class='size32 item${item.id}' type="radio" name="size" value='32'><label for="size">32см</label>
                          <input class='size45 item${item.id}' type="radio" name="size" value='45'><label for="size">45см</label>
                          <a href="#" type='submit'><p>В корзину</p></a>
                      </div>
                  </form>
                `;
                })
                .join(' ')} 
            </div>

        `;
  }
}

customElements.define('it-cardproduct', CardProduct);