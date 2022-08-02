import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';


export const List = () => {
  const postData = usePosts();

  return (
    <ul className={style.list}>
      {
        postData.map((item) => (
          <Post key={item.data.id} postData={item.data}/>
        ))
      }
    </ul>
  );
};

