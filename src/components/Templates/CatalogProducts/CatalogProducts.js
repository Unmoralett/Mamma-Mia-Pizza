import { Component } from '../../../core/Component';
import { PRODUCTS } from '../../../constants/products';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { CATEGORY_PRODUCTS } from '../../../constants/categoryProducts';

import '../../Atoms/Link';
import '../../Organisms/CardProduct';
import '../../Molecules/NavMenu';
import '../../Molecules/Pagination';
import './CatalogProducts.scss';

class CatalogProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: PRODUCTS,
      limit: 8,
      currentPage: 1,
    };
  }

  scrollMenu = () => {
    window.scrollTo(0, 965, { behavior: 'smooth' });
  };

  sliceData(currentPage = 1) {
    const { limit } = this.state;

    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    return this.state.products.slice(start, end);
  }

  onChangePaginationPage = (evt) => {
    this.setState((state) => {
      return {
        ...state,
        currentPage: Number(evt.detail.page),
      };
    });
    this.scrollMenu();
  };

  filterMenu = (label) => {
    this.scrollMenu();
    this.setState((state) => {
      return {
        ...state,
        products: PRODUCTS.filter((item) => item.category === label),
        currentPage: 1,
      };
    });
  };

  onChangeCategoryMenu = (evt) => {
    const { label } = evt.detail;
    if (label === 'Пицца') {
      this.filterMenu(label);
    }
    if (label === 'Десерты') {
      this.filterMenu(label);
    }
    if (label === 'Напитки') {
      this.filterMenu(label);
    }
  };

  componentDidMount() {
    this.sliceData();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.changeCategoryMenu, this.onChangeCategoryMenu);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.changeCategoryMenu, this.onChangeCategoryMenu);
  }

  // sizeClick(evt) {
  //   if (evt.target.closest('.size32')) {
  //     switch (evt.target.className) {
  //       case 'size32 item1':
  //         this.pizza[0].price = this.pizza[0].price32;
  //         this.render();
  //         break;
  //       case 'size32 item2':
  //         this.pizza[1].price = this.pizza[1].price32;
  //         this.render();
  //         break;
  //       case 'size32 item3':
  //         this.pizza[2].price = this.pizza[2].price32;
  //         this.render();
  //         break;
  //       case 'size32 item4':
  //         this.pizza[3].price = this.pizza[3].price32;
  //         this.render();
  //         break;
  //       case 'size32 item5':
  //         this.pizza[4].price = this.pizza[4].price32;
  //         this.render();
  //         break;
  //       case 'size32 item6':
  //         this.pizza[5].price = this.pizza[5].price32;
  //         this.render();
  //         break;
  //       case 'size32 item7':
  //         this.pizza[6].price = this.pizza[6].price32;
  //         this.render();
  //         break;
  //       case 'size32 item8':
  //         this.pizza[7].price = this.pizza[7].price32;
  //         this.render();
  //         break;

  //       default:
  //         break;
  //     }
  //   } else if (evt.target.closest('.size45')) {
  //     switch (evt.target.className) {
  //       case 'size45 item1':
  //         this.pizza[0].price = this.pizza[0].price45;
  //         this.render();
  //         break;
  //       case 'size45 item2':
  //         this.pizza[1].price = this.pizza[1].price45;
  //         this.render();
  //         break;
  //       case 'size45 item3':
  //         this.pizza[2].price = this.pizza[2].price45;
  //         this.render();
  //         break;
  //       case 'size45 item4':
  //         this.pizza[3].price = this.pizza[3].price45;
  //         this.render();
  //         break;
  //       case 'size45 item5':
  //         this.pizza[4].price = this.pizza[4].price45;
  //         this.render();
  //         break;
  //       case 'size45 item6':
  //         this.pizza[5].price = this.pizza[5].price45;
  //         this.render();
  //         break;
  //       case 'size45 item7':
  //         this.pizza[6].price = this.pizza[6].price45;
  //         this.render();
  //         break;
  //       case 'size45 item8':
  //         this.pizza[7].price = this.pizza[7].price45;
  //         this.render();
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  // }

  // connectedCallback() {
  //   this.render();
  //   this.addEventListener('click', this.sizeClick);
  // }

  render() {
    return `
        <div class='container' id='menu_page'>
            <h2 class='CatalogProducts_title'>Наше меню</h2>
            <it-navmenu 
              links='${JSON.stringify(CATEGORY_PRODUCTS)}'
            ></it-navmenu>
            <it-cardproduct 
              products='${JSON.stringify(this.sliceData(this.state.currentPage))}'
            ></it-cardproduct> 
            <it-pagination
              total='${this.state.products.length}'
              limit='${this.state.limit}'
              current='${this.state.currentPage}'
            ></it-pagination>
        </div>
          `;
  }
}

customElements.define('it-catalogproducts', CatalogProducts);
