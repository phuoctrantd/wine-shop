import './assets/css/style.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/Routes.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header></Header>
        <Routes></Routes>
        <ToastContainer></ToastContainer>
      <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
