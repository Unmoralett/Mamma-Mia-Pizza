import { Component } from '../../../core/Component';
import '../../Atoms/Link';
import '../../Atoms/Image';
import './CartSummary.scss';

class CartSummary extends Component {
  static get observedAttributes() {
    return ['summary'];
  }
  render() {
    return `
        <div class="header__burger-pizzaCart_allCurrent">
            <h5><span>Итого</span> ${this.props.summary} р</h5></br>
            <it-button
                type="submit"
                classname="btn btn-info"
                content="Оформить"
                aria-label="Close">
            </it-button>
        </div>  
        `;
  }
}

customElements.define('it-cartsummary', CartSummary);
