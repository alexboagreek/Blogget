import axios from 'axios';
import {URL_API} from '../../api/const';

export const POSTS_REQUEST_STARTED = 'POSTS_REQUEST_STARTED';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postsRequest = () => ({
  type: POSTS_REQUEST_STARTED,
});

export const postsRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postsRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsDataAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;

  dispatch(postsRequest());
  axios(`${URL_API}/best?limit=8`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(response => {
      const data = response.data.data.children;
      dispatch(postsRequestSuccess(data));
    })
    .catch(error => {
      console.error('Произошла ошибка', error);
      dispatch(postsRequestError(error.toString()));
    });
};
