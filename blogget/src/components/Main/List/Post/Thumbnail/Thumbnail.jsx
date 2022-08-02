import style from './Thumbnail.module.css';
import PropTypes from 'prop-types';
import notphoto from '../img/notphoto.jpg';

export const Thumbnail = ({thumbnail, title}) => {
  const imgUrls = () => {
    if (thumbnail !== 'default' &&
      thumbnail !== 'self') {
      return thumbnail;
    } else {
      return notphoto;
    }
  };
  return (
    <img className={style.img}
      src={imgUrls()}
      alt={title}/>
  );
};

Thumbnail.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
};
