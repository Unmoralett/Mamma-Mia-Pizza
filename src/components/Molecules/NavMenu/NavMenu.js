import { Component } from '../../../core/Component';
import './NavMenu.scss';
import '../../Atoms/Link';

class NavMenu extends Component {
  render() {
    return `
        <nav class="CatalogProducts_nav nav nav-pills nav-fill">
            <it-link
                class="nav-link link-success text-bg-warning border border-2 border-warning active"
                href="#"
                content='Пицца'>
            </it-link>
            <it-link
                class="nav-link link-success border border-2 border-warning"
                href="#"
                content='Десерты'>
            </it-link>
            <it-link
                class="nav-link link-success border border-2 border-warning"
                href="#"
                content='Напитки'>
            </it-link>
        </nav>
        `;
  }
}

customElements.define('it-navmenu', NavMenu);
