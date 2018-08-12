import axios from 'axios';
import { API_TOKEN, ROOT_URL } from '../../services/wordpress';

export const FETCH_PHOTOGRAPHY_LOADING = 'FETCH_PHOTOGRAPHY_LOADING';
export const FETCH_PHOTOGRAPHY_SUCCESS = 'FETCH_PHOTOGRAPHY_SUCCESS';
export const FETCH_PHOTOGRAPHY_FAILURE = 'FETCH_PHOTOGRAPHY_FAILURE';

export function getPhotography(slug) {
  // TODO: figure out better way to just get images for photography first
  const url = `${ROOT_URL}/media?number=100`;

  return (dispatch) => {
    dispatch(photographyIsLoading(true));

    axios({
      url: url,
      method: 'get',
      headers: {
        'Authorization': 'BEARER ' + API_TOKEN
      },
    }).then((response) => {
      dispatch(photographyIsLoading(false));
      dispatch(photographyFetchSuccess(response.data));
    }).catch(() => {
      dispatch(photographyFetchError(true));
    })
  };

}

export const photographyIsLoading = (bool) => ({
  type: FETCH_PHOTOGRAPHY_LOADING,
  isLoading: bool
});

export const photographyFetchSuccess = (photos) => ({
  type: FETCH_PHOTOGRAPHY_SUCCESS,
  photos
});

export const photographyFetchError = (bool) => ({
  type: FETCH_PHOTOGRAPHY_FAILURE,
  hasErrored: bool
});
