import {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { commentsDataAsync } from './../store/commentsData/commentsDataAction';


export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  const post = useSelector(state => state.commentsDataReducer.post);
  const comments = useSelector(state => state.commentsDataReducer.comments);
  const loading = useSelector(state => state.commentsDataReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;
    dispatch(commentsDataAsync(id));
  }, [token]);

  return [post, comments, loading];
};

