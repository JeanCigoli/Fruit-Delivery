import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../../presentation/pages';
import { LoginLayout, DashboardLayout } from '../../presentation/layouts';
import Routes from '../config/routes';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Routes isPrivate={false} component={Login} layout={LoginLayout} />
      </Route>

      <Route path="/dashboard">
        <Routes isPrivate component={Login} layout={DashboardLayout} />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
