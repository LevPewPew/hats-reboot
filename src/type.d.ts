type Optional<T> = T | undefined;

declare module '@hats-reboot/state-management-types' {
  import { StateType, ActionType } from 'typesafe-actions';
  import { ThunkAction } from 'redux-thunk';

  export type RootState = StateType<typeof import('./reducers/root-reducer').default>;
  // disabling no-explicit-any because giving it RootState gives circular
  // reference error
  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  export type AppThunkAction<T> = ThunkAction<void, any, null, T>;
  export type GameAction = ActionType<typeof import('./actions/game-actions')>;
  export type ScoresAction = ActionType<typeof import('./actions/scores-actions')>;
  export type SettingsAction = ActionType<typeof import('./actions/settings-actions')>;
}
