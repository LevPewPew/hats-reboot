type Optional<T> = T | undefined;

declare module '@hats-reboot/state-management-types' {
  import { StateType, ActionType } from 'typesafe-actions';
  export type RootState = StateType<typeof import('./reducers/root-reducer').default>;
  export type GameAction = ActionType<typeof import('./actions/game-actions')>;
  export type SettingsAction = ActionType<typeof import('./actions/settings-actions')>;
}
