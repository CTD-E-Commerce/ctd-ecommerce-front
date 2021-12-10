import React from 'react';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router';
import GridCategorias from '../../Components/GridCategorias';


const Produtos = () => {

    const { category } = useParams();

    let path;

    if (category === "todas categorias") {
        path = `/products/buscartodos`;
    } else {
        path = `/products/category/${category}`;
    }

    const categoriaSelecionada = useAxios(path);

    return (
        <>  
            <GridCategorias categoryProd={categoriaSelecionada} />
        </>
    )
}

export default Produtos;