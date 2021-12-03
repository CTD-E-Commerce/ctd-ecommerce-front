import './App.scss';
import Header from './Components/Header';
import Categorias from './Components/Galeria/Categorias';


function App() {
  return (
    <div className="App">
      <Header />
      {/* <Banner />
      <Galeria> */}
        <Categorias />
        {/* <Carousel />
      </Galeria>
      <Sobre />
      <Footer /> */}
    </div>
  );
}

export default App;
