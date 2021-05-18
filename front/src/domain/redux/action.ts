import { store } from '../../infra/redux/store';

export type ActionsType = {
  type: string;
  payload?: any;
};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
