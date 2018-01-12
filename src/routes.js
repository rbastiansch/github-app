import { Home, script } from './pages/Home';
import Page1 from './pages/Page1';

const routes = (Router) => {
  Router.addRoute('/', Home(), script);

  Router.addRoute('/page1', Page1({
    greeting: 'Hello world!',
    moreText: 'Bacon ipsum...',
  }));
}

export default routes;
