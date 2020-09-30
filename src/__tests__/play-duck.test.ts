/* eslint-disable @typescript-eslint/no-explicit-any */
import * as playActions from '../actions/play-actions';
import playReducer, { initialState } from '../reducers/play-reducer';
import configureMockStore from 'redux-mock-store';
import thunk, { ThunkDispatch } from 'redux-thunk';
import { RootState } from '@hats-reboot/state-management-types';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('in play duck', () => {
  describe('reducer and actions', () => {
    describe("when the 'decrementTimer' action is dispatched", () => {
      it("'timer' state should decrement by 1", () => {
        const result = playReducer(undefined, playActions.decrementTimer());

        const nextState = { ...initialState };
        nextState.timer = initialState.timer - 1;
        expect(result).toEqual(nextState);
      });
    });

    describe("when the 'setTimer' action is dispatched", () => {
      it("'timer' state should be set to the given 'action.value'", () => {
        const TIMER = 456;

        const result = playReducer(undefined, playActions.setTimer(TIMER));

        const nextState = { ...initialState };
        nextState.timer = TIMER;
        expect(result).toEqual(nextState);
      });
    });

    describe("when the 'resetTimer' thunk action is dispatched", () => {
      it("'timer' state should be set to the 'timePerTurn' state from 'settings' duck", () => {
        const TIME_PER_TURN = 45;
        const rootState = {
          ...initialState,
          settingsReducer: {
            timePerTurn: TIME_PER_TURN,
          },
        };
        const rootStore = mockStore(rootState);

        (rootStore.dispatch as ThunkDispatch<RootState, void, any>)(playActions.resetTimer());

        const expectedActions = [playActions.setTimer(TIME_PER_TURN)];
        expect(rootStore.getActions()).toEqual(expectedActions);
      });
    });

    describe("when the 'incrementRound' action is dispatched", () => {
      it("'round' state should increment by 1", () => {
        const result = playReducer(undefined, playActions.incrementRound());

        const nextState = { ...initialState };
        nextState.round = initialState.round + 1;
        expect(result).toEqual(nextState);
      });
    });
  });
});
