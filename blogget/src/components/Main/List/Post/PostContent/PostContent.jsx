import style from './PostContent.module.css';
import {postData} from '../../../../../data';


export const PostContent = () => {
  const {title, author} = postData;
  console.log(style);

  return (
    <div className={style.content}>
      <h2 className={style.title}>
        <a className={style.linkPost} href='#post'>
          {title}
        </a>
      </h2>
      <a className={style.linkAuthor} href='#author'>
        {author}
      </a>
    </div>
  );
};
