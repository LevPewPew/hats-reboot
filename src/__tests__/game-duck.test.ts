import * as gameActions from '../actions/game-actions';
import gameReducer, { initialState } from '../reducers/game-reducer';
import { playersSeed } from '../seed-data';

describe('in game duck', () => {
  describe('reducer and actions', () => {
    describe("when the 'incrementPlayersScore' action is dispatched", () => {
      it("the correct 'score' index should be incremented by 1 when it's the same 'round'", () => {
        const newInitialState = { ...initialState };
        newInitialState.players = playersSeed;

        newInitialState.players.forEach((player, i) => {
          const SCORE_INDEX = 0;
          const CURRENT_ROUND = 0;

          const result = gameReducer(newInitialState, gameActions.incrementPlayersScore(player.name, CURRENT_ROUND));

          const nextState = { ...newInitialState };
          nextState.players[i].scores[SCORE_INDEX] = player.scores[SCORE_INDEX] + 1;
          expect(result).toEqual(nextState);
        });
      });

      it("the correct 'score' index should be incremented by 1 when it's a new 'round'", () => {
        const newInitialState = { ...initialState };
        newInitialState.players = playersSeed;

        newInitialState.players.forEach((player, i) => {
          const SCORE_INDEX = 1;
          const CURRENT_ROUND = 1;

          const result = gameReducer(newInitialState, gameActions.incrementPlayersScore(player.name, CURRENT_ROUND));

          const nextState = { ...newInitialState };
          nextState.players[i].scores[SCORE_INDEX] = 1;
          expect(result).toEqual(nextState);
        });
      });
    });
  });
});
