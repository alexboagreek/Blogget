import {createSlice} from '@reduxjs/toolkit';
import {commentsDataAsync} from './commentsDataAction';

const initialState = {
  loading: false,
  post: {},
  comments: [],
  error: {},
};

export const commentsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: {
    [commentsDataAsync.pending.type]: (state) => {
      state.loading = true;
      state.error = {};
    },
    [commentsDataAsync.fulfilled.type]: (state, action) => {
      state.loading = false,
      state.post = action.payload.post;
      state.comments = action.payload.comments;
      state.error = {};
    },
    [commentsDataAsync.rejected.type]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
  }
});

export default commentsSlice.reducer;


