import style from './Post.module.css';
import {Thumbnail} from './Thumbnail/Thumbnail';
import {PostContent} from './PostContent/PostContent';
import {PostRaiting} from './PostRaiting/PostRaiting';
import {PostTime} from './PostTime/PostTime';
import {PostDeleteButton} from './PostDeleteButton/PostDeleteButton';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {
    thumbnail,
    title,
    author,
    ups,
    selftext: markdown,
    created,
    id,
  } = postData;

  return (
    <li className={style.post}>
      <Thumbnail title={title} thumbnail={thumbnail}/>
      <PostContent title={title} author={author} markdown={markdown} id={id}/>
      <PostRaiting ups={ups}/>
      <PostTime created={created}/>
      <PostDeleteButton/>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};


