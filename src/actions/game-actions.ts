import { GameActionType } from './action-types';
import { Dispatch } from 'redux';
import { RootState, AppThunkAction } from '@hats-reboot/state-management-types';

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

export function resetTimer(value: number): ResetTimerAction {
  return {
    type: GameActionType.RESET_TIMER,
    payload: value,
  };
}

export function resetTimerThunk(): AppThunkAction<ResetTimerAction> {
  return (dispatch: Dispatch<any>, getState: () => RootState) => {
    const { timePerTurn }: { timePerTurn: number } = getState().settingsReducer;

    dispatch<ResetTimerAction>(resetTimer(timePerTurn));
  };
}
