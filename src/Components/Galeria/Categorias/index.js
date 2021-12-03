import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
                <h3 className="h3-categorias">Categorias</h3>
                <Row>
                    <Col sm className="item-categorias">
                        <a href="">
                            <img src={skinCare} alt="desenho de um tubo de creme" />
                            <p>Skin care</p>
                        </a>
                    </Col>
                    <Col sm className="item-categorias">
                        <a href="">
                            <img src={makeup} alt="desenho de um batom" />
                            <p>Make up</p>
                        </a>
                    </Col>
                    <Col sm className="item-categorias">
                        <a href="">
                            <img src={hair} alt="" />
                            <p>Hair care</p>
                        </a>
                    </Col>
                    <Col sm className="item-categorias">
                        <a href="">
                            <img src={perfume} alt="" />
                            <p>Perfume</p>
                        </a>
                    </Col>
                    <Col sm className="item-categorias">
                        <a href="">
                            <img src={hipo} alt="" />
                            <p>Hipoalergênico</p>
                        </a>
                    </Col>                 
                </Row>
            </Container>            
        </section>
    )
}

export default Categorias;

