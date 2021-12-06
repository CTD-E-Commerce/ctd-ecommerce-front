import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import { Banner } from '../../Components/Banner';
import { Carrossel } from '../../Components/Galeria/Carousel';
import Categorias from '../../Components/Galeria/Categorias';
import api from '../../services/api';
import Sobre from '../../Components/Sobre';
import Swal from 'sweetalert2';

const Home = () => {
    
    //Define states para produtos e categorias
  const[products, setProducts] = useState({});
  const[categories, setCategories] = useState({});

    //Função para requisição de todos os produtos via api service
  const loadApiData = useCallback(async () => {

    try {
        const response = await api.get(`/products/buscartodos`,
        {
            //Cabeçalhos de requisição para tráfego nos endpoints
            headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS'
            },
        }
        );

        //Retorno de êxito da requisição - 200
        setProducts(response.data)
    } catch (error) {

        //Retorno de falha da requisição - 400
        Swal.fire({
                title: error.response.status,
                icon: 'error',
                text: error.response.data.message
        });
    }
    }, [])

    //Requisita produtos ao renderizar componente Home
  useEffect(() => {
     loadApiData();
  }, [loadApiData]);

    return (
        <>
            <Banner />
            {/* <Galeria> */}
                <Categorias />
                <Carrossel productsArray={products}/>
            {/* </Galeria> */}
            <Sobre />
            {/* <Footer /> */}
        </>
    );
}

export default Home;