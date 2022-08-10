import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  data: [],
  error: {},
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    postsRequest: (state) => {
      state.loading = true;
      state.error = {};
    },
    postsRequestSuccess: (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = action.payload.data.children;
      state.after = action.payload.data.after;
      state.isLast = !action.payload.data.after;
    },

    postsRequestSuccessAfter: (state, action) => {
      state.loading = false;
      state.error = {};
      state.data = [...state.data, ...action.payload.data.children];
      state.after = action.payload.data.after;
      state.isLast = !action.payload.data.after;
    },
    postsRequestError: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    },
  },
});

export default postsSlice.reducer;
