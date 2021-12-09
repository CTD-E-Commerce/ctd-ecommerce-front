import React from 'react'
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../assets/img/banner-slide1.jpg';
import slide2 from '../../assets/img/banner-slide2.jpg';
import slide3 from '../../assets/img/banner-slide3.jpg';


export const Banner = () => {
    return (
        <div>
            <Carousel className="carousel-banner">
                <Carousel.Item interval={1000}>
                    <img
                        className="img-responsive"
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>O Poder da Natureza</h3>
                        <p>Uma seleção das melhores marcas em produtos veganos.</p>
                        <button className="btn-banner">Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="img-responsive"
                        src={slide2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Seu momento de relaxar</h3>
                        <p>Torne sua hora do banho um momento de verdadeiro spa.</p>
                        <button className="btn-banner">Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-responsive"
                        src={slide3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Make up</h3>
                        <p>As melhores marcas selecinadas para realçar a sua beleza, mulher brasileira.</p>
                        <button className="btn-banner">Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


