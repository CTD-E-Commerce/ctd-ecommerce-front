import React from 'react';
import './style.scss';
import { Carouselsm } from './carouselsm';
import { Carouselmd } from './carouselmd';
import { Carouselxl } from './carouselxl';


export const Carrossel = () => {
    return (
        <>
            {/* CARROSSEL TELAS GRANDES */}
            <Carouselxl />
            {/* CARROSSEL TELAS MEDIAS */}
            <Carouselmd />
            {/* CARROSSEL MOBILE */}
            <Carouselsm />
        </>
    )
}
