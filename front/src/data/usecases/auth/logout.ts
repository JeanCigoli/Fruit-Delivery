import history from '../../../infra/history';
import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import { LOGOUT } from '../../../infra/redux/authentication/constants';
import { TOKEN } from '../../../main/config/constants';

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    localStorage.removeItem(TOKEN);
    dispatch({ type: LOGOUT });

    history.push('/');
    history.go(0);
  } catch (error) {
    requestError(error);
  }
};
