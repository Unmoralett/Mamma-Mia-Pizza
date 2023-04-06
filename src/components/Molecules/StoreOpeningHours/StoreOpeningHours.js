import { Component } from '../../../core/Component';
import './StoreOpeningHours.scss';

class StoreOpeningHours extends Component {
  render() {
    return `
        <div class='header__text'>  
            <h6>Время работы</h6>
            <h6 class='header__text-time'>с 10:00 до 24:00</h6>
        </div>
        `;
  }
}

customElements.define('it-storeopeninghours', StoreOpeningHours);
