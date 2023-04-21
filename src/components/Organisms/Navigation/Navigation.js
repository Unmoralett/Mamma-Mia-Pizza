import { Component } from '../../../core/Component';
import './Navigation.scss';
import '../../Atoms/Link';
import { eventEmmiter } from '../../../core/EventEmmiter';

class Navigation extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  addActiveClass = (evt) => {
    if (evt.target.closest('.header__nav-link')) {
      evt.target.classList.add('active');
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addActiveClass);
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
                            classname="header__nav-link"
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
