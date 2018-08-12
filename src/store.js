import { combineReducers } from 'redux';
import { GalleryReducer } from './scenes/Gallery/reducer';
import { BlogPostReducer } from './services/wordpress/reducer';

const rootReducer = combineReducers({
  ...GalleryReducer,
  ...BlogPostReducer
});

export default rootReducer;
