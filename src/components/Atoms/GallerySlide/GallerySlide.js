import { Component } from '../../../core/Component';
import '../../../assets/images/';
class GallerySlide extends Component {
  static get observedAttributes() {
    return ['class', 'style'];
  }

  render() {
    const className = this.props.class ? this.props.class : '';
    const style = this.props.style
      ? this.props.style
      : "background-image: url('../../../assets/images/gallery8.jpg')";

    return `
        <div class="${className}" style="${style}"></div>
      `;
  }
}

customElements.define('it-galleryslide', GallerySlide);
