import { SettingsActionType } from 'src/actions/action-types';

export interface DecrementTimePerTurnAction {
  type: SettingsActionType.DECREMENT_TIME_PER_TURN;
}

export interface IncrementTimePerTurnAction {
  type: SettingsActionType.INCREMENT_TIME_PER_TURN;
}

export function decrementTimePerTurn(): DecrementTimePerTurnAction {
  return {
    type: SettingsActionType.DECREMENT_TIME_PER_TURN,
  };
}

export function incrementTimePerTurn(): IncrementTimePerTurnAction {
  return {
    type: SettingsActionType.INCREMENT_TIME_PER_TURN,
  };
}
