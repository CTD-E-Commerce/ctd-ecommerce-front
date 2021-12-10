import { Banner } from '../../Components/Banner';
import { Carrossel } from '../../Components/Galeria/Carousel';
import Categorias from '../../Components/Galeria/Categorias';
import ScrollToTop from '../../Components/ScrollToTop';


const Home = () => {

    return (
        <>
            <ScrollToTop />
            <Banner />
            {/* <Galeria> */}
            <Categorias />
            <Carrossel />
            {/* </Galeria> */}
            {/* <Footer /> */}
        </>
    );
}

export default Home;