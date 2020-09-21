import { combineReducers } from 'redux';
import gameReducer from './game-reducer';
import settingsReducer from './settings-reducer';

const rootReducer = combineReducers({
  gameReducer,
  settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
