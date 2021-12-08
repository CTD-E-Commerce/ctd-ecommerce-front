import React from 'react'
//import useAxios from '../../hooks/useAxios';
//import { useParams } from 'react-router';
import { Banner } from '../../Components/Banner';
import GridCategorias from '../../Components/GridCategorias';


const Produtos = () => {

    // const { category } = useParams();
    // const categoriaSelecionada = useAxios(`/categories/${category}`);

    return (
        <>         
            <Banner />
            <GridCategorias />
        </>
    )
}

export default Produtos;