import { Component } from '../../../core/Component';
import './PromoCartPage.scss';

class PromoCartPage extends Component {
  render() {
    return `
            <div class="bg-warning rounded px-4 py-3 text-uppercase font-weight-bold basket_table">
                <strong class="basket_table">Промокод</strong>
            </div>

            <div class="p-4">
                <p class="font-italic mb-4">Если Вы имеете промокод, введите в поле ниже</p>
                <div class="input-group mb-4 border rounded p-0 ssss">
                    <form class='d-flex' enctype='multipart/form-data'>
                        <input name="coupon" type="text" placeholder="LIKE" class="form-control border-0 p-2 me-auto">
                        <div class="input-group-append border-0 w-60 p-1">
                            <button type="submit" class="btn btn-dark px-4 m-0 me-auto bg-warning list-group-item-warning basket_table"><i class="fa fa-gift mr-2"></i>Применить</button>
                        </div>
                    </form>
                </div>
            </div>

            <div class="bg-warning rounded px-4 py-3 text-uppercase font-weight-bold basket_table">
                <strong class="basket_table">Комментарий к заказу</strong>
            </div>
            <div class="p-4">
                <p class="font-italic mb-4">Укажите пожелания к заказу</p>
                <textarea name="comment" cols="30" rows="2" class="form-control"></textarea>
            </div>
        `;
  }
}

customElements.define('promo-cart-page', PromoCartPage);
