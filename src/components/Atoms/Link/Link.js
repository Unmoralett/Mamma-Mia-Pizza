import { Component } from '../../../core/Component';

class Link extends Component {
  static get observedAttributes() {
    return ['classname', 'href', 'content', 'img'];
  }

  onClick = (evt) => {
    if (!this.props.href) {
      evt.preventDefault();
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    const className = this.props.classname ? this.props.classname : '';
    const content = this.props.content;
    return `
         <a class='${className}' href='${this.props.href}'>${
      this.props.img ? content + this.props.img : content
    }</a>
      `;
  }
}

customElements.define('it-link', Link);
