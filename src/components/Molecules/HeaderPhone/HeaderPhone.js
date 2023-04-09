import { Component } from '../../../core/Component';
import './HeaderPhone.scss';

class HeaderPhone extends Component {
  render() {
    return `
    <it-link
        classname="header__tel"
        href="tel:7755"
        content="Заказ по телефону: 7755">
    </it-link>
        `;
  }
}

customElements.define('it-headerphone', HeaderPhone);
