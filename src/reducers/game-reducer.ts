import { ActionTypes } from '../actions/action-types';
import { GameActions } from '../actions/game-actions';

const TOTAL_ROUND_TIME = 45; // FIXME put this into settings

interface GameState {
  timer: number;
}

const initialState: GameState = { timer: 0 };

function gameReducer(state: GameState = initialState, action: GameActions) {
  let newState: GameState;

  switch (action.type) {
    case ActionTypes.DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      };
    case ActionTypes.RESET_TIMER:
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
