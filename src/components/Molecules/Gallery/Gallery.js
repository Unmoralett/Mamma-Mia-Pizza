import { Component } from '../../../core/Component';
import './Gallery.scss';

class Gallery extends Component {
  static get observedAttributes() {
    return ['slides'];
  }

  render() {
    const slides = JSON.parse(this.props.slides);
    return `
      <div class="gallery" id='gallery_page'>
        ${slides
          .map((slide) => {
            return `
          <it-galleryslide
            class='gallery_slide'
            style="background-image: url('${slide.src}')">
          </it-galleryslide>
          `;
          })
          .join('')}
      </div>
        `;
  }
}

customElements.define('it-gallery', Gallery);
