import { APP_EVENTS } from '../../../constants/appEvents';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import '../../Atoms/Image';
import './CartCounter.scss';

class CartCounter extends Component {
  static get observedAttributes() {
    return ['count'];
  }
////////
  pressButton = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.btn-danger')) {
      eventEmmiter.emit(APP_EVENTS.cartcounter, { counter: Number(this.props.count) - 1 });
    }
    if (evt.target.closest('.btn-success')) {
      eventEmmiter.emit(APP_EVENTS.cartcounter, { counter: Number(this.props.count) + 1 });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.pressButton);
  }
  componentWillUnmount() {
    this.removeEventListener('click', this.pressButton);
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
