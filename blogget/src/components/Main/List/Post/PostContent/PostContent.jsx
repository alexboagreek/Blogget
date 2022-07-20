import style from './PostContent.module.css';
import {postData} from '../../../../../data';
import {Text} from '../../../../../UI/Text';


export const PostContent = () => {
  const {title, author} = postData;
  console.log(style);

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Text As='a'
          size={18}
          tsize={24}
          className={style.linkPost}
          href='#post'>
          {title}
        </Text>
      </Text>
      <Text As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'>
        {author}
      </Text>
    </div>
  );
};
