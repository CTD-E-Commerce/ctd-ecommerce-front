import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carouselsm} from './carouselsm';
import {Carouselmd} from './carouselmd';
import {Carouselxl} from './carouselxl';
import {CartState} from '../../../context/Context.js';
import useAxios from '../../../hooks/useAxios';

export const Carrossel = () => {

//Função para requisição de produtos de categoria especifica
/*   let displayProducts = useAxios("/products/category/Hair Care"); */

    const {state: {products}} = CartState();
 /*    console.log(products); */

    return (
        <>
            {/* CARROSSEL TELAS GRANDES */}
            <Carouselxl productsArray={products}/>
            {/* CARROSSEL TELAS MEDIAS */}
            <Carouselmd productsArray={products}/>
            {/* CARROSSEL MOBILE */}
            <Carouselsm productsArray={products}/>
        </>
    )
}
