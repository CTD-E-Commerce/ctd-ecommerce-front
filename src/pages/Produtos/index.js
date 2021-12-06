import React from 'react'
import './style.scss';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Banner } from '../../Components/Banner';


const Produtos = () => {



    return (
        <>           
            <Banner />
            <section id="produtos-categoria">
                <Container fluid className="radios">
                    {/* RADIOS COM AS CATEGORIAS */}
                    <Form>
                        <h4>Categorias</h4>
                        {['radio'].map((type) => (
                            <div key={`default-${type}`} className="mb-3 items-radios">
                                <Form.Check
                                    label="Skin care"
                                    name="categorias"
                                    type={type}
                                    id={`default ${type}`}
                                />
                                <Form.Check
                                    label="Make up"
                                    name="categorias"
                                    type={type}
                                    id={`default ${type}`}
                                />
                                <Form.Check
                                    label="Hair care"
                                    name="categorias"
                                    type={type}
                                    id={`default ${type}`}
                                />
                                <Form.Check
                                    label="Perfume"
                                    name="categorias"
                                    type={type}
                                    id={`default ${type}`}
                                />
                                <Form.Check
                                    label="Hipoalergênico"
                                    name="categorias"
                                    type={type}
                                    id={`default ${type}`}
                                />
                            </div>
                        ))}
                    {/* CARDS DE PRODUTOS */}
                    </Form>
                    <Row xs={1} md={2} xl={3} className="g-9">
                        {Array.from({ length: 9 }).map((_, idx) => (
                            <Col>
                            <Card className="cards-produtos">
                                <Card.Img variant="top" src="holder.js/219px292" />
                                <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Button type="submit">Add ao carrinho</Button>{' '}
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>  
        </>
    )
}

export default Produtos;