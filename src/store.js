import { combineReducers } from 'redux';
import { GalleryReducer } from './scenes/Gallery/reducer';

const rootReducer = combineReducers({
  ...GalleryReducer
});

export default rootReducer;
