import './index.css';
import 'swiper/css/bundle';
import initParticles from '../utils/particles';
import Swiper from 'swiper/bundle';

new Swiper('.swiper', {
  direction: 'horizontal',
  freeMode: {
    enabled: true,
  },
  mousewheel: {
    enabled: true,
    sensitivity: 3,
  },
  speed: 2400,
  spaceBetween: 18,
  parallax: true,
});

initParticles();
