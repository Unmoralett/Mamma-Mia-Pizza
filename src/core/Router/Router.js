import { APP_EVENTS } from '../../constants/appEvents';
import { eventEmmiter } from '../EventEmmiter';
import { match } from './utils';

export class Router extends HTMLElement {
  constructor() {
    super();
    this.activeRoute = {};
  }
  //на основе данных отрисовываем роуты
  get routes() {
    return Array.from(this.querySelectorAll('app-route')).map((route) => ({
      path: route.getAttribute('path'),
      title: route.getAttribute('title'),
      component: route.getAttribute('component'),
    }));
  }
  //рендерит заголовок роута
  setDocumentTitle(title) {
    document.title = title || document.title;
  }

  createComponent(component) {
    return document.createElement(component);
  }

  setComponentParams(params, view) {
    for (let key in params) {
      if (key !== '*') view.setAttribute(key, params[key]);
    }
  }

  clearOutlet() {
    while (this.outlet.firstChild) {
      this.outlet.removeChild(this.outlet.firstChild);
    }
  }
  //передаем роуты и сравниваем текущий URL, нав между роутами
  navigate(url) {
    const matchedRoute = match(this.routes, url);
    if (matchedRoute !== null) {
      this.activeRoute = matchedRoute;
      window.history.pushState(null, '', url);
      this.update();
    }
  }
  //Отрисовывает актиный роут
  update() {
    const { component, title, params = {} } = this.activeRoute;
    const view = this.createComponent(component);
    this.setDocumentTitle(title);

    if (component) {
      this.clearOutlet();
      this.setComponentParams(params, view);

      this.outlet.appendChild(view);
    }
  }
  //
  onPopState = () => {
    this.activeRoute = match(this.routes, window.location.pathname);
    this.update();
  };

  onChangeRoute = (evt) => {
    this.navigate(evt.detail.target);
  };

  connectedCallback() {
    this.outlet = this.querySelector('app-outlet');
    this.navigate(window.location.pathname);
    window.addEventListener('popstate', this.onPopState);
    eventEmmiter.on(APP_EVENTS.changeRoute, this.onChangeRoute);
  }

  disconnectedCallback() {
    window.removeEventListener('popstate', this.onPopState);
    eventEmmiter.off(APP_EVENTS.changeRoute, this.onChangeRoute);
  }
}

customElements.define('app-router', Router);
