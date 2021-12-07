import React from 'react';
import './style.scss';
import { Carousel, Col} from 'react-bootstrap';
import {CartState} from '../../../context/Context.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './Item.js';
/* import {Produtos} from './produtos'; */


export const Carouselmd = (props) => {

    const {state: {products}} = CartState();

/*  var produtos1=[];
    var produtos2=[];
    var produtos3=[];
    var produtos4=[];
    var produtos5=[];
    var produtos6=[];
    
    function primeirosCards() {
        for (var i=0; i<6; i++){

            if(i<2){
                produtos1.push(Produtos[i])
            }
            if(i>1 && i<4){
                produtos2.push(Produtos[i])
            }
            if(i>3 && i<6){
                produtos3.push(Produtos[i])
            }

            if(i>5 && i<8){
                produtos4.push(Produtos[i])
            }
            if(i>7 && i<10){
                produtos5.push(Produtos[i])
            }
            if(i>9 && i<12){
                produtos6.push(Produtos[i])
            }
        }
    }
    
    primeirosCards(); */

    //Retorna Carousel Items com dados array retornado da api service
    return (
        <>
            {/* CARROSSEL TELA MÉDIA 1 */}
            <Col md={{ span: 6, offset: 2 }} className="carousel-md cabecalho"><h1>Novidades</h1></Col>
            <Carousel className="carousel-md">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index < 2){
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
                            if(index >= 2 && index < 4){
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
                            if(index >= 4 && index < 6){
                                return (
                                    <Item prod={prod} key={index} />
                            )};
                            return;
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL TELA MEDIA 2 */}
            <Col md={{ span: 6, offset: 2 }} className="carousel-md cabecalho"><h1>Mais vendidos</h1></Col>                
            <Carousel className="carousel-md">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(products).map((prod, index) => {
                            if(index >= 6 && index < 8){
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
                            if(index >= 8 && index < 10){
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
                            if(index >= 10 && index < 12){
                                return (
                                    <Item prod={prod} key={index} />
                            )};
                            return;
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
