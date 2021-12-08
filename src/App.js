import Header from './Components/Header';
import ToTop from './Components/ToTop';
import Footer from './Components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ToTop />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
