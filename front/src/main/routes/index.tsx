import React from 'react';
import { Switch } from 'react-router-dom';
import { Login, Home, Client } from '../../presentation/pages';
import { LoginLayout, DashboardLayout } from '../../presentation/layouts';
import Routes from '../config/routes';

const Router: React.FC = () => (
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
      exact
      component={Home}
      layout={DashboardLayout}
    />

    <Routes
      path="/clientes"
      isPrivate
      exact
      component={Client}
      layout={DashboardLayout}
    />
  </Switch>
);

export default Router;
