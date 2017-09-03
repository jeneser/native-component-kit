import appHtml from './app.html';
import carouselEasy from '../components/carousel/easy/index';
import carouselMedium from '../components/carousel/medium/index';

window.onload = function() {
  document.querySelector('#app').innerHTML = appHtml;
  carouselEasy();
  carouselMedium();
}
