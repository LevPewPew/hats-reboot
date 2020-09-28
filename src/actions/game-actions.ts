import { GameActionType } from 'src/actions/action-types';

export interface IncrementPlayersScore {
  type: GameActionType.INCREMENT_PLAYERS_SCORE;
  playerName: string;
  round: number;
}

export function incrementPlayersScore(playerName: string, round: number): IncrementPlayersScore {
  return {
    type: GameActionType.INCREMENT_PLAYERS_SCORE,
    playerName,
    round,
  };
}
