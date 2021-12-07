import React from 'react';
import './style.scss';
import { useEffect, useState, useCallback } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Carouselsm} from './carouselsm';
import {Carouselmd} from './carouselmd';
import {Carouselxl} from './carouselxl';
import api from '../../../services/api';
import useAxios from '../../../hooks/useAxios';

export const Carrossel = () => {

//Função para requisição de produtos de categoria especifica
  let displayProducts = useAxios("/products/category/Hair Care");

    return (
        <>
            {/* CARROSSEL TELAS GRANDES */}
            <Carouselxl productsArray={displayProducts}/>
            {/* CARROSSEL TELAS MEDIAS */}
            <Carouselmd productsArray={displayProducts}/>
            {/* CARROSSEL MOBILE */}
            <Carouselsm productsArray={displayProducts}/>
        </>
    )
}
