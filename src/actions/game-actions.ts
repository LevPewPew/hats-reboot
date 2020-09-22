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

// FIXME fix that this doesn't seem to actually make anything safe, or just make it as referred as possible?
// FIXME change this variables name to not be thunk
export function resetTimerThunk(): AppThunkAction<ResetTimerAction> {
  return (dispatch, getState) => {
    const { timePerTurn } = getState().settingsReducer;

    dispatch(resetTimer(timePerTurn));
  };
}
