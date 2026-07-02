import { Provider } from 'react-redux';
import Body from './components/Body';
import Header from './components/Header';
import appStore from './utils/appStore';


const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Body/>
      </div>
    </Provider>
  );
}

export default App;
