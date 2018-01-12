const Router = (routes, template, script) => ({
  start: () => {
    window.addEventListener('hashchange', template(routes, script));
    window.addEventListener('load', template(routes));
  },

  addRoute: (path, controller, script) => {
    routes[path] = { controller: controller, script };
  },
});

export default Router;
