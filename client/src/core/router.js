import Main from '../pages/Main';
import Profile from '../pages/Profile';
import auth from '../middlewares/auth';

let currentView = null;

const router = async () => {
  const $root = $('.app');
  const routes = [
    { path: '/', view: Main },
    { path: '/profile', view: Profile },
    { path: '/middleware', view: Profile, middleware: [auth] },
  ];
  const fallback = routes[0];
  const match = routes.find((route) => route.path === location.pathname) ?? fallback;

  for (const fn of match.middleware ?? []) {
    try {
      await fn();
    } catch (e) {
      console.log(e);
      return;
    }
  }

  currentView?.unmounted();
  currentView = new match.view($root);
};

const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const initRouter = () => {
  window.addEventListener('popstate', router);

  document.body.addEventListener('click', (e) => {
    if (e.target.matches('[data-link]')) {
      e.preventDefault();
      navigateTo(e.target.closest('a').href);
    }
  });

  router();
};

export { initRouter, navigateTo };
