import { PlayActionType } from 'src/actions/action-types';
import { PlayAction } from '@hats-reboot/state-management-types';

interface PlayState {
  round: number;
  timer: number;
}

export const initialState: PlayState = {
  round: 0,
  timer: 0,
};

function playReducer(state: PlayState = initialState, action: PlayAction): PlayState {
  switch (action.type) {
    case PlayActionType.DECREMENT_TIMER:
      return {
        ...state,
        timer: state.timer - 1,
      };
    case PlayActionType.SET_TIMER:
      return {
        ...state,
        timer: action.value,
      };
    case PlayActionType.INCREMENT_ROUND:
      return {
        ...state,
        round: state.round + 1,
      };
    default:
      return { ...state };
  }
}

export default playReducer;
