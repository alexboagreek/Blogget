import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import {postsDataAsync} from '../../../store/postsData/postsDataAction';
import {useDispatch} from 'react-redux';
import {useRef, useEffect} from 'react';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const posts = usePosts();
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsDataAsync(page));
  }, [page]);

  const uniqueKey = new Date().getTime();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsDataAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  if (!posts) {
    return;
  } else {
    return (
      <>
        <ul className={style.list}>
          {
            (posts.map((item) => (
              <Post key={`${item.data.id}${uniqueKey}`} postData={item.data}/>
            )))
          }
          <li ref={endList} className={style.end}/>
        </ul>
        <Outlet />
      </>
    );
  }
};

