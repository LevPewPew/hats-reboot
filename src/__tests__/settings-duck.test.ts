import * as settingsActions from '../actions/settings-actions';
import settingsReducer, { initialState } from '../reducers/settings-reducer';

describe('in settings duck', () => {
  describe('reducer and actions', () => {
    describe("when the 'decrementTimePerTurn' action is dispatched", () => {
      it("'timePerTurn' state should decrement by 1", () => {
        const result = settingsReducer(undefined, settingsActions.decrementTimePerTurn());

        const nextState = { ...initialState };
        nextState.timePerTurn = initialState.timePerTurn - 1;
        expect(result).toEqual(nextState);
      });
    });

    describe("when the 'incrementTimePerTurn' action is dispatched", () => {
      it("'timePerTurn' state should increment by 1", () => {
        const result = settingsReducer(undefined, settingsActions.incrementTimePerTurn());

        const nextState = { ...initialState };
        nextState.timePerTurn = initialState.timePerTurn + 1;
        expect(result).toEqual(nextState);
      });
    });
  });
});
