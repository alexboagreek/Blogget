import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import style from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <Layout>
        <Logo/>
        <h1>ЕУЧЕ</h1>
        <Search/>
        <Auth/>
      </Layout>
    </header>

  )
}