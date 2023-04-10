import { Component } from '../../../core/Component';
import '../../Atoms/Image';
import './CartCounter.scss';

class CartCounter extends Component {
  static get observedAttributes() {
    return ['count'];
  }
  render() {
    return `
        <div class="header__burger-pizzaCart_calc">
            <it-button
                type="button"
                classname="header__burger-pizzaCart_calc-btn btn btn-danger fw-bold"
                content="-">
            </it-button>   

            <p class="quantity m-0 p-2">${this.props.count}</p>
            
            <it-button
                type="button"
                classname="header__burger-pizzaCart_calc-btn btn btn-success fw-bold"
                content="+">
            </it-button>   
        </div>
        `;
  }
}

customElements.define('it-cartcounter', CartCounter);
