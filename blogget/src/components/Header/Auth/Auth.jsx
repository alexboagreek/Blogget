import style from './Auth.module.css';
import {useState} from 'react';
import {ReactComponent as LoginIcon} from './img/login.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useAuth(token);
  let [showButton, setShowButton] = useState(style.hidden);

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
              delToken();
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

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};


