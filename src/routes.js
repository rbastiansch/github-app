import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';

const routes = (Router) => {
  Router.addRoute('/', Home());

  Router.addRoute('/page1', Page1({
    greeting: 'Hello world!',
    moreText: 'Bacon ipsum...',
  }));

  Router.addRoute('/page2', Page2({
    heading: 'I\'m page two!',
  }));

}

export default routes;
