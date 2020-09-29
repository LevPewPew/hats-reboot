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
      let updatedPlayer = players.find((player) => player.name === action.playerName);
      if (updatedPlayer) {
        updatedPlayer.scores[action.round] = updatedPlayer.scores[action.round]
          ? updatedPlayer.scores[action.round] + 1
          : 1;
        const playerIndex = players.findIndex((player) => player.name === action.playerName);
        const newPlayers = players.splice(playerIndex, playerIndex + 1, updatedPlayer);
        return {
          ...state,
          players: newPlayers,
        };
      } else {
        return { ...state };
      }

    default:
      return { ...state };
  }
}

export default gameReducer;
