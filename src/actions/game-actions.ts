import { ActionType } from './action-types';

interface DecrementTimerAction {
  type: ActionType.DECREMENT_TIMER;
}

interface ResetTimerAction {
  type: ActionType.RESET_TIMER;
}

export function decrementTimer(): DecrementTimerAction {
  return {
    type: ActionType.DECREMENT_TIMER,
  };
}

export function resetTimer(): ResetTimerAction {
  return {
    type: ActionType.RESET_TIMER,
  };
}
