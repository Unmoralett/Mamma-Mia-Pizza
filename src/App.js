import { Component } from './core/Component';
import './components/Pages/Main';

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
