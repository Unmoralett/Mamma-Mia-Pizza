import { Component } from './core/Component';
import './components/Pages/Main';
// import { Component } from './core/Component';
// import { routes } from './constants/routes';
// import { Router } from './core/Router/Router';
// import './components/organisms/Navigation';
// import './components/molecules/Footer';
// import './components/templates/CatalogControls';
// import './components/pages/BlogPage';
// import './components/pages/cartPage';
// import './components/pages/CatalogPages';
// import './components/pages/contactsPage';
// import './components/pages/ErrorPage';
// import './components/pages/ProductPage';
// import './components/pages/AdminPage/AdminPage';

class App extends Component {
  connectedCallback() {
    this.innerHTML = this.render();
  }
  render() {
    return `
        <it-main></it-main>
    `;
  }
}
customElements.define('it-app', App);
