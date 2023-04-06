import { Component } from '../../../core/Component';
import './MainPage.scss';

class MainPage extends Component {
  render() {
    return `
        <div class="mainpage">
            <div class="container">
                <div class="mainpage__text">
                    <h5 class="mainpage__text-upper">Лучшая пицца в городе</h5>
                    <h1 class="mainpage__text-main">Mamma mia!</h1>
                    <h5 class="mainpage__text-down">Пальчики оближешь 👍</h5>
                </div>
            </div>
        </div>
        `;
  }
}

customElements.define('it-mainpage', MainPage);
