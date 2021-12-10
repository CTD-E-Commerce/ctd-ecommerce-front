import React from 'react'
import './style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';



export const Banner = () => {
    return (
        <div>
            <Carousel className="carousel-banner">
                <Carousel.Item interval={1000}>
                    <img
                        className="img-responsive"
                        src="https://amarecuidar.s3.sa-east-1.amazonaws.com/banner/banner-slide1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>O Poder da Natureza</h3>
                        <p>Venha conhecer nossos produtos veganos!</p>
                        <Link to={"/produtos/categorias/veganos"}><button  className="btn-banner">Conferir</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="img-responsive"
                        src="https://amarecuidar.s3.sa-east-1.amazonaws.com/banner/banner-slide2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Você em 1º lugar</h3>
                        <p>Confira nossas ofertas de cuidados com a pele!</p>
                        <Link to={"/produtos/categorias/skin care"}><button  className="btn-banner">Conferir</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-responsive"
                        src="https://amarecuidar.s3.sa-east-1.amazonaws.com/banner/banner-slide3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Makes de qualidade</h3>
                        <p>Não deixe de ver nossas Makes maravilhosas!</p>
                        <Link to={"/produtos/categorias/make up"}><button  className="btn-banner">Conferir</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


