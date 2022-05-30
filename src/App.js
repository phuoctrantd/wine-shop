import './assets/css/style.css'
import Footer from './components/Footer';
import Header from './components/Header';
import Routes from './routes/Routes.jsx';

function App() {
  return (
    <>
      <Header></Header>
        <Routes></Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
