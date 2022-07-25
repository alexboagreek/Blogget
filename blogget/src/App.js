
import Header from './components/Header';
import Main from './components/Main';
import {useToken} from './hooks/useToken';
import {tokenContext} from './context/tokenContext';

function App() {
  const [token, delToken] = useToken('');
  const {Provider} = tokenContext;

  return (
    <Provider value={{token, delToken}}>
      <Header/>
      <Main />
    </Provider>
  );
}

export default App;
