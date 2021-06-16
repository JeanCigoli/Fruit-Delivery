import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_CLIENTS,
  FETCH_CLIENTS,
} from '../../../infra/redux/clients/constants';
import { clients } from '../../../infra/http/web-service';

export const listClients = (params: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_CLIENTS });
  try {
    const { data } = await clients.listAll(params);

    dispatch({
      type: LIST_ALL_CLIENTS,
      payload: data.payload,
    });
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_CLIENTS });
  }
};
