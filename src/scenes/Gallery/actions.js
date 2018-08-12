import axios from 'axios';
import { API_TOKEN, ROOT_URL } from '../../services/wordpress';

export const FETCH_GALLERY_LOADING = 'FETCH_GALLERY_LOADING';
export const FETCH_GALLERY_SUCCESS = 'FETCH_GALLERY_SUCCESS';
export const FETCH_GALLERY_FAILURE = 'FETCH_GALLERY_FAILURE';

export function getGallery() {
  const url = `${ROOT_URL}/media?context=edit&number=100`;

  return (dispatch) => {
    dispatch(galleryIsLoading(true));

    axios({
      url: url,
      method: 'get',
      headers: {
        'Authorization': 'BEARER ' + API_TOKEN
      },
    }).then((response) => {
      dispatch(galleryIsLoading(false));
      dispatch(galleryFetchSuccess(response.data));
    }).catch(() => {
      dispatch(galleryFetchError(true));
    })
  };

}

export const galleryIsLoading = (bool) => ({
  type: FETCH_GALLERY_LOADING,
  isLoading: bool
});

export const galleryFetchSuccess = (media) => ({
  type: FETCH_GALLERY_SUCCESS,
  media
});

export const galleryFetchError = (bool) => ({
  type: FETCH_GALLERY_FAILURE,
  hasErrored: bool
});
