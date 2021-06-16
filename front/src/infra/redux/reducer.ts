import { combineReducers } from 'redux';

import { authReducer } from './authentication/reducer';
import { productsReducer } from './products/reducer';
import { clientsReducer } from './clients/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  clients: clientsReducer,
});

export { rootReducer };
