import { combineReducers } from 'redux';
import gameReducer from './game-reducer';
import playReducer from './play-reducer';
import settingsReducer from './settings-reducer';

const rootReducer = combineReducers({
  gameReducer,
  playReducer,
  settingsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
