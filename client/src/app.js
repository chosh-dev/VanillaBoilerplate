import "_styles/style.scss";
import logo from "_images/logo.svg";
import profilePng from "_images/profile.png";
import utils from "_utils/utils.js";
import MainService from "./mainService.js";

(function setGlobalMethod() {
  window.$ = utils.$;
  window.$$ = utils.$$;
})();

window.addEventListener("DOMContentLoaded", () => {
  const targetEl = $("#log");

  const service = new MainService({ targetEl });
  const datalist = [1, 2, 3, 4, [5, 6, [7]]];
  const subHtml = service.init(datalist);

  targetEl.innerHTML += `datalist is ${subHtml}`;
  targetEl.innerHTML += `<img src=${logo} alt="로고">`;
  targetEl.innerHTML += `<img src=${profilePng} alt="로고">`;
});
