import html from './src/carousel.component.html';
import css from './src/carousel.component.css';
import carousel from './src/carousel.component.js';
import doc from './doc.md';

export default function() {
  document.querySelector('#demo-container').innerHTML = doc;
  document.querySelector('#carousel-easy').innerHTML = html;
  carousel();
}
