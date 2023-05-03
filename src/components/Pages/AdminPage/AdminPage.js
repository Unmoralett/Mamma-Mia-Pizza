import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';
import { forms, menuItems } from './constants';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';
import { FIRESTORE_KEYS } from '../../../constants/firestoreKeys';
import { firebaseStorageService } from '../../../services/FirebaseStorageService';

import '../../Molecules/Tabs';
import '../../Molecules/Preloader';
import '../../Organisms/CategoryForm';
import '../../Organisms/ProductForm';
import './AdminPage.scss';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
      isLoading: false,
    };
  }

  setIsLoading = (isLoading) => {
    this.setState((state) => {
      return {
        ...state,
        isLoading,
      };
    });
  };

  setActiveTab = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

  createCategory = ({ detail }) => {
    databaseService.createDocument(FIRESTORE_KEYS.categories, detail.data);
    this.getAllCAtegories();
  };

  onChangeTab = ({ detail }) => {
    this.setActiveTab(detail.activeItem);
  };

  getAllCAtegories = async () => {
    this.setIsLoading(true);
    try {
      const data = await databaseService.getCollection(FIRESTORE_KEYS.categories);
      this.setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  };

  setCategories(categories) {
    this.setState((state) => {
      return {
        ...state,
        categories,
      };
    });
  }

  createProduct = ({ detail }) => {
    this.setIsLoading(true);
    const { data } = detail;
    firebaseStorageService
      .uploapFile(data.preview, 'products')
      .then((snapshop) => {
        firebaseStorageService.downloadURL(snapshop.ref).then((url) => {
          databaseService.createDocument('products', {
            ...data,
            preview: url,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => this.setIsLoading(false));
  };

  componentDidMount() {
    this.getAllCAtegories();
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.on(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.on(APP_EVENTS.createProduct, this.createProduct);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
    eventEmmiter.off(APP_EVENTS.createCategory, this.createCategory);
    eventEmmiter.off(APP_EVENTS.createProduct, this.createProduct);
  }
  render() {
    return `
      <it-preloader is-loading='${this.state.isLoading}'>

        <div class="sidebar">
          <div class="sidebar__subsections">
            <div class="sidebar__subsections-brand"><strong>Админка</strong></div>
            <ul>
              <it-tabs 
                menu-items='${JSON.stringify(menuItems)}'
                active-item='${JSON.stringify(this.state.activeTab)}'>
              </it-tabs>
            </ul>
          </div>
        </div>
    
        <div class="page">    
          <div class="content__main">
            <div class="content__main-page">
              <div class="box" style="height:100vh;">
                
                  <div class="mt-5">
                    <div class='mb-3 p-3'>
                      ${forms(this.state)[this.state.activeTab.id]}
                    </div>  
                  </div>
                
              </div>
            </div>
          </div>
        </div>
      
      </it-preloader>
    `;
  }
}

customElements.define('admin-page', AdminPage);
