import { Component } from '../../../core/Component';
import { authService } from '../../../services/Auth';
import { eventEmmiter } from '../../../core/EventEmmiter';
import { APP_EVENTS } from '../../../constants/appEvents';

import '../../Templates/MainPage';
import '../../Templates/Header';
import '../../Templates/AboutUs';
import '../../Molecules/Gallery';
import '../../Templates/CatalogProducts';
import '../../Templates/Sales';
import '../../Templates/Footer';
import '../../Molecules/Preloader';
import './Main.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
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

  async authorizeUser() {
    this.setIsLoading(true);
    try {
      const user = await authService.authorizeUser();
      console.log(user);
      eventEmmiter.emit(APP_EVENTS.authorizeUser, { user });
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  componentDidMount() {
    this.authorizeUser();
  }

  componentWillUnmount() {}

  render() {
    return `
      <it-preloader is-loading='${this.state.isLoading}'>
        <it-header></it-header>
        <it-mainpage></it-mainpage>
        <it-catalogproducts></it-catalogproducts>
        <it-aboutus></it-aboutus>
        <it-gallery></it-gallery>
        <it-sales></it-sales>
        <it-footer></it-footer>
      </it-preloader>
        `;
  }
}

customElements.define('it-main', Main);
