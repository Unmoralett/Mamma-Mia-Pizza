import { Component } from '../../../core/Component';

import './Footer.scss';

class Footer extends Component {
  mockData = (evt) => {
    evt.preventDefault();
  };
  componentDidMount() {
    this.addEventListener('click', this.mockData);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.mockData);
  }

  render() {
    return `
        <footer class="footer-section" id='contacts_page'>
            <div class="container">
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="cta-text">
                                    <h4>Мы находимся здесь</h4>
                                    <span>Гомель, 2-я революционная, 8/2</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-phone"></i>
                                <div class="cta-text">
                                    <h4>Телефон</h4>
                                    <span>+375 (29) 382-46-46</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="far fa-envelope-open"></i>
                                <div class="cta-text">
                                    <h4>Почта</h4>
                                    <span>mammamia@info.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-text">
                                    <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                    elit,Lorem ipsum dolor sit amet.</p>
                                </div>
                                <div class="footer-social-icon">
                                    <span>Мы в социальных сетях</span>
                                    <a href="#" class='mock_data'><i class="fab fa-facebook-f facebook-bg"></i></a>
                                    <a href="#" class='mock_data'><i class="fab fa-twitter twitter-bg"></i></a>
                                    <a href="#" class='mock_data'><i class="fab fa-google-plus-g google-bg"></i></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Полезные статьи</h3>
                                </div>
                                <ul>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                    <li><a href="#" class='mock_data'>Lorem ipsum</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
                                    <h3>Подписка</h3>
                                </div>
                                <div class="footer-text mb-25">
                                    <p>Будь вкурсе всех наших событий и новых акций, подпишись!</p>
                                </div>
                                <div class="subscribe-form">
                                    <form action="#">
                                        <input type="text" placeholder="Электроннный адрес">
                                        <button><i class="fab fa-telegram-plane"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p><strong>Мамма мия!</strong> &copy; 2023, Все права защищиены.</p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                            <div class="footer-menu">
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        `;
  }
}

customElements.define('it-footer', Footer);
