import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const postsData = usePosts();

  return (
    <ul className={style.list}>
      {
        postsData.map((item) => (
          <Post key={item.data.id} postData={item.data}/>
        ))
      }
    </ul>
  );
};

