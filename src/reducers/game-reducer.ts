import { GameActionType } from 'src/actions/action-types';
import { GameAction } from '@hats-reboot/state-management-types';

const TOTAL_ROUND_TIME = 45;

interface GameState {
  timer: number;
}

const initialState: GameState = { timer: 0 };

function gameReducer(state: GameState = initialState, action: GameAction) {
  let newState: GameState;

  switch (action.type) {
    case GameActionType.DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      };
    case GameActionType.RESET_TIMER:
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
