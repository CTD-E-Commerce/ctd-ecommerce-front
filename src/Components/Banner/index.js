import React from 'react'
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import slide1 from '../../assets/img/banner-slide1.jpg';
import slide2 from '../../assets/img/banner-slide2.jpg';
import slide5 from '../../assets/img/banner-slide5.jpg';


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
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <button className="btn-banner">Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-responsive"
                        src={slide5}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <button className="btn-banner">Conferir</button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


