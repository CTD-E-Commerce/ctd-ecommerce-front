import React from 'react';
import './style.scss';
import './style2.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carouselsm } from './carouselsm';
import { Carouselmd } from './carouselmd';
import { Carouselxl } from './carouselxl';
import {Carouselextra} from './carouselextra'
import { CartState } from '../../../context/Context.js';
import useAxios from '../../../hooks/useAxios';

export const Carrossel = () => {

    const { state: { products } } = CartState();

    return (
        <>
            {/* CARROSSEL TELAS GRANDES */}
            <Carouselxl productsArray={products} />
            {/* CARROSSEL TELAS MEDIAS */}
            <Carouselmd productsArray={products} />
            {/* CARROSSEL MOBILE */}
            <Carouselsm productsArray={products} />
            {/* CARROSSEL OUTRAS PAG */}
            <Carouselextra productsArray={products} />
        </>
    )
}
