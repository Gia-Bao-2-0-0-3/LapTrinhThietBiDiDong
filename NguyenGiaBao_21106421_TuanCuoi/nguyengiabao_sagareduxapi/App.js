import { Provider } from 'react-redux';
import store from './store';
import Posts from './Post'; 

const App = () => {
  return (
    <Provider store={store}>
      <Posts />
    </Provider>
  );
};

export default App;