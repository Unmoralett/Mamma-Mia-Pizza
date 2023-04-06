import { Component } from '../../../core/Component';
import './Navigation.scss';
import '../../Atoms/Link';

class Navigation extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  render() {
    const nav = JSON.parse(this.props.items);
    return `
        <nav class="header__nav">
            <ul class="header__nav-ul">
                ${nav
                  .map((item) => {
                    return `
                    <li>
                        <it-link 
                            class="header__nav-link header__nav-link--active"
                            href="${item.href}"
                            content="${item.label}"> 
                        </it-link>
                    </li>
                `;
                  })
                  .join(' ')}
            </ul>
        </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
