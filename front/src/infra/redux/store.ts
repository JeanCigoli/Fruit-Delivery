import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

// import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';

const configureStore = () => {
  const middleware = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middleware);

  const store = createStore(rootReducer, middlewareEnhancer);

  return store;
};

export const store = configureStore();

// export const store = configureStore({
//   reducer: rootReducer,
// });
