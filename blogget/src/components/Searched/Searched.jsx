import style from './Searched.module.css';
import { useSelector } from 'react-redux';
import { Post } from '../Main/List/Post/Post';

export const Searched = () => {
  const posts = useSelector(state => state.searchReducer.posts);

  const uniqueKey = new Date().getTime();

  return (
    <ul className={style.list}>
      {
        (posts.map((item) => (
          <Post key={`${item.data.id}${uniqueKey}`} postData={item.data} />
        )))
      }
    </ul >
  );
};

