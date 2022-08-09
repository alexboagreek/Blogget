import style from './Home.module.css';

export const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.home__container}>
        <h2>Стартовая страница</h2>
        <h3>Добро пожаловать!</h3>
        <p>Выберите категорию</p>
      </div>
    </div>
  );
};
