import React from 'react';
import './style.scss';
import { Container, Row, Col, Form, Table} from 'react-bootstrap';
import { ImBin} from 'react-icons/im';


const Carrinho = () => {

    return (
        <>
            <Container className="container-carrinho">
                <Row>
                    <Col xl={8}>
                        <Row className="card-carrinho row align-items-center">
                            <Col className="col-align-items-center">
                            <img
                                src="https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/condicionador-kerastase.jpg"
                                className="img-cart"
                                alt="#"
                            />
                            </Col>
                            <Col className="col-align-items-center"><span>Creme Elixir</span></Col>
                            <Col>R$ 159,00</Col>
                            <Col className="col-align-items-center">
                                <Form.Select aria-label="Default select example" >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Form.Select>
                            </Col>
                            <Col className="col-align-items-center">R$ 159,00</Col>
                            <Col className="col-align-items-center"><ImBin /></Col>
                        </Row>
                        <Row className="card-carrinho row align-items-center">
                            <Col className="col-align-items-center">
                            <img
                                src="https://amarecuidar.s3.sa-east-1.amazonaws.com/hair_care/condicionador-kerastase.jpg"
                                className="img-cart"
                                alt="imagem do produto"
                            />
                            </Col>
                            <Col className="col-align-items-center"><span>Creme Elixir</span></Col>
                            <Col>R$ 159,00</Col>
                            <Col className="col-align-items-center">
                                <Form.Select aria-label="Default select example" >
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="3">4</option>
                                    <option value="3">5</option>
                                </Form.Select>
                            </Col>
                            <Col className="col-align-items-center">R$ 159,00</Col>
                            <Col className="col-align-items-center"><ImBin /></Col>
                        </Row>
                    </Col>
                    <Col xl={4} >
                        <div className="carrinho shadow p-3 mb-5">
                            <h1>Resumo do Pedido</h1>
                                <Table responsive="sm" size="sm">
                                    <tbody>
                                      <tr>
                                        <td colSpan="2">Subtotal</td>
                                        <td>R$ </td>
                                      </tr>
                                      <tr>
                                        <td colSpan="2">Frete</td>
                                        <td>R$ </td>
                                      </tr>
                                      <tr>
                                        <td colSpan="2">Total</td>
                                        <td>R$ </td>
                                      </tr>
                                    </tbody>
                                </Table>
                                <button className="cart-btn">Fechar Pedido</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Carrinho;
