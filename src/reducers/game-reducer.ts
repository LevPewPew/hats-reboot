import { GameActionType } from 'src/actions/action-types';
import { GameAction } from '@hats-reboot/state-management-types';

interface GameState {
  timer: number;
}

const initialState: GameState = { timer: 0 };

function gameReducer(state: GameState = initialState, action: GameAction): GameState {
  let newState: GameState;

  switch (action.type) {
    case GameActionType.DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer > 0 ? state.timer - 1 : state.timer,
      };
    case GameActionType.RESET_TIMER:
      return {
        ...state,
        timer: action.payload,
      };
    default:
      newState = { ...state };
  }

  return newState;
}

export default gameReducer;
