import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { Banner } from '../../Components/Banner';
import { Carrossel } from '../../Components/Galeria/Carousel';
import Categorias from '../../Components/Galeria/Categorias';
import api from '../../services/api';
import Sobre from '../../Components/Sobre';

const Home = () => {
  const[products, setProducts] = useState({});
  const[categories, setCategories] = useState({});

  const loadApiData = useCallback(async () => {

    try {
        const response = await api.get(`/products/buscartodos`,
        {
            headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            },
        }
        );
        setProducts(response.data)
    } catch (error) {
        console.log(error)
        /*       Swal.fire({
                title: error.response.status,
                icon: 'error',
                text: error.response.data.message
            }); */
    }
    }, [])

  useEffect(() => {
     loadApiData();
  }, []);

console.log(products)

    return (
        <>
            <Banner />
            {/* <Galeria> */}
                <Categorias />
                <Carrossel />
            {/* </Galeria> */}
            <Sobre />
            {/* <Footer /> */}
        </>
    );
}

export default Home;