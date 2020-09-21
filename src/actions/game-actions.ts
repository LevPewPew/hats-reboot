import { GameActionType } from './action-types';

export interface DecrementTimerAction {
  type: GameActionType.DECREMENT_TIMER;
}

export interface ResetTimerAction {
  type: GameActionType.RESET_TIMER;
}

export function decrementTimer(): DecrementTimerAction {
  return {
    type: GameActionType.DECREMENT_TIMER,
  };
}

export function resetTimer(): ResetTimerAction {
  return {
    type: GameActionType.RESET_TIMER,
  };
}
