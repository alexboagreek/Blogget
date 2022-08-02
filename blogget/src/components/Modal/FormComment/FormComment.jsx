import style from './FormComment.module.css';
import {useRef} from 'react';

export const FormComment = () => {
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 size={14} tsize={18}>Имя авторизованного пользователя</h3>
      <textarea className={style.textarea} ref={inputRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
