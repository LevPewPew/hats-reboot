type Optional<T> = T | undefined;

declare module '@hats-reboot/state-management-types' {
  import { StateType, ActionType } from 'typesafe-actions';
  import { Action } from 'redux';
  import { ThunkAction } from 'redux-thunk';

  export type RootState = StateType<typeof import('./reducers/root-reducer').default>;
  export type AppThunkAction<T> = ThunkAction<void, any, null, T>;
  export type GameAction = ActionType<typeof import('./actions/game-actions')>;
  export type SettingsAction = ActionType<typeof import('./actions/settings-actions')>;
}
