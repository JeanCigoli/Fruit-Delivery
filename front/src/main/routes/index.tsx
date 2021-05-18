import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { Login, Home } from '../../presentation/pages';
import { LoginLayout, DashboardLayout } from '../../presentation/layouts';
import Routes from '../config/routes';

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Routes
        path="/"
        isPrivate={false}
        exact
        component={Login}
        layout={LoginLayout}
      />

      <Routes
        path="/dashboard"
        isPrivate
        component={Home}
        layout={DashboardLayout}
      />
    </Switch>
  </BrowserRouter>
);

export default Router;
