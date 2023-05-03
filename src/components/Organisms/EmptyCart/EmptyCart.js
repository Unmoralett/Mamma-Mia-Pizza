import { Component } from '../../../core/Component';

class EmptyCart extends Component {
  render() {
    return `
    <div class='container container_clear'>
        <img src="https://dodopizza-a.akamaihd.net/site-static/dist/121df529925b0f43cc73.svg" class="container_clear_image">
        <h1 class="d-flex justify-content-center">Ой, пусто!</h1>
        <div class="d-flex justify-content-center">
            Ваша корзина пуста, откройте «Меню» и выберите понравившийся Вам товар.
        </div>
    </div>
        `;
  }
}

customElements.define('empty-page', EmptyCart);
