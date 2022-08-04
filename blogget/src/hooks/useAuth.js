import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {getToken} from '../api/token';


export const useAuth = () => {
  const [auth, setAuth] = useState({});

  const token = getToken();

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
        // console.error(error);
        setAuth({});
      });
  }, [token]);
  const clearAuth = () => setAuth({});
  return [auth, clearAuth];
};
