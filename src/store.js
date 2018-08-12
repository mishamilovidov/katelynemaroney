import { combineReducers } from 'redux';
import { GalleryReducer } from './scenes/Gallery/reducer';
import { BlogPostReducer } from './services/wordpress/reducer';
import { VideosReducer } from './services/vimeo/reducer';

const rootReducer = combineReducers({
  ...GalleryReducer,
  ...BlogPostReducer,
  ...VideosReducer
});

export default rootReducer;
