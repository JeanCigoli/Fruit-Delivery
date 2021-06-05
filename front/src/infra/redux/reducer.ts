import { combineReducers } from 'redux';

import { authReducer } from './authentication/reducer';
import { productsReducer } from './products/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
});

export { rootReducer };
