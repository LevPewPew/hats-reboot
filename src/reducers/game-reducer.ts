import { DECREMENT_TIMER, RESET_TIMER } from '../actions/action-types';

interface GameState {
  timer: number;
}

const initialState: GameState = { timer: 0 };

function gameReducer(state: GameState = initialState, action: any) {
  let newState: GameState;

  switch (action.type) {
    case DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer + 1,
      };
    case RESET_TIMER:
      return {
        ...state,
        timer: action.value,
      };
    default:
      newState = { ...state };
  }

  return newState;
}

export default gameReducer;
