import { combineReducers } from 'redux';
import { PhotographyReducer } from './scenes/Photography/reducer';

const rootReducer = combineReducers({
  ...PhotographyReducer
});

export default rootReducer;
