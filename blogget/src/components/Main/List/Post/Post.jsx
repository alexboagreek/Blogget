import style from './Post.module.css';
import {PostImage} from './PostImage/PostImage';
import {PostContent} from './PostContent/PostContent';
import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {PostDeleteButton} from './PostDeleteButton/PostDeleteButton';

export const Post = () => (
  <li className={style.post}>
    <PostImage />
    <PostContent/>
    <PostRaiting />
    <PostTime/>
    <PostDeleteButton/>
  </li>
);

