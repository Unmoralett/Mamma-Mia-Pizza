import { Component } from './core/Component';
import './components/Pages/Main';
import { routes } from './constants/routes';
import './core/Router/Router';
import './components/Pages/AdminPage';
import './components/Pages/SignUpPage';
import './components/Pages/SignInPage';
import './components/Pages/SignOutPage';
import './components/Pages/CartPage';
import './components/Molecules/Preloader';
import './components/Templates/Header';
import { authService } from './services/Auth';
import { eventEmmiter } from './core/EventEmmiter';
import { APP_EVENTS } from './constants/appEvents';
import { storageService } from './services/StorageService';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: false,
      user: null,
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

  setUser = (user) => {
    this.setState((state) => {
      return {
        ...state,
        user,
      };
    });
  };

  async authorizeUser() {
    this.setIsLoading(true);
    try {
      const user = await authService.authorizeUser();
      this.setUser(user);
      storageService.setItem('user', user);
    } catch (error) {
      console.error(error);
    } finally {
      this.setIsLoading(false);
    }
  }

  onAuthorizeUser = ({ detail }) => {
    this.setUser(detail.user);
  };

  componentDidMount() {
    this.authorizeUser();
    eventEmmiter.on(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  componentWillUnmount() {
    eventEmmiter.off(APP_EVENTS.authorizeUser, this.onAuthorizeUser);
  }

  render() {
    return `
    <it-preloader is-loading="${this.state.isLoading}">
      <it-header user='${JSON.stringify(this.state.user)}'></it-header> 
      <app-router>
        <app-route 
          path="${routes.main.href}" 
          title="Пиццерия Mamma Mia!" 
          component="${routes.main.component}">
        </app-route>

        <app-route 
          path="${routes.menuPage.href}" 
          title="Меню" 
          component="${routes.menuPage.component}">
        </app-route>

        <app-route 
          path="${routes.aboutUsPage.href}" 
          title="О нас" 
          component="${routes.aboutUsPage.component}">
        </app-route>

        <app-route 
          path="${routes.galleryPage.href}" 
          title="Галерея" 
          component="${routes.galleryPage.component}">
        </app-route>

        <app-route 
          path="${routes.salesPage.href}" 
          title="Акции" 
          component="${routes.salesPage.component}">
        </app-route>

        <app-route 
          path="${routes.contactsPage.href}" 
          title="Контакты" 
          component="${routes.contactsPage.component}">
        </app-route>

        <app-route 
          path="${routes.signUp.href}" 
          title="Регистрация" 
          component="${routes.signUp.component}">
        </app-route>

        <app-route 
          path="${routes.signIn.href}" 
          title="Войти" 
          component="${routes.signIn.component}">
        </app-route>

        <app-route 
          path="${routes.signOut.href}" 
          title="Выйти" 
          component="${routes.signOut.component}">
        </app-route>
        
        <app-route 
          path="${routes.adminPage.href}" 
          title="Админ" 
          component="${routes.adminPage.component}">
        </app-route>

        <app-route 
          path="${routes.cartPage.href}" 
          title="Корзина" 
          component="${routes.cartPage.component}">
        </app-route>

        <app-route 
          path="${routes.error.href}" 
          title="Ошибка" 
          component="${routes.error.component}">
        </app-route>

        <app-outlet></app-outlet>
    
      </app-router>
    </it-preloader>
    `;
  }
}
customElements.define('it-app', App);
