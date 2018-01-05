const Router = (routes, template) => ({
  start: () => {
    window.addEventListener('hashchange', template(routes));
    window.addEventListener('load', template(routes));
  },

  addRoute: (path, controller) => {
    routes[path] = { controller: controller };
  },
});

export default Router;
