import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <Layout>
          <div className={style.gridContainer}>
            <Logo/>
            <Heading/>
            <Search/>
          <Auth auth={false}/>
          </div>
      </Layout>
    </header>

  )
}