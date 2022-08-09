import style from './Notfound.module.css';
import ImgError from './img/404.svg';

export const NotFound = () => {
  console.log(style);
  return (
    <div className={style.notFound}>
      <img className={style.notFound__img} src={ImgError} alt="Notfound Page" />
    </div>
  );
};
