import {
  COMMENTS_REQUEST_STARTED,
  COMMENTS_REQUEST_SUCCESS,
  COMMENTS_REQUEST_ERROR
} from './commentsDataAction';

const initialState = {
  loading: false,
  data: [],
  error: '',
};

export const commentsDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST_STARTED:
      return {
        ...state,
        loading: true,
        error: '',
      };

    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.data,
        error: '',
      };

    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
