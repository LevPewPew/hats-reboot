import { GameAction } from '@hats-reboot/state-management-types';
import { words, players } from '../seed-data';
import { GameActionType } from 'src/actions/action-types';

interface GameState {
  players: Array<Player>;
  words: Array<string>;
}

const initialState: GameState = { players: players, words: words };

function gameReducer(state: GameState = initialState, action: GameAction): GameState {
  switch (action.type) {
    case GameActionType.INCREMENT_PLAYERS_SCORE:
      return {
        // TODO logic to increase a specific players score
        ...state,
      };
    default:
      return { ...state };
  }
}

export default gameReducer;
