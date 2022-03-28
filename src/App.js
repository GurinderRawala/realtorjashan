import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import { config } from './config-app';
import { CurrentRoutes } from './routes';


function App() {
const { BrowserRouter  } = config.Router
  return (
  <div className='container-fluid'>
    <BrowserRouter>
    <Navbar 
      Router={config.Router}
      />
    <CurrentRoutes 
    Router={config.Router}
    />
    </BrowserRouter >
  </div>
  );
}

export default App;
