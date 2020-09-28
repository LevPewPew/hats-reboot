import { PlayActionType } from 'src/actions/action-types';
import { AppThunkAction } from '@hats-reboot/state-management-types';

export interface DecrementTimerAction {
  type: PlayActionType.DECREMENT_TIMER;
}

export interface SetTimerAction {
  type: PlayActionType.SET_TIMER;
  value: number;
}

export interface IncrementRoundAction {
  type: PlayActionType.INCREMENT_ROUND;
}

export function decrementTimer(): DecrementTimerAction {
  return {
    type: PlayActionType.DECREMENT_TIMER,
  };
}

export function setTimer(value: number): SetTimerAction {
  return {
    type: PlayActionType.SET_TIMER,
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
    type: PlayActionType.INCREMENT_ROUND,
  };
}
