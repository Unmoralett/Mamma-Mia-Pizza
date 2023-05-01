import { Component } from '../../../core/Component';
import './Gallery.scss';

class Gallery extends Component {
  static get observedAttributes() {
    return ['slides'];
  }

  clearActive = (slides) => {
    slides.forEach((item) => {
      item.classList.remove('active');
    });
  };

  addActive = (evt) => {
    if (evt.target.closest('.gallery_slide')) {
      const slides = document.querySelectorAll('.gallery_slide');
      this.clearActive(slides);
      evt.target.classList.add('active');
    }
  };

  componentDidMount() {
    this.addEventListener('click', this.addActive);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.addActive);
  }

  render() {
    const slides = JSON.parse(this.props.slides);
    return `
      <div class="gallery" id='gallery_page'>
        ${slides
          .map((slide) => {
            return `
          <it-galleryslide
            class='${slide.class}'
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
