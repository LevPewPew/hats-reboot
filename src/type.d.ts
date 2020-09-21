type Optional<T> = T | undefined;

declare module '@hats-reboot/state-management-types' {
  import { ActionType } from 'typesafe-actions';
  // 1 for reducer, 1 for action creators
  // export type ReducerState = StateType<typeof import("../reducers").default>;
  export type GameAction = ActionType<typeof import('./actions/game-actions')>;
}
