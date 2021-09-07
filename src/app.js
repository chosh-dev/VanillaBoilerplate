import "../public/stylesheets/style.scss";
import MainService from "./mainService.js";
import logo from "../public/images/logo.svg";

window.addEventListener("DOMContentLoaded", () => {
  const targetEl = document.querySelector("#log");

  const service = new MainService({ targetEl });
  const datalist = [1, 2, 3, 4, [5, 6, [7]]];
  const subHtml = service.init(datalist);

  targetEl.innerHTML += `datalist is ${subHtml}`;
  targetEl.innerHTML += `<img src=${logo} alt="로고">`;
});
