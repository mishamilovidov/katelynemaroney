import {
  FETCH_VIDEOS_LOADING,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAILURE
} from './actions';

export function videosIsLoading(state = false, action) {
    switch (action.type) {
        case FETCH_VIDEOS_LOADING:
            return action.isLoading;
        default:
            return state;
    }
}

export function videos(state = {}, action) {
    switch (action.type) {
        case FETCH_VIDEOS_SUCCESS:
          return action.videos;
        default:
            return state;
    }
}

export function videosFetchError(state = false, action) {
    switch (action.type) {
        case FETCH_VIDEOS_FAILURE:
            return action.hasErrored;
        default:
            return state;
    }
}

export const VideosReducer = {
  videos,
  videosFetchError,
  videosIsLoading
};
