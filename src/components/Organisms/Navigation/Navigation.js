import { Component } from '../../../core/Component';
import './Navigation.scss';
import '../../Atoms/Link';

class Navigation extends Component {
  render() {
    return `
        <nav class="header__nav">
            <ul class="header__nav-ul">
                <li>
                    <it-link 
                    class="header__nav-link header__nav-link--active"
                    href="index.html"
                    content="Главная"
                    ></it-link>
                </li>
                <li>
                    <it-link 
                    class="header__nav-link"
                    href="#"
                    content="О нас"
                    ></it-link>
                </li>
                <li>
                    <it-link 
                    class="header__nav-link"
                    href="#"
                    content="Галерея"
                    ></it-link>
                </li>
                <li>
                    <it-link 
                    class="header__nav-link"
                    href="#"
                    content="Пицца"
                    ></it-link>
                </li>
                <li>
                    <it-link 
                    class="header__nav-link"
                    href="#"
                    content="Контакты"
                    ></it-link>
                </li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
