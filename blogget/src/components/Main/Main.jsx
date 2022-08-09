import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs';
import List from './List';
import {Routes, Route} from 'react-router-dom';
import {Modal} from '../Modal/Modal';
import {Home} from '../../pages/Home/Home';
import {NotFound} from '../../pages/NotFound/Notfound';


export const Main = () => {
  return (
    <main className={style.main}>
      <Layout>
        <Tabs/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/category/:page' element={<List/>}>
            <Route path='post/:id' element={<Modal/>} />
          </Route>
        </Routes>
      </Layout>
    </main>
  );
};


