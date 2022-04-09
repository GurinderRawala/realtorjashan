import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux'
import Navbar from './components/navbar';
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import store from './redux/store';
import { AosInit } from './aos';

const App = () => {
  AosInit()
  return (
  <Provider store={store}>  
    <div className='container-fluid main-container'>
      <BrowserRouter>
        <Navbar />
        <AppRoutes.ConfigRoutes />
      </BrowserRouter >
    </div>
  </Provider>
  );
}

export default App;
