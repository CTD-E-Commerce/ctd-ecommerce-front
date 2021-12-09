import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './style.scss';
import makeup from '../../../assets/makeup.png';
import skinCare from '../../../assets/skin-care.png';
import hipo from '../../../assets/hipo.png';
import perfume from '../../../assets/perfume.png';
import hair from '../../../assets/hair.png';

const Categorias = () => {
    return (
        <section id="categorias">
            <Container fluid>
                <Row className="row-categorias">
                    <Col sm className="item-categorias">
                        <Link to={"/produtos/categorias/skin care"}>
                            <img src={skinCare} alt="desenho de um tubo de creme" />
                            <p>Skin care</p>
                        </Link>
                    </Col>
                    <Col sm className="item-categorias">
                        <Link to={"/produtos/categorias/make up"}>
                            <img src={makeup} alt="desenho de um batom" />
                            <p>Make up</p>
                        </Link>
                    </Col>
                    <Col sm className="item-categorias">
                        <Link to={"/produtos/categorias/hair care"}>
                            <img src={hair} alt="" />
                            <p>Hair care</p>
                        </Link>
                    </Col>
                    <Col sm className="item-categorias">
                        <Link to={"/produtos/categorias/perfumes"}>
                            <img src={perfume} alt="" />
                            <p>Perfumes</p>
                        </Link>
                    </Col>
                    <Col sm className="item-categorias">
                        <Link to={"/produtos/categorias/veganos"}>
                            <img src={hipo} alt="" />
                            <p>Veganos</p>
                        </Link>
                    </Col>                 
                </Row>
            </Container>            
        </section>
    )
}

export default Categorias;

