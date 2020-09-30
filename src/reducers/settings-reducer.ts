import { SettingsActionType } from 'src/actions/action-types';
import { SettingsAction } from '@hats-reboot/state-management-types';

interface SettingsState {
  timePerTurn: number;
}

export const initialState: SettingsState = { timePerTurn: 45 };

function settingsReducer(state: SettingsState = initialState, action: SettingsAction): SettingsState {
  switch (action.type) {
    case SettingsActionType.DECREMENT_TIME_PER_TURN:
      return {
        ...state,
        timePerTurn: state.timePerTurn - 1,
      };
    case SettingsActionType.INCREMENT_TIME_PER_TURN:
      return {
        ...state,
        timePerTurn: state.timePerTurn + 1,
      };
    default:
      return { ...state };
  }
}

export default settingsReducer;
