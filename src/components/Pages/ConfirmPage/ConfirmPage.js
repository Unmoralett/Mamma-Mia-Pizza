import { APP_EVENTS } from '../../../constants/appEvents';
import { APP_ROUTES } from '../../../constants/appRoutes';
import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { storageService } from '../../../services/StorageService';
import './ConfirmPage.scss';

class ConfirmPage extends Component {
  continue = (evt) => {
    evt.preventDefault();
    if (evt.target.closest('.continue')) {
      storageService.clear();
      eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.main });
    }
    // eventEmmiter.emit(APP_EVENTS.changeRoute, { target: APP_ROUTES.main });
  };
  componentDidMount() {
    this.addEventListener('click', this.continue);
  }

  componentWillUnmount() {}
  render() {
    return `
        <div id='confirmPage'>
            <div class="confirm_page">
                <img src="../../../assets/images/suc.png" class="confirm_page_image">
                <div></div>
                <h1>Спасибо! Ваш заказ  принят!</h1>
                <p>В ближайшее время мы свяжемся с Вами для подтверждения заказа.</br> Копия информации о заказе отправлена на Ваш электронный адрес.</br></p>
                <p><strong>Появились вопросы?</strong></br> Наиболее оперативный ответ Вы получите, позвонив с номером заказа по телефону 7755.</br>
                До встречи и хорошего дня!</p>
                <a href="" class="btn btn-dark py-2 btn-block bg-warning list-group-item-warning continue"><strong class="basket_table">Продолжить покупки</strong></a>
            </div>
        </div>
    `;
  }
}

customElements.define('confirm-page', ConfirmPage);
