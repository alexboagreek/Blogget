import {useContext, useEffect, useState} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePosts = () => {
  const {token} = useContext(tokenContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!token) return;
    fetch(`${URL_API}/best?limit=8`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(response => {
        setPosts(response.data.children);
      })
      .catch(error => {
        console.error('нет данных', error);
      });
  }, [token]);

  return posts;
};
