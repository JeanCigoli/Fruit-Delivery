import { ActionsType } from '../../../domain/redux/action';
import { AuthenticationReducer } from '../../../domain/redux/reducers';
import { AUTHENTICATION, FETCH_AUTH } from './constants';

const INITIAL_STATE = {
  isAuth: false,
  isFetch: false,
} as AuthenticationReducer;

const authReducer = (state = INITIAL_STATE, action: ActionsType) => {
  switch (action.type) {
    case AUTHENTICATION:
      return {
        isAuth: true,
        ...action.payload,
      };
    case FETCH_AUTH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    default:
      return state;
  }
};

export { authReducer };
