const Template = (routes, script) => () => {
  const el = document.getElementById('view');
  const url = location.hash.slice(1) || '/';
  const route = routes[url];
  if (el && route.controller) {
    el.innerHTML = route.controller;
  }
  if (route.script) {
    route.script();
  }
};

export default Template;
