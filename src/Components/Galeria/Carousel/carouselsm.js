import React from 'react';
import './style.scss';
import { Carousel, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import useAxios from '../../../hooks/useAxios';
import Item from './item.js';

export const Carouselsm = () => {

    const newProducts = useAxios("/products/novidades");
    const mostProducts = useAxios("/products/maisvendidos");

    //Retorna Carousel Items com dados array retornado da api service
    return (
        <>
            {/* CARROSSEL MOBILE 1 */}
            <Col sm={{ span: 6, offset: 3 }} className="carousel-sm cabecalho"><h1>Novidades</h1></Col>
            <Carousel className="carousel-sm">
                <Carousel.Item >
                    <div className="container-card">
                        {newProducts.length !== 0 && (newProducts.map((prod, index) => {
                            if (index === 0) {
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
                            if (index === 1) {
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
                            if (index === 2) {
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
                            if (index === 3) {
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
                            if (index === 4) {
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
                            if (index === 5) {
                                return (
                                    <Item prod={prod} key={index} />
                                )
                            };
                            return null;
                        }))}
                    </div>
                </Carousel.Item>
            </Carousel>


            {/* CARROSSEL MOBILE 2 */}
            <Col sm={{ span: 6, offset: 3 }} className="carousel-sm cabecalho"><h1>Mais vendidos</h1></Col>
            <Carousel className="carousel-sm">
                <Carousel.Item >
                    <div className="container-card">
                        {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                            if (index === 0) {
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
                            if (index === 1) {
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
                            if (index === 2) {
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
                            if (index === 3) {
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
                            if (index === 4) {
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
                            if (index === 5) {
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
