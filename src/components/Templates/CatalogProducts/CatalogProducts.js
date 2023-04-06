import { Component } from '../../../core/Component';

import '../../Atoms/Link';
import '../../Organisms/CardProduct';
import '../../Molecules/NavMenu';
import './CatalogProducts.scss';

class CatalogProducts extends Component {
  constructor() {
    super();
    this.pizza = [
      {
        id: 1,
        name: 'Фирменная',
        img: '../../assets/images/pizza1_italy.jpg',
        price: 'Выберите размер пиццы',
        price32: '21.9р',
        price45: '34.9р',
        desc: 'Томатный соус, сыр моцарелла, шампиньоны, пепперони, салями, лук, томаты, сладкий перец, маслины, специи.',
      },
      {
        id: 2,
        name: 'Кисло-сладкий цыпленок',
        img: '../../assets/images/pizza2_chiken.jpg',
        price: 'Выберите размер пиццы',
        price32: '19.9р',
        price45: '29.9р',
        desc: 'Томатный соус, сыр моцарелла, куриное филе, пепперони, кисло-сладкий соус.',
      },
      {
        id: 3,
        name: 'Пепперони чиз',
        img: '../../assets/images/pizza3_pepperoni.jpg',
        price: 'Выберите размер пиццы',
        price32: '20.9р',
        price45: '31.9р',
        desc: 'Белый соус с блю-чиз, пепперони, сыр моцарелла.',
      },
      {
        id: 4,
        name: 'Карбонара',
        img: '../../assets/images/pizza4_carbo.jpg',
        price: 'Выберите размер пиццы',
        price32: '18р',
        price45: '29р',
        desc: 'Чесночный соус ранч, сыр моцарелла, куриное филе, бекон, шампиньоны, лук, сыр пармезан.',
      },
      {
        id: 5,
        name: 'Мясная',
        img: '../../assets/images/pizza5_meat.jpg',
        price: 'Выберите размер пиццы',
        price32: '23.9р',
        price45: '34.9р',
        desc: 'Томатный соус, сыр моцарелла, ветчина, салями, охотничьи колбаски, бекон, пепперони.',
      },
      {
        id: 6,
        name: 'Грибная',
        img: '../../assets/images/pizza6_grib.jpg',
        price: 'Выберите размер пиццы',
        price32: '18р',
        price45: '26р',
        desc: 'Грибной соус, сыр моцарелла, шампиньоны.',
      },
      {
        id: 7,
        name: 'Пепперони хот',
        img: '../../assets/images/pizza7_hot.jpg',
        price: 'Выберите размер пиццы',
        price32: '18.9р',
        price45: '27.9р',
        desc: 'Томатный соус, сыр моцарелла, пепперони, перец халапеньо, соус сальса.',
      },
      {
        id: 8,
        name: 'Фишер',
        img: '../../assets/images/pizza8_fisher.jpg',
        price: 'Выберите размер пиццы',
        price32: '22.9р',
        price45: '34.9р',
        desc: 'Томатный соус, сыр моцарелла, лосось, тунец, томаты, крем-чиз, маслины, специи.',
      },
    ];
  }

  sizeClick(evt) {
    if (evt.target.closest('.size32')) {
      switch (evt.target.className) {
        case 'size32 item1':
          this.pizza[0].price = this.pizza[0].price32;
          this.render();
          break;
        case 'size32 item2':
          this.pizza[1].price = this.pizza[1].price32;
          this.render();
          break;
        case 'size32 item3':
          this.pizza[2].price = this.pizza[2].price32;
          this.render();
          break;
        case 'size32 item4':
          this.pizza[3].price = this.pizza[3].price32;
          this.render();
          break;
        case 'size32 item5':
          this.pizza[4].price = this.pizza[4].price32;
          this.render();
          break;
        case 'size32 item6':
          this.pizza[5].price = this.pizza[5].price32;
          this.render();
          break;
        case 'size32 item7':
          this.pizza[6].price = this.pizza[6].price32;
          this.render();
          break;
        case 'size32 item8':
          this.pizza[7].price = this.pizza[7].price32;
          this.render();
          break;

        default:
          break;
      }
    } else if (evt.target.closest('.size45')) {
      switch (evt.target.className) {
        case 'size45 item1':
          this.pizza[0].price = this.pizza[0].price45;
          this.render();
          break;
        case 'size45 item2':
          this.pizza[1].price = this.pizza[1].price45;
          this.render();
          break;
        case 'size45 item3':
          this.pizza[2].price = this.pizza[2].price45;
          this.render();
          break;
        case 'size45 item4':
          this.pizza[3].price = this.pizza[3].price45;
          this.render();
          break;
        case 'size45 item5':
          this.pizza[4].price = this.pizza[4].price45;
          this.render();
          break;
        case 'size45 item6':
          this.pizza[5].price = this.pizza[5].price45;
          this.render();
          break;
        case 'size45 item7':
          this.pizza[6].price = this.pizza[6].price45;
          this.render();
          break;
        case 'size45 item8':
          this.pizza[7].price = this.pizza[7].price45;
          this.render();
          break;
        default:
          break;
      }
    }
  }

  connectedCallback() {
    this.render();
    this.addEventListener('click', this.sizeClick);
  }

  render() {
    this.innerHTML = `
        <div class='container'>
            <h2 class='CatalogProducts_title'>Наше меню</h2>
            <it-navmenu></it-navmenu>
            <div class='CatalogProducts_menu'>
              ${this.pizza
                .map((item) => {
                  return `
                  <it-cardproduct
                    img='${item.img}'
                    name='${item.name}'
                    price='${item.price}'
                    desc='${item.desc}'
                    id='${item.id}'>
                  </it-cardproduct>
                  `;
                })
                .join(' ')}    
            </div>
        </div>
          `;
  }
}

customElements.define('it-catalogproducts', CatalogProducts);
