import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import React from 'react';


const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs/>
      <List/>
    </Layout>
  </main>
);

export default Main;
