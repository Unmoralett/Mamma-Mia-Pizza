import { Component } from '../../../core/Component';
import './Sales.scss';

import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

class Sales extends Component {
  static get observedAttributes() {
    return ['slides'];
  }

  initSwiper() {
    new Swiper('.mySwiper', {
      modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
      effect: 'coverflow',
      grabCursor: true,
      speed: 1000,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000,
      },
    });
  }

  componentDidMount() {
    this.initSwiper();
  }
  render() {
    return `
    <div class='sales' id='sales_page'>
        <div class='container'>
            <h2 class='sales_title'>Акции</h2>
            
            <div class="swiper mySwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <figure>
                            <p><img src="../../../assets/images/sales1.jpg" alt="..."></p>
                            <figcaption><strong>ПРОМОКОД "СЫР"</strong></figcaption caption>    
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure>
                            <p><img src="../../../assets/images/sales2.jpg" alt="..."></p>
                            <figcaption><strong>ПРОМОКОД "D120"</strong></figcaption caption>    
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure>
                            <p><img src="../../../assets/images/sales3.jpg" alt="..."></p>
                            <figcaption><strong>ПРОМОКОД "4209"</strong></figcaption caption>    
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure>
                            <p><img src="../../../assets/images/sales4.jpg" alt="..."></p>
                            <figcaption><strong>ПРОМОКОД "LIKE"</strong></figcaption caption>    
                        </figure>
                    </div>
                    <div class="swiper-slide">
                        <figure>
                            <p><img src="../../../assets/images/sales5.jpg" alt="..."></p>
                            <figcaption><strong>ПРОМОКОД "РЕПОСТ"</strong></figcaption caption>    
                        </figure>
                    </div>

                </div>

                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
                
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('it-sales', Sales);
