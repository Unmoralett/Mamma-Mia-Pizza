import { Component } from '../../../core/Component';
import { PRODUCTS } from '../../../constants/products';

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

  sliceData(currentPage = 1) {
    const { limit } = this.state;

    const start = (currentPage - 1) * limit;
    const end = currentPage * limit;

    this.setState((state) => {
      return {
        ...state,
        products: PRODUCTS.slice(start, end),
      };
    });
  }

  componentDidMount() {
    this.sliceData();
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
            <it-navmenu></it-navmenu>
            <it-cardproduct products='${JSON.stringify(this.state.products)}'></it-cardproduct> 
            <it-pagination></it-pagination>
        </div>
          `;
  }
}

customElements.define('it-catalogproducts', CatalogProducts);
