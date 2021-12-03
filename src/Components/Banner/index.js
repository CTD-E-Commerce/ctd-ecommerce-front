import React from 'react'
import './style.scss';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Banner = () => {
    return (
        <div>
            <Carousel className="carousel-banner">
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src="https://lojadior.vteximg.com.br/arquivos/discovery-01-banner-dior-homme.jpg?v=637517742444030000"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://s3-sa-east-1.amazonaws.com/object.belezanaweb.com.br/loucas/wordpress/prod/sites/1/2021/06/02184008/Banner-Qual-a-diferenca-entre-eau-de-parfum-e-eau-de-toilette1.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cityspideynews.s3.amazonaws.com/uploads/spidey/202109/makeup-brushes-cover-1632034198.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


