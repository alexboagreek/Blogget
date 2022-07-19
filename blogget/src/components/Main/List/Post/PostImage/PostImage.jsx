import style from './PostImage.module.css';
import notphoto from '../img/notphoto.jpg';
import {postData} from '../../../../../data';

export const PostImage = () => {
  const {title} = postData;
  return (
    <img className={style.img} src={notphoto} alt={title} />
  );
};
