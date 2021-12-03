import './App.scss';
import { Banner } from './Components/Banner';
import { Carrossel } from './Components/Galeria/Carousel';
import Header from './Components/Header';
import Categorias from './Components/Galeria/Categorias';
import Sobre from './Components/Sobre';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      {/* <Galeria> */}
        <Categorias />
        <Carrossel />
      {/* </Galeria> */}
      <Sobre />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
