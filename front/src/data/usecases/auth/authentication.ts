import { toast } from 'react-toastify';
import history from '../../../infra/history';
import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  AUTHENTICATION,
  FETCH_AUTH,
} from '../../../infra/redux/authentication/constants';
import { auth } from '../../../infra/http/web-service';
import { SESSION_AUTH, TOKEN } from '../../../main/config/constants';
import { SessionStorage } from '../../../utils/storage/session';

export const authentication =
  (params: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_AUTH });
    try {
      const { data } = await auth.authentication(params);

      SessionStorage.setItem(TOKEN, data.payload.accessToken);
      SessionStorage.setItem(SESSION_AUTH, { name: data.payload.name });

      dispatch({ type: AUTHENTICATION, payload: { name: data.payload.name } });

      toast.success(data.message);
      history.push('/dashboard');
    } catch (error) {
      requestError(error);
    } finally {
      dispatch({ type: FETCH_AUTH });
    }
  };
