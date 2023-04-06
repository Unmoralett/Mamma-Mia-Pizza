import { Component } from '../../../core/Component';
import './AboutUsCards.scss';
import '../../Molecules/AboutUsCard';

class AboutUsCards extends Component {
  render() {
    return `
        <div class='AboutUs__section'>
            <it-aboutuscard
                class="AboutUs__section-card"
                title="Тесто"
                text="Самая тонкая вещь. Главное - сделать его «живым». Это целый квест из граммов, градусов, процентов и часов с минутами. Процесс непростой, но у нас получается!">
            </it-aboutuscard>

            <it-aboutuscard
                class="AboutUs__section-card"
                title="Моцарелла"
                text="Сыр в пицце - ключевой ингредиент. Мы используем настоящую моцареллу от итальянских поставщиков. Сыр должен тянуться, как на картинке.">
            </it-aboutuscard>

            <it-aboutuscard
                class="AboutUs__section-card"
                title="Начинка"
                text="Есть два главных правила вкусной начинки: не экономить на начинке; фанатично соблюдать режим хранения. Это и весь секрет.">
            </it-aboutuscard>

            <it-aboutuscard
                class="AboutUs__section-card"
                title="Томатный соус"
                text="Главное, что нужно знать про хороший томатный соус: он должен быть сделан из томатов. Звучит логично, но задумайтесь!">
            </it-aboutuscard>
        </div>
        `;
  }
}

customElements.define('it-aboutuscards', AboutUsCards);
