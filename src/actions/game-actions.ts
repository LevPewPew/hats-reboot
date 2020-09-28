import { GameActionType } from 'src/actions/action-types';
import { AppThunkAction } from '@hats-reboot/state-management-types';

export interface DecrementTimerAction {
  type: GameActionType.DECREMENT_TIMER;
}

export interface SetTimerAction {
  type: GameActionType.SET_TIMER;
  value: number;
}

export interface IncrementRoundAction {
  type: GameActionType.INCREMENT_ROUND;
}

export function decrementTimer(): DecrementTimerAction {
  return {
    type: GameActionType.DECREMENT_TIMER,
  };
}

export function setTimer(value: number): SetTimerAction {
  return {
    type: GameActionType.SET_TIMER,
    value,
  };
}

export function resetTimer(): AppThunkAction<SetTimerAction> {
  return (dispatch, getState) => {
    const { timePerTurn } = getState().settingsReducer;

    dispatch(setTimer(timePerTurn));
  };
}

export function incrementRound(): IncrementRoundAction {
  return {
    type: GameActionType.INCREMENT_ROUND,
  };
}
