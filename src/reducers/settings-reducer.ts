import { SettingsActionType } from 'src/actions/action-types';
import { SettingsAction } from '@hats-reboot/state-management-types';

interface SettingsState {
  timePerTurn: number;
}

const initialState: SettingsState = { timePerTurn: 45 };

function settingsReducer(state: SettingsState = initialState, action: SettingsAction): SettingsState {
  let newState: SettingsState;

  switch (action.type) {
    case SettingsActionType.DECREMENT_TIME_PER_TURN:
      return {
        ...state,
        timePerTurn: state.timePerTurn > 10 ? state.timePerTurn - 1 : state.timePerTurn,
      };
    case SettingsActionType.INCREMENT_TIME_PER_TURN:
      return {
        ...state,
        timePerTurn: state.timePerTurn + 1,
      };
    default:
      newState = { ...state };
  }

  return newState;
}

export default settingsReducer;
