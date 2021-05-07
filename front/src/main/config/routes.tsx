import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { TOKEN } from './constants';

type Routes = {
  isPrivate: boolean;
  component: React.FC<any>;
  layout: React.FC<any>;
  [params: string]: any;
};

const RouterWrapper: React.FC<Routes> = ({
  isPrivate,
  component: Component,
  layout: Layout,
  ...rest
}) => {
  const token = localStorage.getItem(TOKEN) || false;

  if (!token && isPrivate) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Route
        {...rest}
        render={(props) => (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        )}
      />
    </>
  );
};

export default RouterWrapper;
