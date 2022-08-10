import {tokenReducer, tokenMiddleware} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import postsReducer from './postsData/postsSlice';
import commentsDataReducer from './commentsData/commentsSlice';
import {configureStore} from '@reduxjs/toolkit';


export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postsReducer,
    commentsDataReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});


