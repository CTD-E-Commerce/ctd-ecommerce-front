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

export const Carrossel = () => {

       //Define states para produtos
  const[products, setProducts] = useState({});

    //Função para requisição de produtos de categoria especifica
  const buscarCategoria = useCallback(async (categoria) => {

    try {
        const response = await api.get(`/products/category/${categoria}`,
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
     buscarCategoria("perfumaria");
  }, [buscarCategoria]);

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
