import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Home from './components/Home';
import { App } from './containers/App';
import Widgets from './containers/Widgets';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/widgets" component={Widgets} />
  </Route>
);

export default routes;
