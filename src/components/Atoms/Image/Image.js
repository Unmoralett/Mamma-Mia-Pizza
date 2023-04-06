import { Component } from '../../../core/Component';

class Image extends Component {
  static get observedAttributes() {
    return ['class', 'src'];
  }

  render() {
    const className = this.props.class ? this.props.class : '';

    return `
        <img class='${className}' src='${this.props.src}' alt='err'/>
      `;
  }
}

customElements.define('it-image', Image);
