import { ActionsType } from '../../../domain/redux/action';
import { ProductsReducer } from '../../../domain/redux/reducers';
import {
  LIST_ALL_PRODUCTS,
  CLEAN_PRODUCT,
  CREATE_PRODUCT,
  FETCH_PRODUCT,
} from './constants';

const INITIAL_STATE = {
  isFetch: false,
} as ProductsReducer;

const productsReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case LIST_ALL_PRODUCTS:
      return action.payload;
    case CREATE_PRODUCT:
      return {};
    case CLEAN_PRODUCT:
      return INITIAL_STATE;
    case FETCH_PRODUCT:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    default:
      return state;
  }
};

export { productsReducer };
