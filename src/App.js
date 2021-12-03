import './App.scss';
import { Banner } from './Components/Banner';
import { Carrossel } from './Components/Galeria/Carousel';
import Header from './Components/Header';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Carrossel />
    </div>
  );
}

export default App;
