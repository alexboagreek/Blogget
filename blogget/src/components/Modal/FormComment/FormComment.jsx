import style from './FormComment.module.css';
import {useRef, useContext} from 'react';
import {authContext} from './../../../context/authContext';

export const FormComment = () => {
  const {auth} = useContext(authContext);
  const inputRef = useRef(null);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 size={14} tsize={18}>{auth.name}</h3>
      <textarea className={style.textarea} ref={inputRef}></textarea>
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
