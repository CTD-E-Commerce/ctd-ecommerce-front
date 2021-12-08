import { Banner } from '../../Components/Banner';
import { Carrossel } from '../../Components/Galeria/Carousel';
import Categorias from '../../Components/Galeria/Categorias';
import Sobre from '../../Components/Sobre';

import ScrollToTop from '../../Components/ScrollToTop';


const Home = () => {

     return (
        <>
        <ScrollToTop />
            <Banner />
            {/* <Galeria> */}
                <Categorias />
                <Carrossel/>
            {/* </Galeria> */}
            <Sobre />
            {/* <Footer /> */}
        </>
    );
}

export default Home;