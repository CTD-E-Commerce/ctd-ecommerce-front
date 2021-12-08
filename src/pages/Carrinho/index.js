import React, {useState, useEffect} from 'react';
import './style.scss';
import { Container, Row, Col, Form, Table, Button} from 'react-bootstrap';
import { ImBin} from 'react-icons/im';
import { CartState } from '../../context/Context.js';


const Carrinho = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();
  
    const [total, setTotal] = useState();

    useEffect(() => {
        setTotal(
        cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
        );
    }, [cart]);

    return (
        <>
            <Container className="container-carrinho">
                <Row>
                    <Col xl={8}>
                        {/* row com cada card de produto */}

                        {cart.map((prod) => (
                            <Row className="card-carrinho row align-items-center" key={prod.id}>
                                <Col className="col-align-items-center">
                                <img
                                    src={prod.image}
                                    className="img-cart"
                                    alt={prod.title}
                                />
                                </Col>
                                <Col className="col-align-items-center">
                                    <span>Prduto</span>
                                    <span>{prod.title}</span>
                                </Col>
                                <Col className="col-align-items-center">
                                    <span>Valor</span>
                                    <span>{(prod.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span> 
                                </Col>
                                <Col className="col-align-items-center">
                                    <span>Quantidade</span>
                                    <Form.Select aria-label="Default select example"
                                    
                                        value={prod.qty}
                                        onChange={(e) =>
                                        dispatch({
                                            type: "CHANGE_CART_QTY",
                                            payload: {
                                            id: prod.id,
                                            qty: e.target.value,
                                            },
                                        })
                                        }
                                     >
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Form.Select>
                                </Col>
                                <Col className="col-align-items-center">
                                    <span>Total</span> 
                                    <span>{(prod.price * prod.qty).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                                </Col>
                                <Col className="col-align-items-center">
                                <Button
                                    type="button"
                                    variant="light"
                                    onClick={() =>
                                    dispatch({
                                        type: "REMOVE_FROM_CART",
                                        payload: prod,
                                    })
                                    }
                                >
                                    <ImBin />
                                </Button>
                                </Col>
                            </Row>
                        ))}
                    </Col>

                    {/* CARD DO RESUMO E FECHAMENTO DO PEDIDO */}
                    <Col xl={4} >
                        <div className="carrinho p-3 mb-5">
                            <h1>Resumo do Pedido</h1>
                            <Table responsive="sm" size="sm">
                                <tbody>
                                  <tr>
                                    <td colSpan="2">Subtotal</td>
                                    <td>{parseFloat(total).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2">Frete</td>
                                    <td>{(total * 0.05).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td> {/* Calculo do frete ficticio -> 5% do total */}
                                  </tr>
                                  <tr>
                                    <td colSpan="2" style={{fontWeight:"bold"}}>Total</td>
                                    <td style={{fontWeight:"bold"}}>{(total + (total * 0.05)).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</td>
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
