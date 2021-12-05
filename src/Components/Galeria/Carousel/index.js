import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carouselsm} from './carouselsm';
import {Carouselmd} from './carouselmd';
import {Carouselxl} from './carouselxl';



export const Carrossel = (props) => {

    return (
        <>
            {/* CARROSSEL TELAS GRANDES */}
            <Carouselxl productsArray={props.productsArray}/>
            {/* CARROSSEL TELAS MEDIAS */}
            <Carouselmd productsArray={props.productsArray}/>
            {/* CARROSSEL MOBILE */}
            <Carouselsm productsArray={props.productsArray}/>
        </>
    )
}
