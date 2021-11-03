import { initRouter } from '_core/router';
import { initStore } from '_store/';
import utils from '_utils/utils';
import '_styles/global.scss';

(function setGlobalMethod() {
  window.$ = utils.$;
  window.$$ = utils.$$;
})();

window.addEventListener('DOMContentLoaded', () => {
  initStore();
  initRouter();
});
