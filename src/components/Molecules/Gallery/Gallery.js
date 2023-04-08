import { Component } from '../../../core/Component';
import './Gallery.scss';

class Gallery extends Component {
  render() {
    return `
      <div class="gallery" id='gallery_page'>
        <it-galleryslide
          class='gallery_slide'
          style="background-image: url('../../../assets/images/gallery3.jpg')">
        </it-galleryslide>

        <it-galleryslide
          class='gallery_slide'
          style="background-image: url('../../../assets/images/gallery4.png')">
        </it-galleryslide>

        <it-galleryslide
          class='gallery_slide'
          style="background-image: url('../../../assets/images/gallery1.jpg')">
        </it-galleryslide>

        <it-galleryslide
          class='gallery_slide active'
          style="background-image: url('../../../assets/images/gallery8.jpg')">
        </it-galleryslide>

        <it-galleryslide
          class='gallery_slide'
          style="background-image: url('../../../assets/images/gallery5.jpeg')">
        </it-galleryslide>

        <it-galleryslide
          class='gallery_slide'
          style="background-image: url('../../../assets/images/gallery_main2.jpg')">
        </it-galleryslide>
      </div>
        `;
  }
}

customElements.define('it-gallery', Gallery);
