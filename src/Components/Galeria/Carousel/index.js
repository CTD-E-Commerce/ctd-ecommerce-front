import React from 'react';
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carouselsm } from './carouselsm';
import { Carouselmd } from './carouselmd';
import { Carouselxl } from './carouselxl';
import useAxios from '../../../hooks/useAxios';

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
