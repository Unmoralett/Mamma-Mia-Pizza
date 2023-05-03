import { Component } from '../../../core/Component';

class CalcCartPage extends Component {
  static get observedAttributes() {
    return ['sumproducts', 'sumprice', 'pricediscount', 'totalprice', 'href'];
  }

  render() {
    const { sumproducts, sumprice, pricediscount, totalprice, href } = this.props;
    return `
            <div class="bg-warning rounded px-4 py-3 text-uppercase font-weight-bold basket_table">
                <strong class="basket_table">
                Сумма заказа
                </strong>
            </div>
            <div class="p-4">
                <ul class="list-unstyled mb-4">
                <li class="d-flex justify-content-between py-3 border-bottom">
                    <strong class="basket_table">Всего товаров</strong>
                    <strong>${sumproducts}</strong>
                </li>

                <li class="d-flex justify-content-between py-3 border-bottom">
                    <strong class="basket_table">Общая сумма товаров</strong>
                    <strong>${sumprice} BYN</strong>
                </li>

                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="basket_table">Скидка</strong>
                    <strong>
                    ${pricediscount} BYN
                    </strong>
                </li>
                <li class="d-flex justify-content-between py-3 border-bottom"><strong class="basket_table">К оплате</strong>
                    <h5 class="font-weight-bold">
                    ${totalprice} BYN
                    </h5>
                </li> 
                </ul>
                <a href="${href}" class="btn btn-dark py-2 btn-block bg-warning list-group-item-warning"><strong class="basket_table">Оформить заказ</strong></a>
            </div>
        `;
  }
}

customElements.define('calc-cart-page', CalcCartPage);
