import { GameAction } from '@hats-reboot/state-management-types';
import { GameActionType } from 'src/actions/action-types';

interface GameState {
  players: Array<Player>;
  words: Array<string>;
}

export const initialState: GameState = { players: [], words: [] };

function gameReducer(state: GameState = initialState, action: GameAction): GameState {
  switch (action.type) {
    case GameActionType.INCREMENT_PLAYERS_SCORE: {
      const updatedPlayer = state.players.find((player) => player.name === action.playerName);

      if (updatedPlayer) {
        const playerIndex = state.players.findIndex((player) => player.name === action.playerName);
        const newPlayers = [...state.players];

        updatedPlayer.scores[action.round] = updatedPlayer.scores[action.round]
          ? updatedPlayer.scores[action.round] + 1
          : 1;
        newPlayers.splice(playerIndex, 1, updatedPlayer);

        return {
          ...state,
          players: newPlayers,
        };
      } else {
        return { ...state };
      }
    }
    default: {
      return { ...state };
    }
  }
}

export default gameReducer;
