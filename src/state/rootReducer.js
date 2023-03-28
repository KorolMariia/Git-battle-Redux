import { combineReducers } from 'redux';
import { popularReducer } from './popular/popular.reducer';
import { battleReducer } from './battle/battle.reducer';

const rootReducer = combineReducers({
  popularReducer: popularReducer,
  battleReducer: battleReducer,
});

export default rootReducer;
