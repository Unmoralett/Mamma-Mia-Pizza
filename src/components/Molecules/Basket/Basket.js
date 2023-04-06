import { Component } from '../../../core/Component';
import '../../Atoms/Link';
import '../../Atoms/Image';
import './Basket.scss';

class Basket extends Component {
  render() {
    return `
        <div class='header__basket'>
            <label for='burger'>    
                <it-image 
                    class='header__basket-img'
                    src='../../assets/images/basket.png'>
                </it-image>
                <span class=" header__basket-img-summ badge rounded-pill bg-success">
                    99
                </span>
            </label>
        </div>  
        `;
  }
}

customElements.define('it-basket', Basket);
