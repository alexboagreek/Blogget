import style from './Auth.module.css';
import {API_URL} from '../../../api/const';
import {useState, useContext} from 'react';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {authContext} from './../../../context/authContext';

import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store';

export const Auth = () => {
  let [showButton, setShowButton] = useState(style.hidden);
  const dispatch = useDispatch();
  const {auth, clearAuth} = useContext(authContext);

  const handleDelToken = () => {
    dispatch(deleteToken());
    location = API_URL;
  };


  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.btn}>
            <img className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
              onClick={() => {
                if (showButton === style.hidden) {
                  setShowButton(showButton === style.logout);
                } else if (showButton === style.logout) {
                  setShowButton(showButton = style.hidden);
                }
              }}
            />
            <Text>{auth.name}</Text>
          </button>
          <button
            className={showButton}
            onClick={() => {
              handleDelToken();
              clearAuth();
            }
            }>Выйти</button>
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};

// Auth.propTypes = {
//   token: PropTypes.string,
//   delToken: PropTypes.func,
// };


