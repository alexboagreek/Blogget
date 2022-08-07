import style from './Auth.module.css';
import {API_URL} from '../../../api/const';
import PropTypes from 'prop-types';
import {useState} from 'react';
import {ReactComponent as LoginIcon} from './img/login.svg';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';
import {useDispatch} from 'react-redux';
import {deleteToken} from '../../../store/tokenReducer';
import {AuthLoader} from '../../../UI/AuthLoader/AuthLoader';

export const Auth = () => {
  const [showLogout, setShowLogout] = useState(style.hidden);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();

  const getOut = () => {
    setShowLogout(!showLogout);
  };

  const logOut = () => {
    dispatch(deleteToken());
    location = API_URL;
    clearAuth();
  };


  return (
    <div className={style.container}>

      {loading ? (
        <AuthLoader/>
      ) : auth.name ? (
        <>
          <button className={style.btn} onClick={getOut}>
            <img
              className={style.img}
              src={auth.img}
              title={auth.name}
              alt={`Аватар ${auth.name}`}
            />
            <Text>{auth.name}</Text>
          </button>
          {showLogout && (
            <button
              className={style.logout}
              onClick={logOut}
            >Выйти</button>
          )}
        </>

      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <LoginIcon className={style.svg}/>
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  deleteToken: PropTypes.func,
};


