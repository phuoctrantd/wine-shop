import './assets/css/style.css'
import Routes from './routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      
        <Routes></Routes>
        <ToastContainer></ToastContainer>
      
      </BrowserRouter>
    </>
  );
}

export default App;
