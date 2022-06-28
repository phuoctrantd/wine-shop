import './assets/css/style.css'
import Routes from './routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter} from 'react-router-dom'
import Loading from './components/Loading';
function App() {
  return (
    <>
    <BrowserRouter>
      
        <Routes></Routes>
        <Loading></Loading>
        <ToastContainer></ToastContainer>
      
      </BrowserRouter>
    </>
  );
}

export default App;
