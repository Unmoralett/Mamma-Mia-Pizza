import { Component } from '../../../core/Component';
import './Navigation.scss';
import '../../../core/Router/Link';
import '../../Atoms/Link';

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

  componentWillUnmount() {
    this.removeEventListener('click', this.addActiveClass);
  }

  render() {
    const nav = JSON.parse(this.props.items);
    console.log(nav);
    return `
        <nav class="header__nav">
            <ul class="header__nav-ul">
                ${nav
                  .map((item) => {
                    if (item.group === 2) {
                      return `
                    <li>
                      <route-link to='${item.href}'>
                        <it-link 
                            classname="header__nav-link"
                            href="${item.href}"
                            content="${item.label}"> 
                        </it-link>
                      </route-link>
                    </li>
                `;
                    } else {
                      return `
                    <li>
                        <it-link 
                            classname="header__nav-link"
                            href="${item.href}"
                            content="${item.label}"> 
                        </it-link>
                    </li>
                `;
                    }
                  })
                  .join(' ')}
            </ul>
        </nav>
        `;
  }
}

customElements.define('it-navigation', Navigation);
