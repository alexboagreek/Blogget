import {PostsContextProvider} from '../../../context/postsContext';
import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import stylePost from './Post/Post.module.css';
import stylePostImage from './Post/PostImage/PostImage.module.css';
import stylePostContent from './Post/PostContent/PostContent.module.css';
import notphoto from './Post/img/notphoto.jpg';
import {Text} from '../../../UI/Text';
import {PostDeleteButton} from './Post/PostDeleteButton/PostDeleteButton';
import {PostTime} from './Post/PostTime/PostTime';


export const List = () => {
  const postsData = usePosts();

  return (
    <PostsContextProvider>
      <ul className={style.list}>
        {
          postsData.map((posts) => (
            <li className={stylePost.post} key={posts.data.id}>
              <img className=
                {stylePostImage.img}
              src={notphoto}
              alt={posts.data.title} />
              <div className={stylePostContent.content}>
                <Text As='h2' className={stylePostContent.title}>
                  <Text As='a' size={18} tsize={24}
                    className={stylePostContent.linkPost} href='#post'>
                    {posts.data.title}
                  </Text>
                </Text>
                <Text As='a'
                  size={12}
                  tsize={14}
                  color='orange'
                  className={stylePostContent.linkAuthor}
                  href='#author'>
                  {posts.data.author}
                </Text>
              </div>
              <Text As='div' className={stylePostContent.rating}>
                <Text As='button'
                  className={stylePostContent.up}
                  aria-label='Повысить рейтинг' />
                <Text
                  As='p'
                  color='grey99'
                  fontWeight='medium'
                  size={12}
                  className={stylePostContent.ups}>
                  {posts.data.ups}
                </Text>
                <Text As='button'
                  className={stylePostContent.down}
                  aria-label='Понизить рейтинг' />
              </Text>
              <PostTime/>
              <PostDeleteButton/>
            </li>
          ))}
      </ul>
    </PostsContextProvider>
  );
};

