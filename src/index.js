import Template from './app/Template';
import Router from './app/Router';
import routes from './routes';

const app = () => {
  const RouterApp = Router([], Template);
  RouterApp.start();

  routes(RouterApp);
}

app();

if (module.hot) {
  module.hot.accept(app, () => {
    console.log('Accepting the updated app function!');
    app();
  })
}