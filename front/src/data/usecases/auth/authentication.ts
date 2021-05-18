import { toast } from 'react-toastify';
import history from '../../../infra/history';
import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  AUTHENTICATION,
  FETCH_AUTH,
} from '../../../infra/redux/authentication/constants';
import { auth } from '../../../infra/http/web-service';
import { TOKEN } from '../../../main/config/constants';

export const authentication =
  (params: any) => async (dispatch: AppDispatch) => {
    dispatch({ type: FETCH_AUTH });
    try {
      const { data } = await auth.authentication(params);

      localStorage.setItem(TOKEN, data.payload.accessToken);
      dispatch({ type: AUTHENTICATION, payload: { name: data.payload.name } });

      toast.success(data.message);
      history.push('/dashboard');
    } catch (error) {
      requestError(error);
    } finally {
      dispatch({ type: FETCH_AUTH });
    }
  };
