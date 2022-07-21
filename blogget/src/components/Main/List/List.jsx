import style from './List.module.css';
import Post from './Post';
// import {postData} from './../../../data';


export const List = () => {
  const postsData = [
    {
      thumbnail: '',
      title: 'Title',
      author: 'Nickname',
      ups: 24,
      date: '2022-02-28T09:45:00.00Z',
      id: '1',
    },
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 77,
      date: '2022-02-01T06:45:00.00Z',
      id: '2',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 28,
      date: '2022-02-24T04:45:00.00Z',
      id: '3',
    },
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 47,
      date: '2022-02-20T10:45:00.00Z',
      id: '4',
    },
  ];

  return (
    <ul className={style.list}>
      {postsData.map((postData) => (
        <Post key={postData.id} postData={postData} />
      ))}
    </ul>
  );
};

