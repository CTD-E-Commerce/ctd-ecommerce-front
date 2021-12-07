import React from 'react'
import FichaSelecionado from '../../Components/FichaSelecionado';
import useAxios from '../../hooks/useAxios';
import { useParams } from 'react-router-dom';

const ProdutoSelecionado = () => {

    const { id } = useParams();
    const produtoSelecionado = useAxios(`products/buscar/${id}`);

    return (
        <>
            <FichaSelecionado prod={produtoSelecionado} />
        </>
    )
}

export default ProdutoSelecionado;