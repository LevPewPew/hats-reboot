import { combineReducers } from 'redux';
import gameReducer from './game-reducer';

const rootReducer = combineReducers({
  gameReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
