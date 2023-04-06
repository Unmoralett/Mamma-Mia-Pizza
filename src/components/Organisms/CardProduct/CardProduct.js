import { Component } from '../../../core/Component';
import './CardProduct.scss';

class CardProduct extends Component {
  static get observedAttributes() {
    return ['img', 'name', 'price', 'desc', 'id'];
  }

  render() {
    return `
        <form class="menu__product">
            <img alt="pizza1" src='${this.props.img}'>
                <div>
                    <h3 class="menu__product-title">${this.props.name}</h3>
                    <p class="menu__product-price">${this.props.price}</p>
                    <p class="menu__product-descr">${this.props.desc}</p>
                    <input class='size32 item${this.props.id}' type="radio" name="size" value='32'><label for="size">32см</label>
                    <input class='size45 item${this.props.id}' type="radio" name="size" value='45'><label for="size">45см</label>
                    <a href="#" type='submit'><p>В корзину</p></a>
                </div>
        </form>
        `;
  }
}

customElements.define('it-cardproduct', CardProduct);
