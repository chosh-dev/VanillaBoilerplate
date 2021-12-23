const $ = (selector) => {
  return document.querySelector(selector);
};

const $$ = (target, selector) => {
  return target.querySelector(selector);
};

export default { $, $$ };
