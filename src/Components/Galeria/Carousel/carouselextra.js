import React from 'react';
import './style2.scss';
import { Carousel, Col, Row } from 'react-bootstrap';
import { CartState } from '../../../context/Context.js';
import Item2 from './item2.js';


export const Carouselextra = (props) => {

    const { state: { products } } = CartState();

    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <Row className="item-extra">
                        <Col xl={3} sm={6} className="container-card-extra">
                            {Object.values(products).map((prod, index) => {
                                if (index === 0) {
                                    return (
                                        <Item2 prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            })}
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-sm-block container-card-extra">
                            {Object.values(products).map((prod, index) => {
                                if (index === 1) {
                                    return (
                                        <Item2 prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            })}
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-xl-block container-card-extra">
                            {Object.values(products).map((prod, index) => {
                                if (index === 2) {
                                    return (
                                        <Item2 prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            })}
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row className="item-extra">
                        <Col xl={3} sm={6} className="container-card-extra">
                            <div>
                                {Object.values(products).map((prod, index) => {
                                    if (index === 3) {
                                        return (
                                            <Item2 prod={prod} key={prod.id} />
                                        )
                                    };
                                    return;
                                })}
                            </div>
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-sm-block container-card-extra">
                            {Object.values(products).map((prod, index) => {
                                if (index === 4) {
                                    return (
                                        <Item2 prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            })}
                        </Col>
                        <Col xl={3} sm={6} className="d-none d-xl-block container-card-extra">
                            {Object.values(products).map((prod, index) => {
                                if (index === 5) {
                                    return (
                                        <Item2 prod={prod} key={prod.id} />
                                    )
                                };
                                return;
                            })}
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </>
    )
}