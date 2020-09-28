import { ScoresActionType } from 'src/actions/action-types';

export interface IncrementPlayersScore {
  type: ScoresActionType.INCREMENT_PLAYERS_SCORE;
  player: string;
  round: number;
}

export function incrementPlayersScore(player: string, round: number): IncrementPlayersScore {
  return {
    type: ScoresActionType.INCREMENT_PLAYERS_SCORE,
    player,
    round,
  };
}
