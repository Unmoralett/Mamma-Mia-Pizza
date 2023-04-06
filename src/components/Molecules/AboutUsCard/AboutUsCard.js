import { Component } from '../../../core/Component';
import './AboutUsCard.scss';

class AboutUsCard extends Component {
  static get observedAttributes() {
    return ['class', 'title', 'text'];
  }

  render() {
    const className = this.props.class ? this.props.class : '';
    const contentTitle = this.props.title ? this.props.title : '';
    const contentText = this.props.text ? this.props.text : '';

    return `
        <div class='${className}'>
            <h2 class='${className}-title'>${contentTitle}</h2>
            <p>${contentText}</p>
        </div>
        `;
  }
}

customElements.define('it-aboutuscard', AboutUsCard);
