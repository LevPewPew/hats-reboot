import { ActionType } from 'src/actions/action-types';
import StateManagement from '@hats-reboot/state-management-types';

const TOTAL_ROUND_TIME = 45;

interface GameState {
  timer: number;
}

const initialState: GameState = { timer: 0 };

function gameReducer(state: GameState = initialState, action: StateManagement.GameAction): GameState {
  let newState: GameState;

  switch (action.type) {
    case ActionType.DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      };
    case ActionType.RESET_TIMER:
      return {
        ...state,
        timer: TOTAL_ROUND_TIME,
      };
    default:
      newState = { ...state };
  }

  return newState;
}

export default gameReducer;
