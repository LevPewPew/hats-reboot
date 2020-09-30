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
    describe('when the decrementTimer action is dispatched', () => {
      it('should decrement the timer state by 1', () => {
        const INITIAL_TIMER = 123;
        const newInitialState = { ...initialState };
        newInitialState.timer = INITIAL_TIMER;

        const result = playReducer(newInitialState, playActions.decrementTimer());

        const nextState = { ...initialState };
        nextState.timer = INITIAL_TIMER - 1;
        expect(result).toEqual(nextState);
      });

      it('should NOT decrement the timer below 0', () => {
        const result = playReducer(undefined, playActions.decrementTimer());

        const nextState = initialState;
        expect(result).toEqual(nextState);
      });
    });

    describe('when the setTimer action is dispatched', () => {
      it('should set the timer to the given action.value', () => {
        const TIMER = 456;
        const result = playReducer(undefined, playActions.setTimer(TIMER));

        const nextState = { ...initialState };
        nextState.timer = TIMER;
        expect(result).toEqual(nextState);
      });
    });

    describe('when the resetTimer thunk action is dispatched', () => {
      it('should set the timer to the timePerTurn state from settings duck', () => {
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
  });
});
