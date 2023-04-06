import { Component } from '../../../core/Component';
import '../../Atoms/Image';
import '../../Atoms/Button';
import '../../Molecules/CartSummary';
import '../../Molecules//CartCounter';
import './Burger.scss';

class Burger extends Component {
  render() {
    return `
        <input class='header__burger-input' id='burger' type="checkbox"/>
        <div class='header__burger'>
            <div class='container'>
                <div class='header__burger-title'>
                    <h2>Ваш заказ</h2>
                </div>
                <ul class="header__burger-ul">
                    <li>
                        <div class="header__burger-pizzaCart">
                            <it-image
                                class='header__burger-pizzaCart_logo'
                                src='../../assets/images/logoR.png'>
                            </it-image>
                            <div class="header__burger-pizzaCart_desc" >   
                                <h3 class="m-0">Цыпленок карри</h3>
                                <p>Стандартная 32см</p>
                            </div>
                            <it-cartcounter></it-cartcounter>
                            <p class="header__burger-pizzaCart_current m-0">30р</p>
                            <it-button
                                type="button"
                                class="btn-close"
                                content=""
                                aria-label="Close">
                            </it-button>
                        </div>
                    </li>
                </ul>
                <it-cartsummary></it-cartsummary>
            </div>
        </div>
        `;
  }
}

customElements.define('it-burger', Burger);
