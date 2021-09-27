import { router } from "_core/router";
import utils from "_utils/utils";
import "_styles/global.scss";

(function setGlobalMethod() {
  window.$ = utils.$;
  window.$$ = utils.$$;
})();

window.addEventListener("DOMContentLoaded", () => {
  router()
});
