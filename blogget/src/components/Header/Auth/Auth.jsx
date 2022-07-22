import style from './Auth.module.css';
import {useEffect, useState} from 'react';
import {ReactComponent as LoginIcon} from './img/login.svg';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {URL_API} from '../../../api/const';


export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState({});
  let [showButton, setShowButton] = useState(style.hidden);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch(error => {
        console.error(error);
        delToken();
        setAuth({});
      });
  }, [token]);

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


