import React from 'react';
import './style.scss';
import { Carousel, Col, Row } from 'react-bootstrap';
import {CartState} from '../../../context/Context.js';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import  Item  from './item';

=======
import Item from './item.js';
/* import {Produtos} from './produtos'; */
>>>>>>> 816335609dbf9a467107b3ce2db4e11a1f557d2e

export const Carouselsm = (props) => {

    const {state: {products}} = CartState();

    //Retorna Carousel Items com dados array retornado da api service
    return (
        <>
            {/* CARROSSEL MOBILE 1 */}
            <Col sm={{ span: 6, offset: 3 }} className="carousel-sm cabecalho"><h1>Novidades</h1></Col>
            <Carousel className="carousel-sm">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 0){
                                return (
                                    <Item prod={prod} key={index} />
                            )};
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 1){
                                return (
                                    <Item prod={prod} key={index} />
                            )};
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 2){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 3){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 4){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 5 ){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>


            {/* CARROSSEL MOBILE 2 */}
            <Col sm={{ span: 6, offset:3 }} className="carousel-sm cabecalho"><h1>Mais vendidos</h1></Col>
            <Carousel className="carousel-sm">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 6){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 7){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 8){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 9){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 10){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index === 11){
                                return (
                                    <Item prod={prod} key={index} />
                            )}
                            return;
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
