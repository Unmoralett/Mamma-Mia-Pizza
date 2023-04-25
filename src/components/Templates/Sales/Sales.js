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
        delay: 2500,
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
                    <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </div>
                <div class="swiper-slide">
                    <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </div>
                </div>
                <div class="swiper-pagination"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>



            <div class="card-group">
                <div class="card border border-3 border-success">
                    <img src="../../../assets/images/sales_1.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Закажи 2 пиццы и получи 3 </br> в подарок!</h5>
                        <p class="card-text">
                        1+1=3. Закажи 3 пиццы и получи меньшую по стоимости в подарок. </br>
                        Предложение действует c пн-пт (кроме праздников) по промокоду "1+1". </br>
                        Для получения бесплатной пиццы необходимо выбрать 3 пиццы . Меньшая из них по стоимости будет добавлена в Ваш заказ за 1 копейку.
                        </p>
                    </div>

                </div>
                <div class="card border border-3 border-success">
                    <img src="../../../assets/images/sales_2.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">-20% на самовывоз!</h5>
                        <p class="card-text">
                            При заказе любых пицц на самовывоз — мы сделаем вам скидку -20%! </br>
                            Акция действует только на самовывоз с пн-чт (кроме праздников) с 10:00 до 24:00 по промокоду "LIKE".
                        </p>
                    </div>

                </div>
                <div class="card border border-3 border-success">
                    <img src="../../../assets/images/sales_3.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">-20% на всё в подарок на день рождения именниникам!</h5>
                        <p class="card-text">
                            Акция действует в течение 7 дней: за три дня до, в сам День Рождения и в течение 3 дней после. </br>
                            Для того, чтобы акция подействовала, предъяви подтверждающий документ. Промокод "HAPPYBIRTHDAY".
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
  }
}

customElements.define('it-sales', Sales);
