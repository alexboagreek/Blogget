import style from './Comments.module.css';
import PropTypes from 'prop-types';
import {PostTime} from '../../../components/Main/List/Post/PostTime/PostTime';

export const Comments = ({comments}) => {
  const postDateUndefined = (elem) => {
    if (elem.created !== undefined) {
      return elem.created;
    } else if (elem.created === undefined) {
      return elem.created = 1000000000;
    }
  };
  const liElementCreated = () => {
    const elementArray = [];
    if (comments !== undefined) {
      comments.map((elem) => elem.body && (
        elementArray.push(
          <li className={style.item} key={elem.id}>
            <h3
              className={style.author}
              size={18}
              tsize={22}
            >{elem.author}</h3>
            <p
              className={style.comment}
              size={14}
              tsize={18}>{elem.body}</p>
            <PostTime created={postDateUndefined(elem)} />
          </li>
        )
      ));
      if (elementArray !== []) {
        return [...elementArray];
      } else if (elementArray === []) {
        return 'No comments yet';
      }
    }
  };
  return (
    <ul className={style.list}>
      {
        liElementCreated()
      }
    </ul>
  );
};


Comments.propTypes = {
  comments: PropTypes.array,
};
