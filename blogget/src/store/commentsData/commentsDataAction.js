import axios from 'axios';
import {URL_API} from '../../api/const';
// import {commentsSlice} from './commentsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const commentsDataAsync = createAsyncThunk(
  'comments/fetch',
  (id, {getState}) => {
    const token = getState().tokenReducer.token;
    if (!token) return;

    return axios(`${URL_API}/comments/${id}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        const post = response.data[0].data.children[0].data;
        const comments = response.data[1].data.children.map(item => item.data);
        return {post, comments};
      })
      .catch((error) => {
        console.error('Произошла ошибка', error);
        return {error};
      });
  },
);
// export const commentsDataAsync2 = (id) => (dispatch, getState) => {
//   const token = getState().tokenReducer.token;

//   if (!token) return;
//   dispatch(commentsSlice.actions.commentsDataRequest());

//   axios(`${URL_API}/comments/${id}`, {
//     headers: {
//       Authorization: `bearer ${token}`,
//     },
//   })
//     .then(response => {
//       const post = response.data[0].data.children[0].data;
//       const comments = response.data[1].data.children.map(item => item.data);
//       dispatch(commentsSlice.actions.commentsDataRequestSuccess({ post, comments }));
//     })
//     .catch((error) => {
//       console.error('Произошла ошибка', error);
//       dispatch(commentsSlice.actions.commentsDataRequestError(error));
//     });
// };

