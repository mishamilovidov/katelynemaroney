import _ from 'lodash';
import {
  FETCH_GALLERY_LOADING,
  FETCH_GALLERY_SUCCESS,
  FETCH_GALLERY_FAILURE
} from './actions';

export function galleryIsLoading(state = false, action) {
    switch (action.type) {
        case FETCH_GALLERY_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function gallery(state = [], action) {
    switch (action.type) {
        case FETCH_GALLERY_SUCCESS:
          let media = [];

          _.forEach(action.media.media, (photo) => {
            if (photo.title !== "favicon" && photo.description !== "about me") {
              let image = {}

              image.src = photo.URL;
              image.thumbnail = photo.URL;
              image.thumbnailWidth = photo.width * .1;
              image.thumbnailHeight = photo.height * .1;
              image.tags = [{value: `#${photo.description}`, title: `#${photo.description}`}]

              media.push(image);
            }
          });

          return _.shuffle(media);
        default:
            return state;
    }
}

export function galleryFetchError(state = false, action) {
    switch (action.type) {
        case FETCH_GALLERY_FAILURE:
            return action.hasErrored;
        default:
            return state;
    }
}

export const GalleryReducer = {
  gallery,
  galleryIsLoading,
  galleryFetchError
};
