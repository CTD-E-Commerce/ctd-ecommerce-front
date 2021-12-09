import React from 'react';
import './style.scss';
import { Carousel, Col } from 'react-bootstrap';
import useAxios from '../../../hooks/useAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './item.js';


export const Carouselmd = (props) => {

    const newProducts = Object.values(useAxios("/products/novidades"));
    const mostProducts = Object.values(useAxios("/products/maisvendidos"));

    //Retorna Carousel Items com dados array retornado da api service
    return (
        <>
            {/* CARROSSEL TELA MÉDIA 1 */}
            <Col md={{ span: 6, offset: 2 }} className="carousel-md cabecalho"><h1>Novidades</h1></Col>
            <Carousel className="carousel-md">
                <Carousel.Item >
                    <div className="container-card">
                        {newProducts.length !== 0 && (newProducts.map((prod, index) => {
                            if (index < 2) {
                                return (
                                    <Item prod={prod} key={index} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {newProducts.length !== 0 && (newProducts.map((prod, index) => {
                            if (index >= 2 && index < 4) {
                                return (
                                    <Item prod={prod} key={index} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {newProducts.length !== 0 && (newProducts.map((prod, index) => {
                            if (index >= 4 && index < 6) {
                                return (
                                    <Item prod={prod} key={index} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL TELA MEDIA 2 */}
            <Col md={{ span: 6, offset: 2 }} className="carousel-md cabecalho"><h1>Mais vendidos</h1></Col>
            <Carousel className="carousel-md">
                <Carousel.Item >
                    <div className="container-card">
                        {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                            if (index >= 6 && index < 8) {
                                return (
                                    <Item prod={prod} key={index} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                            if (index >= 8 && index < 10) {
                                return (
                                    <Item prod={prod} key={index} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                            if (index >= 10 && index < 12) {
                                return (
                                    <Item prod={prod} key={index} />
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
