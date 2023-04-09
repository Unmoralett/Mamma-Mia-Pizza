import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';

import './NavMenu.scss';
import '../../Atoms/Link';
import { APP_EVENTS } from '../../../constants/appEvents';

class NavMenu extends Component {
  static get observedAttributes() {
    return ['links'];
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

  componentWillUnmount() {}

  render() {
    const links = JSON.parse(this.props.links);
    return `
        <nav class="CatalogProducts_nav nav nav-pills nav-fill">
            ${links
              .map((item) => {
                return `
                <it-link
                    classname="nav-link link-success border border-2 border-warning"
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
