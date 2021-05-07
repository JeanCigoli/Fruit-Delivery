import { requestError } from '../../../utils/error';
import { AppDispatch } from '../store';
import { AUTHENTICATION, FETCH_AUTH } from './constants';

export const authentication = (data: any) => (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_AUTH });
  try {
    dispatch({ type: AUTHENTICATION, payload: data });
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_AUTH });
  }
};
