import { GameActionType } from './action-types';
import { AppThunkAction } from '@hats-reboot/state-management-types';

export interface DecrementTimerAction {
  type: GameActionType.DECREMENT_TIMER;
}

export interface ResetTimerAction {
  type: GameActionType.RESET_TIMER;
  payload: number;
}

export function decrementTimer(): DecrementTimerAction {
  return {
    type: GameActionType.DECREMENT_TIMER,
  };
}

export function setTimer(value: number): ResetTimerAction {
  return {
    type: GameActionType.RESET_TIMER,
    payload: value,
  };
}

export function resetTimer(): AppThunkAction<ResetTimerAction> {
  return (dispatch, getState) => {
    const { timePerTurn } = getState().settingsReducer;

    dispatch(setTimer(timePerTurn));
  };
}
