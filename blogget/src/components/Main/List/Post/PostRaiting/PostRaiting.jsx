import style from './PostRaiting.module.css';
import {postData} from './../../../../../data';
import {Text} from '../../../../../UI/Text';

export const PostRaiting = () => {
  const {ups} = postData;
  console.log(style);

  return (
    <Text As='div' className={style.rating}>
      <Text As='button' className={style.up} aria-label='Повысить рейтинг' />
      <Text As='p'
        color='grey99'
        fontWeight='medium'
        size={12}
        className={style.ups}>{ups}
      </Text>
      <Text As='button' className={style.down} aria-label='Понизить рейтинг' />
    </Text>
  );
};
