import React from 'react';
import './style.scss';
import { Carousel, Col } from 'react-bootstrap';
import useAxios from '../../../hooks/useAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './item.js';


export const Carouselxl = () => {

    const newProducts = useAxios("/products/novidades");
    const mostProducts = useAxios("/products/maisvendidos");

    return (
        <>
            {/* CARROSSEL LARGE 1 */}

            <Col xl={{ span: 2, offset: 2 }} className="carousel-xl cabecalho"><h1>Novidades</h1></Col>

            <Carousel className="carousel-xl">
                <Carousel.Item >
                    <div className="container-card">

                        {newProducts.length !== 0 && (newProducts.map((prod, index) => {
                            if (index < 3) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {newProducts.length !== 0 && (newProducts.map((prod, index) => {
                            if (index >= 3 && index < 6) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL 2 */}
            <Col xl={{ span: 2, offset: 2 }} className="carousel-xl cabecalho"><h1>Mais vendidos</h1></Col>
            
            <Carousel className="carousel-xl">
                <Carousel.Item >
                    <div className="container-card">
                        {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                            if (index < 3) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                            if (index >= 3 && index < 6) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
