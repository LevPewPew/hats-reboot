import { ActionTypes } from './action-types';

interface DecrementTimerAction {
  type: ActionTypes.DECREMENT_TIMER;
}

interface ResetTimerAction {
  type: ActionTypes.RESET_TIMER;
}

// FIXME deal with refactoring to the easier, neater, less boilerplate and upkeep pattern later.
export type GameActions = DecrementTimerAction | ResetTimerAction;

export function decrementTimer(): DecrementTimerAction {
  return {
    type: ActionTypes.DECREMENT_TIMER,
  };
}

export function resetTimer(): ResetTimerAction {
  return {
    type: ActionTypes.RESET_TIMER,
  };
}
