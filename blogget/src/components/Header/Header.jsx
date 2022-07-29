import React from 'react';
import Layout from '../Layout';
import Logo from './Logo';
import Search from './Search';
import Auth from './Auth';
import Heading from './Heading';
import style from './Header.module.css';

export const Header = () => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo/>
        <Heading/>
        <Search/>
        <Auth/>
      </div>
    </Layout>
  </header>
);

