import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from './style/global-styled';
import { props } from './style/theme';
import Router from './routes';
import { store } from '../infra/redux/store';

const App: React.FC = () => (
  <Provider store={store}>
    <ThemeProvider theme={props}>
      <GlobalStyle />
      <Router />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </ThemeProvider>
  </Provider>
);

export default App;
