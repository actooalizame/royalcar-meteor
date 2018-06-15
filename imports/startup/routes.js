import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import Home from '../ui/layouts/home';
import CreateCar from '../ui/components/CreateCar';
/*import ListPageContainer from '../../ui/containers/ListPageContainer.js';
import AuthPageSignIn from '../../ui/pages/AuthPageSignIn.js';
import AuthPageJoin from '../../ui/pages/AuthPageJoin.js';
import NotFoundPage from '../../ui/pages/NotFoundPage.js';*/


const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/subir-auto" component={CreateCar}/>

    </Switch>
  </Router>
);