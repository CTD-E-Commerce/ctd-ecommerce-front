import React from 'react';
import './style.scss';
import { Container, Row, Col, Button, Form} from 'react-bootstrap';

const Carrinho = () => {

    return (
        <>
            <Container className="container-carrinho">
                <Row>
                    <Col xl={8}>
                        <Row className="card-carrinho row align-items-center">
                            <Col>fd</Col>
                            <Col>fd</Col>
                            <Col>fd</Col>
                            <Col>
                                <Form.Select aria-label="Default select example" >
                                    <option>Quantidade</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col>fd</Col>
                            <Col>fd</Col>
                        </Row>
                    </Col>
                    <Col  xl={4}>
                        <div className="carrinho shadow p-3 mb-5">
                            <Button>Fechar Pedido</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Carrinho;
