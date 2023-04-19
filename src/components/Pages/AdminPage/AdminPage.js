import { Component } from '../../../core/Component';
import { databaseService } from '../../../services/DatabaseService';
import './AdminPage.scss';
import '../../Molecules/Tabs';
import { menuItems } from './constants';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';

class AdminPage extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: menuItems[0],
    };
  }

  setActiveTab = (activeTab) => {
    this.setState((state) => {
      return {
        ...state,
        activeTab,
      };
    });
  };

  createCategory = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    databaseService.createDocument('categories', data).then(() => evt.target.reset());
  };

  onChangeTab = ({ detail }) => {
    this.setActiveTab(detail.activeItem);
  };

  componentDidMount() {
    eventEmmiter.on(APP_EVENTS.changeTab, this.onChangeTab);
    this.addEventListener('submit', this.createCategory);
  }

  componentWillUnmount() {
    this.removeEventListener('submit', this.createCategory);
    eventEmmiter.off(APP_EVENTS.changeTab, this.onChangeTab);
  }
  render() {
    return `
        <div class='container'>
            <div class="mt-5">
                <it-tabs 
                  menu-items='${JSON.stringify(menuItems)}'
                  active-item='${JSON.stringify(this.state.activeTab)}'>
                </it-tabs>
                <form class='mb-3 border p-3'>
                    <label class="form-label">Создать категорию</label>
                    <input name='name' type="text" class="form-control" placeholder="Введите имя категории">
                </form>
            </div>
        </div>
        `;
  }
}

customElements.define('admin-page', AdminPage);
