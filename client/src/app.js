import { initRouter } from '_core/router';
import { initStore } from '_store/';
import '_styles/global.scss';

window.addEventListener('DOMContentLoaded', () => {
  initStore();
  initRouter();
});
