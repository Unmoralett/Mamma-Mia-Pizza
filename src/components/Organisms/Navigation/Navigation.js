import { Component } from '../../../core/Component';
import './Navigation.scss';
import '../../../core/Router/Link';
import '../../Atoms/Link';
import { APP_ROUTES } from '../../../constants/appRoutes';

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
    return `
        <nav class="header__nav">
            <ul class="header__nav-ul">
                ${nav
                  .map((item) => {
                    if (item.label === 'Главная') {
                      return `
                      <route-link to='${APP_ROUTES.main}'>
                        <li>
                            <it-link 
                                classname="header__nav-link"
                                href="${item.href}"
                                content="${item.label}"> 
                            </it-link>
                        </li>
                      </route-link>
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
