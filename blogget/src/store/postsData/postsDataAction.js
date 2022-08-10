import axios from 'axios';
import {URL_API} from '../../api/const';
import {postsSlice} from './postsSlice';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsDataAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, { getState, dispatch }) => {
    let page = getState().postsReducer.page;
    if (newPage) {
      page = newPage;
      dispatch(postsSlice.actions.changePage({ page }));
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const loading = getState().postsReducer.loading;
    const isLast = getState().postsReducer.isLast;

    if (!token || loading || isLast) return;

    return axios(`${URL_API}/${page}?limit=8&${after ? `after=${after}` : ''}`,
      {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then(response => {
        const data = response.data.data;
        if (after) {
          dispatch(postsSlice.actions.postsRequestSuccessAfter({data}));
        } else {
          dispatch(postsSlice.actions.postsRequestSuccess({data}));
        }
      })
      .catch(error => {
        console.error('произошла ошибка', error);
        dispatch(postsSlice.actions.postsRequestError({error}));
      });
  },
);
