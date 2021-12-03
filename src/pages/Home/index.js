import { Banner } from '../../Components/Banner';
import { Carrossel } from '../../Components/Galeria/Carousel';
import Categorias from '../../Components/Galeria/Categorias';



const Home = () => {
    return (
        <>
            <Banner />
            {/* <Galeria> */}
                <Categorias />
                <Carrossel />
            {/* </Galeria>
            <Sobre />
            <Footer /> */}
        </>
    );
}

export default Home;