import React from 'react';
import './single.scss';
import { Carousel, Col, Row } from 'react-bootstrap';
import useAxios from '../../../hooks/useAxios';
import Itemsingle from './itemsingle.js';


export const CarouselSingle = (props) => {

    const mostProducts = Object.values(useAxios("/products/maisvendidos"));

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Row className="item-extra">
                        <Col xl={3} sm={6} className="container-card-extra">
                            {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                                if (index === 0) {
                                    return (
                                        <Itemsingle prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            }))}
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-sm-block container-card-extra">
                            {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                                if (index === 1) {
                                    return (
                                        <Itemsingle prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            }))}
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-xl-block container-card-extra">
                            {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                                if (index === 2) {
                                    return (
                                        <Itemsingle prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            }))}
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="item-extra">
                        <Col xl={3} sm={6} className="container-card-extra">
                            <div>
                                {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                                    if (index === 3) {
                                        return (
                                            <Itemsingle prod={prod} key={prod.id} />
                                        )
                                    };
                                    return;
                                }))}
                            </div>
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-sm-block container-card-extra">
                            {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                                if (index === 4) {
                                    return (
                                        <Itemsingle prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            }))}
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-xl-block container-card-extra">
                            {mostProducts.length !== 0 && (mostProducts.map((prod, index) => {
                                if (index === 5) {
                                    return (
                                        <Itemsingle prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            }))}
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}