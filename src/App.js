import { Component } from './core/Component';
import './components/Pages/Main';
import { routes } from './constants/routes';
import './core/Router/Router';
import './components/Pages/AdminPage';
import './components/Pages/SignUpPage';
import './components/Pages/SignInPage';
import './components/Pages/SignOutPage';

class App extends Component {
  connectedCallback() {
    this.innerHTML = this.render();
  }
  render() {
    return `
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
        path="${routes.error.href}" 
        title="Ошибка" 
        component="${routes.error.component}">
      </app-route>

      <app-outlet></app-outlet>
  
    </app-router>
    `;
  }
}
customElements.define('it-app', App);
