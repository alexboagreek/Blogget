import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {postsDataAsync} from '../store/postsData/postsDataAction';

export const usePosts = (newPage) => {
  const token = useSelector(state => state.tokenReducer.token);
  const posts = useSelector(state => state.postsReducer.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsDataAsync(newPage));
  }, [token]);

  return posts;
};
