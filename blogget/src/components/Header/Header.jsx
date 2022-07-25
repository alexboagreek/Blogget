import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import style from './Header.module.css';
import {tokenContext} from '../../context/tokenContext.js';

export const Header = () => {
  const {Consumer} = tokenContext;
  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Heading/>
          <Search/>
          <Consumer>
            {(ctx) => <Auth {...ctx}/>}
          </Consumer>
        </div>
      </Layout>
    </header>
  );
};
