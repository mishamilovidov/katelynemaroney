import _ from 'lodash';
import {
  FETCH_PHOTOGRAPHY_LOADING,
  FETCH_PHOTOGRAPHY_SUCCESS,
  FETCH_PHOTOGRAPHY_FAILURE
} from './actions';

export function photographyIsLoading(state = false, action) {
    switch (action.type) {
        case FETCH_PHOTOGRAPHY_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function photography(state = [], action) {
    switch (action.type) {
        case FETCH_PHOTOGRAPHY_SUCCESS:
          const photography = _.filter(action.photos.media, function(o) {
            return o.description === "photography";
          });

          let photos = [];

          _.forEach(photography, (photo) => {
            let image = {}

            image.src = photo.URL;
            image.thumbnail = photo.URL;
            image.thumbnailWidth = photo.width;
            image.thumbnailHeight = photo.height;

            photos.push(image);
          });

          return photos;
        default:
            return state;
    }
}

export function photographyFetchError(state = false, action) {
    switch (action.type) {
        case FETCH_PHOTOGRAPHY_FAILURE:
            return action.hasErrored;
        default:
            return state;
    }
}

export const PhotographyReducer = {
  photography,
  photographyIsLoading,
  photographyFetchError
};
