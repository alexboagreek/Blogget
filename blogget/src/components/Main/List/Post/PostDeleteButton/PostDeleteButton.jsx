import style from './PostDeleteButton.module.css';
import {ReactComponent as DeleteBtnIcon} from '../img/delete.svg';

export const PostDeleteButton = () => {
  console.log(style);
  return (
    <button className={style.delete} aria-label='Удалить'>
      <DeleteBtnIcon/>
    </button>
  );
};
