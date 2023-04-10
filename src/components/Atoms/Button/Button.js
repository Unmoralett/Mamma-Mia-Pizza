import { Component } from '../../../core/Component';

class Button extends Component {
  static get observedAttributes() {
    return ['classname', 'type', 'content'];
  }

  render() {
    const className = this.props.classname ? this.props.classname : '';
    const buttonType = this.props.type ? this.props.type : 'button';

    return `
        <button type="${buttonType}" class="${className}">${this.props.content}</button>
      `;
  }
}

customElements.define('it-button', Button);
