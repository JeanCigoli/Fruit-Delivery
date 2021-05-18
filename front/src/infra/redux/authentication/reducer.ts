import { ActionsType } from '../../../domain/redux/action';
import { AuthenticationReducer } from '../../../domain/redux/reducers';
import { AUTHENTICATION, FETCH_AUTH, LOGOUT } from './constants';

const INITIAL_STATE = {
  isAuth: false,
  isFetch: false,
} as AuthenticationReducer;

const authReducer = (state = INITIAL_STATE, action: ActionsType) => {
  console.log({
    state,
    action,
  });
  switch (action.type) {
    case AUTHENTICATION:
      return {
        isAuth: true,
        isFetch: false,
        ...action.payload,
      };
    case FETCH_AUTH:
      return {
        ...state,
        isFetch: !state.isFetch,
      };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export { authReducer };
