import history from '../../../infra/history';
import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import { LOGOUT } from '../../../infra/redux/authentication/constants';
import { TOKEN } from '../../../main/config/constants';
import { SessionStorage } from '../../../utils/storage/session';

export const logout = () => async (dispatch: AppDispatch) => {
  try {
    SessionStorage.removeItem(TOKEN);
    dispatch({ type: LOGOUT });

    history.push('/');
  } catch (error) {
    requestError(error);
  }
};
