import { requestError } from '../../../utils/error';
import { AppDispatch } from '../../../domain/redux/action';
import {
  LIST_ALL_PRODUCTS,
  FETCH_PRODUCT,
} from '../../../infra/redux/products/constants';
import { product } from '../../../infra/http/web-service';

export const listProducts = (params: any) => async (dispatch: AppDispatch) => {
  dispatch({ type: FETCH_PRODUCT });
  try {
    const { data } = await product.listAll(params);

    dispatch({
      type: LIST_ALL_PRODUCTS,
      payload: data.payload,
    });
  } catch (error) {
    requestError(error);
  } finally {
    dispatch({ type: FETCH_PRODUCT });
  }
};
