import './main.scss';
import './App';

const app = document.createElement('it-app');
const root = document.querySelector('#root');

root.append(app);

// import { Header } from './components/Header/Header';
// import { HomePage } from './components/HomePage/HomePage';
// import { AboutUs } from './components/AboutUs/AboutUs';
// import { Gallery } from './components/Gallery/Gallery';
// import { Pizza } from './components/Pizza/pizza';
// import { Sales } from './components/Sales/sales';
// import './main.scss';

// const root = document.querySelector('#root');

// root.insertAdjacentHTML('beforeend', Header());
// root.insertAdjacentHTML('beforeend', HomePage());
// root.insertAdjacentHTML('beforeend', AboutUs());
// root.insertAdjacentHTML('beforeend', Gallery());
// root.insertAdjacentHTML('beforeend', Pizza());
// root.insertAdjacentHTML('beforeend', Sales());

// // _________________СЛАЙДЕР__________________________________________

// const slides = document.querySelectorAll('.slide');

// for (const slide of slides) {
//   slide.addEventListener('click', () => {
//     clearActive();
//     slide.classList.add('active');
//   });
// }

// const clearActive = () => {
//   slides.forEach((slide) => {
//     slide.classList.remove('active');
//   });
// };

// //_______________________МЕНЮ____________________________________________
