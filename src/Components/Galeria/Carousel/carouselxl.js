import React from 'react';
import './style.scss';
import { Carousel, Col } from 'react-bootstrap';
import useAxios from '../../../hooks/useAxios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from './item.js';


export const Carouselxl = () => {
    const newProducts = Object.values(useAxios("/products/novidades"));
    const mostProducts = Object.values(useAxios("/products/maisvendidos"));

    /*var produtos1=[];
      var produtos2=[];
      var produtos3=[];
      var produtos4=[];
      
      function primeirosCards() {
          for (var i=0; i<6; i++){
  
              if(i<3){
                  produtos1.push(Produtos[i])
              }
              if(i>2 && i<6){
                  produtos2.push(Produtos[i])
              }
          }
      }
      
  
      function sortearCards() {
          for (var i=0; i<6; i++){
              var s = getRandomArbitrary(Produtos.length, 1);
              if(i<3){
                  produtos3.push(Produtos[s])
              }
              if(i>2 && i<6){
                  produtos4.push(Produtos[s])
              }
          }
          
      }
      
      function getRandomArbitrary(min, max) {
          return Math.floor(Math.random() * (max - min) + min);
      }
  
      primeirosCards();
  
      sortearCards(); */

    //Retorna Carousel Items com dados do array retornado da api service


    return (
        <>
            {/* CARROSSEL LARGE 1 */}

            <Col xl={{ span: 2, offset: 2 }} className="carousel-xl cabecalho"><h1>Novidades</h1></Col>

            <Carousel className="carousel-xl">
                <Carousel.Item >
                    <div className="container-card">

                        {Object.values(newProducts).map((prod, index) => {
                            if (index < 3) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                    /*  console.log(prod) */
                                )
                            };
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(newProducts).map((prod, index) => {
                            if (index >= 3 && index < 6) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL 2 */}
            <Col xl={{ span: 2, offset: 2 }} className="carousel-xl cabecalho"><h1>Mais vendidos</h1></Col>
            <Carousel className="carousel-xl">
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(mostProducts).map((prod, index) => {
                            if (index < 3) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(mostProducts).map((prod, index) => {
                            if (index >= 3 && index < 6) {
                                return (
                                    <Item prod={prod} key={prod.id} />
                                )
                            };
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
