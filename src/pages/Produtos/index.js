import React from 'react'
import './style.scss';
import { Container, Form, Row, Col, Card, Button } from 'react-bootstrap';
import { Banner } from '../../Components/Banner';
import { CartState } from '../../context/Context.js';


const Produtos = () => {


    return (
        <>          
            <Banner />
            <section id="produtos-categoria">
                <Container fluid className="radios">
                    {/* RADIOS COM AS CATEGORIAS */}
                    <Form>
                        <h4>Categorias</h4>
                        <Form.Check type="radio" aria-label="radio 1" name="categorias" label="Todas as categorias" />
                        <Form.Check type="radio" aria-label="radio 1" name="categorias" label="Skin care" />
                        <Form.Check type="radio" aria-label="radio 1" name="categorias" label="Make up" />
                        <Form.Check type="radio" aria-label="radio 1" name="categorias" label="Hair care" />
                        <Form.Check type="radio" aria-label="radio 1" name="categorias" label="Perfumes" />
                        <Form.Check type="radio" aria-label="radio 1" name="categorias" label="Veganos" />
                    </Form>
                    {/* CARDS DE PRODUTOS */}
                    <Row xs={1} md={2} xl={3} className="g-6">
                        {Array.from({ length: 6 }).map((_, idx) => (
                            <Col>
                            <Card className="cards-produtos">
                                <Card.Img variant="top" src={""} />
                                <Card.Body>
                                <Card.Title>{"Title"}</Card.Title>
                                <Card.Text>R$ {"Price"},00</Card.Text>
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