import { Component } from '../../../core/Component';
import './Navigation.scss';
import '../../../core/Router/Link';
import '../../Atoms/Link';
import { APP_ROUTES } from '../../../constants/appRoutes';

class Navigation extends Component {
  static get observedAttributes() {
    return ['items'];
  }

  addActiveClassClick = (evt) => {
    if (evt.target.closest('.header__nav-link')) {
      evt.target.classList.add('active');
    }
  };

  addActiveClassScroll = () => {
    let navigationLinks = document.querySelectorAll('.scrollspy');
    let navigationLinkMain = document.querySelector('.scrollspy_main');

    let fromTop = window.scrollY + 380;

    navigationLinks.forEach((link) => {
      let section = document.querySelector(link.hash);
      const main = document.getElementById('main_page');

      if (main.offsetHeight >= fromTop) {
        navigationLinkMain.classList.add('active');
      } else {
        navigationLinkMain.classList.remove('active');
      }

      if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  componentDidMount() {
    this.addEventListener('click', this.addActiveClassClick);
    window.addEventListener('scroll', this.addActiveClassScroll);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addActiveClassClick);
    window.removeEventListener('scroll', this.addActiveClassScroll);
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
                                classname="header__nav-link scrollspy_main active"
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
                              classname="header__nav-link scrollspy"
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
