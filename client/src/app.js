import { initRouter } from '_core/router';
import { initStore } from '_store/';
import '_styles/global.scss';
import '_styles/reset.css';

window.addEventListener('DOMContentLoaded', () => {
  initStore();
  initRouter();
});
