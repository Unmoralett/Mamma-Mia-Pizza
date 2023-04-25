import { Component } from '../../../core/Component';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { CATEGORY_PRODUCTS } from '../../../constants/categoryProducts';

import '../../Atoms/Link';
import '../../Organisms/CardProduct';
import '../../Molecules/NavMenu';
import '../../Molecules/Pagination';
import './CatalogProducts.scss';
import { databaseService } from '../../../services/DatabaseService';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { storageService } from '../../../services/StorageService';
import { APP_STORAGE_KEYS } from '../../../constants/appStorageKeys';

class CatalogProducts extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      limit: 8,
      currentPage: 1,
    };
    this.currentCategory = 0;
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

  filterMenu = async (label) => {
    try {
      this.currentCategory = label;
      this.scrollMenu();
      const products = await databaseService
        .getCollection(FIRESTORE_KEYS.products)
        .then((items) => {
          return items;
        });
      this.setState((state) => {
        return {
          ...state,
          products: products.filter((item) => item.category === label),
          currentPage: 1,
        };
      });
    } catch (error) {
      console.error(error);
    }
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

  setProducts(products) {
    this.setState((state) => {
      return {
        ...state,
        products,
      };
    });
  }

  getProducts = async () => {
    try {
      const products = await databaseService.getCollection(FIRESTORE_KEYS.products);
      this.setProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  componentDidMount() {
    this.getProducts();
    this.sliceData();
    eventEmmiter.on(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.on(APP_EVENTS.changeCategoryMenu, this.onChangeCategoryMenu);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changePaginationPage, this.onChangePaginationPage);
    eventEmmiter.off(APP_EVENTS.changeCategoryMenu, this.onChangeCategoryMenu);
  }

  render() {
    return `
        <div class='container' id='menu_page'>
            <h2 class='CatalogProducts_title'>Наше меню</h2>
            <it-navmenu 
              links='${JSON.stringify(CATEGORY_PRODUCTS)}'
              current='${this.currentCategory}'
            ></it-navmenu>
            <it-cardproduct 
              filteredproducts='${JSON.stringify(this.sliceData(this.state.currentPage))}'
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
