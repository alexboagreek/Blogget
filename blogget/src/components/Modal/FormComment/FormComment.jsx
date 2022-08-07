import style from './FormComment.module.css';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';
import {useSelector, useDispatch} from 'react-redux';
import {updateComment} from './../../../store/commentReducer';

export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();
  const [auth] = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(value);
  };
  const handleChange = (event) => {
    dispatch(updateComment(event.target.value));
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <Text As='h3' size={14} tsize={18}>{auth.name}</Text>
      <textarea
        className={style.textarea}
        value={value}
        onChange={handleChange}
      />
      <button className={style.btn}>Отправить</button>
    </form>
  );
};
