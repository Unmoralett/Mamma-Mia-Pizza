import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import './NavMenu.scss';
import '../../Atoms/Link';
import { APP_EVENTS } from '../../../constants/appEvents';

class NavMenu extends Component {
  static get observedAttributes() {
    return ['links', 'current'];
  }

  onChangeCategory = (evt) => {
    evt.preventDefault();

    if (evt.target.closest('.nav-link')) {
      eventEmmiter.emit(APP_EVENTS.changeCategoryMenu, {
        label: evt.target.parentElement.dataset.label,
      });
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onChangeCategory);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onChangeCategory);
  }

  render() {
    const links = JSON.parse(this.props.links);
    return `
        <nav class="CatalogProducts_nav nav nav-pills nav-fill">
            ${links
              .map((item) => {
                const current = this.props.current;
                const isActive = item.label === current;
                return `
                <it-link
                    classname="nav-link link-success border border-2 border-warning ${
                      isActive ? 'active bg-warning text-dark' : ''
                    }"
                    href=""
                    content='${item.label}'
                    data-label='${item.label}'
                ></it-link>
                `;
              })
              .join(' ')}
        </nav>
        `;
  }
}

customElements.define('it-navmenu', NavMenu);
