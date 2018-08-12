import axios from 'axios';
import { ROOT_URL, ACCESS_TOKEN  } from './';

export const FETCH_VIDEOS_LOADING = 'FETCH_VIDEOS_LOADING';
export const FETCH_VIDEOS_SUCCESS = 'FETCH_VIDEOS_SUCCESS';
export const FETCH_VIDEOS_FAILURE = 'FETCH_VIDEOS_FAILURE';

export function getVideos(slug) {
  const url = `${ROOT_URL}/users/katelynem/videos`;

  return (dispatch) => {
    dispatch(videosIsLoading(true));

    axios({
      url: url,
      method: 'get',
      headers: {
        'Authorization': 'BEARER ' + ACCESS_TOKEN
      },
    }).then((response) => {
      dispatch(videosIsLoading(false));
      dispatch(videosFetchSuccess(response.data));
    }).catch(() => {
      dispatch(videosFetchError(true));
    })
  };

}

export const videosIsLoading = (bool) => ({
  type: FETCH_VIDEOS_LOADING,
  isLoading: bool
});

export const videosFetchSuccess = (videos) => ({
  type: FETCH_VIDEOS_SUCCESS,
  videos
});

export const videosFetchError = (bool) => ({
  type: FETCH_VIDEOS_FAILURE,
  hasErrored: bool
});
