import { GameActionType } from 'src/actions/action-types';

export interface IncrementPlayersScore {
  type: GameActionType.INCREMENT_PLAYERS_SCORE;
  player: string;
  round: number;
}

export function incrementPlayersScore(player: string, round: number): IncrementPlayersScore {
  return {
    type: GameActionType.INCREMENT_PLAYERS_SCORE,
    player,
    round,
  };
}
