import { GameActionType } from 'src/actions/action-types';
import { GameAction } from '@hats-reboot/state-management-types';
import { words } from '../seed-data';

interface GameState {
  round: number;
  timer: number;
  words: Array<string>;
}

const initialState: GameState = { round: 1, timer: 0, words: words };

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
    case GameActionType.INCREMENT_ROUND:
      return {
        ...state,
        round: state.round + 1,
      };
    default:
      newState = { ...state };
  }

  return newState;
}

export default gameReducer;
