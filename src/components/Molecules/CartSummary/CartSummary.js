import { Component } from '../../../core/Component';
import '../../Atoms/Link';
import '../../Atoms/Image';
import './CartSummary.scss';

class CartSummary extends Component {
  render() {
    return `
        <div class="header__burger-pizzaCart_allCurrent">
            <h5><span>Итого</span> 35р</h5></br>
            <it-button
                type="submit"
                class="btn btn-info"
                content="Оформить"
                aria-label="Close">
            </it-button>
        </div>  
        `;
  }
}

customElements.define('it-cartsummary', CartSummary);
