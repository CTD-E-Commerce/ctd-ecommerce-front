import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
import damares from '../../assets/damares.png';
import felipe from '../../assets/felipe.png';
import marcelo from '../../assets/marcelo.png';
import paula from '../../assets/paula.png';
import pedro from '../../assets/pedro.png';
import silvano from '../../assets/silvano.png';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';

const Sobre = () => {
    return (
        <>
            <section id="sobre">
                <Container fluid className="container-sobre">
                    <p>Conheça nossos</p>
                    <h3>Desenvolvedores</h3>
                    <Row className="row-sobre">
                        <Col>
                            <img className="img-sobre" src={damares} alt=""/>
                            <p>Dâmares Bortolucci</p>
                            <Row>
                                <Col>
                                    <a className="icones" href="https://github.com/damaresbortolucci" target="_blank" rel="norelerrer"><img src={github} alt="" /></a> 
                                    <a className="icones" href="https://www.linkedin.com/in/damaresbs/" target="_blank" rel="norelerrer"><img src={linkedin} alt="" /></a> 
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img className="img-sobre" src={felipe} alt=""/>
                            <p>Felipe Moreira</p>
                            <Row>
                                <Col>
                                    <a className="icones" href="https://github.com/moreirafelipe" target="_blank" rel="norelerrer"><img src={github} alt="" /></a> 
                                    <a className="icones" href="https://www.linkedin.com/in/felipen20/" target="_blank" rel="norelerrer"><img src={linkedin} alt="" /></a> 
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img className="img-sobre" src={marcelo} alt=""/>
                            <p>Marcelo Miyoshi</p>
                            <Row>
                                <Col>
                                    <a className="icones" href="https://github.com/Marcelomsz" target="_blank" rel="norelerrer"><img src={github} alt="" /></a> 
                                    <a className="icones" href="https://www.linkedin.com/in/marcelo-miyoshi-de-souza-30ba381a4/" target="_blanck" rel="norelerrer"><img src={linkedin} alt="" /></a> 
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img className="img-sobre" src={paula} alt=""/>
                            <p>Paula Augusto</p>
                            <Row>
                                <Col>
                                    <a className="icones" href="https://github.com/pcamposaugusto" target="_blank" rel="norelerrer"><img src={github} alt="" /></a> 
                                    <a className="icones" href="https://www.linkedin.com/in/pcamposaugusto/" target="_blank" rel="norelerrer"><img src={linkedin} alt="" /></a> 
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img className="img-sobre" src={pedro} alt=""/>
                            <p>Pedro Brito</p>
                            <Row>
                                <Col>
                                    <a className="icones" href="https://github.com/pedroisb" target="_blank" rel="norelerrer"><img src={github} alt="" /></a> 
                                    <a className="icones" href="https://www.linkedin.com/in/pedrobrito28/" target="_blanck" rel="norelerrer"><img src={linkedin} alt="" /></a> 
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <img className="img-sobre" src={silvano} alt=""/>
                            <p>Silvano Araujo</p>
                            <Row>
                                <Col>
                                    <a className="icones" href="https://github.com/Silvanoeng" target="_blank" rel="norelerrer"><img src={github} alt="" /></a> 
                                    <a className="icones" href="https://www.linkedin.com/in/silvano-araujo/" target="_blanck" rel="norelerrer"><img src={linkedin} alt="" /></a> 
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Sobre;