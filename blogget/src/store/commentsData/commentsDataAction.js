import axios from 'axios';
import {URL_API} from '../../api/const';

export const COMMENTS_REQUEST_STARTED = 'COMMENTS_REQUEST_STARTED';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentsDataRequest = () => ({
  type: COMMENTS_REQUEST_STARTED,
});

export const commentsDataRequestSuccess = (data) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  data,
});

export const commentsDataRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsDataAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;

  dispatch(commentsDataRequest());
  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(response => {
      const post = response.data[0].data.children[0].data;
      const comments = response.data[1].data.children.map(item => item.data);
      const commentsData = [post, comments];
      dispatch(commentsDataRequestSuccess(commentsData));
    })
    .catch((error) => {
      console.error('Произошла ошибка', error);
      dispatch(commentsDataRequestError(error.toString()));
    });
};
