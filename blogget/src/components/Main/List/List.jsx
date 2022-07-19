import style from './List.module.css';
import Post from './Post';

export const List = () => (
  <ul className={style.list}>
    {/* <Post postData={postData}/> */}
    <Post/>
  </ul>
);

