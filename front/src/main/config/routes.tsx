import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { SessionStorage } from '../../utils/storage/session';
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
  const session = SessionStorage.getItem(TOKEN);

  if (!session && isPrivate) {
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
