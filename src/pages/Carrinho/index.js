import React, { useState, useEffect } from 'react';
import './style.scss';
import { Container, Row, Col, Form, Table, Button } from 'react-bootstrap';
import { ImBin } from 'react-icons/im';
import { CartState } from '../../context/Context.js';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { CarouselSingle } from '../../Components/Galeria/Carousel/carouselsingle';


import ScrollToTop from '../../Components/ScrollToTop';


const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

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
            <ScrollToTop />
            <Container className="container-carrinho">
                <Row className="col-gap">
                    <Col lg={7} >
                        {/* row com cada card de produto */}
                        {cart.length > 0 ? (
                            <>
                                {cart.map((prod) => (
                                    <Row className="card-carrinho row align-items-center" key={prod.id}>
                                        <Col className="col-align-items-center" sm={2} xs={12}>
                                            <img
                                                src={prod.image}
                                                className="img-cart"
                                                alt={prod.title}
                                            />
                                        </Col>
                                        <Col className="col-align-items-center" sm={3} xs={12}>
                                            <span className="subtitulo-itens">Produto</span>
                                            <span>{prod.title}</span>
                                        </Col>
                                        <Col className="col-align-items-center" sm={2} xs={12}>
                                            <span className="subtitulo-itens">Valor</span>
                                            <span>{(prod.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                        </Col>
                                        <Col className="col-align-items-center" sm={2} xs={12}>
                                            <span className="subtitulo-itens">Quantidade</span>
                                            <Form.Select aria-label="Default select example"
                                                style={{ width: "60px" }}
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
                                        <Col className="col-align-items-center" sm={2} xs={12}>
                                            <span className="subtitulo-itens">Total</span>
                                            <span>{(prod.price * prod.qty).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                        </Col>
                                        <Col className="col-align-items-center" sm={1} xs={12}>
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
                                                <ImBin style={{ fontSize: "18px" }} />
                                            </Button>
                                        </Col>
                                    </Row>
                                
                                ))}
                            </>
                        ) : null}

                    </Col> 

                    {/* CARD DO RESUMO E FECHAMENTO DO PEDIDO -> EXIBIDO APENAS QUANDO CARRINHO ESTÁ CHEIO*/}
                    {cart.length > 0 ? (
                        <>
                            <Col lg={4} >
                                <div className="carrinho p-3 mb-5">
                                    <h1>Resumo do Pedido</h1>
                                    <Table responsive="sm" size="sm">
                                        <tbody>
                                            <tr>
                                                <td colSpan="2">Subtotal</td>
                                                <td className="col-align-items-end">{parseFloat(total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                            </tr>
                                            <tr>
                                                <td colSpan="2">Frete</td>
                                                <td className="col-align-items-end">{(total * 0.05).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td> {/* Calculo do frete ficticio -> 5% do total */}
                                            </tr>
                                            <tr>
                                                <td colSpan="2" style={{ fontWeight: "bold" }}>Total</td>
                                                <td className="col-align-items-end" style={{ fontWeight: "bold" }}>{(total + (total * 0.05)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Link to={"/"}><button className="cart-btn-voltar">Continuar comprando</button></Link>
                                    <button className="cart-btn" onClick={() =>
                                        swalWithBootstrapButtons.fire({
                                            title: 'Confirma o fechamendo do pedido?',
                                            html: `<p>Este pedido não poderá ser cancelado após efetivação!</p>`,
                                            icon: 'warning',
                                            showCancelButton: true,
                                            confirmButtonText: 'Sim, confirmo!',
                                            cancelButtonText: 'Não, cancele!',
                                            reverseButtons: false
                                        }).then((result) => {
                                            if (result.isConfirmed) {
                                                dispatch({
                                                    type: "RESET_CART"
                                                });
                                                swalWithBootstrapButtons.fire(
                                                    'Pedido confirmado!',
                                                    `<p>Avisaremos você quando ele estiver em rota de envio :)</p>`,
                                                    'success'
                                                )
                                            } else if (
                                                /* Read more about handling dismissals below */
                                                result.dismiss === Swal.DismissReason.cancel
                                            ) {
                                                swalWithBootstrapButtons.fire(
                                                    'Pedido cancelado!',
                                                    `<p>Aproveite para revisar seu pedido ou conferir outros produtos da nossa loja :)</p>`,
                                                    'error'
                                                )
                                            }
                                        })

                                    }>Fechar Pedido</button>
                                    
                                </div>
                            </Col>
                        </>
                    ) : (

                        /* Aviso de carrinho vazio */
                        <Col md={{span:8, offset: 2}} sm={12} >
                            <div className="carrinho-vazio">
                                <span>
                                    Seu carrinho está vazio!
                                </span>
                                <span>
                                    Aproveite as ofertas da nossa loja!
                                </span>
                                <Link to="/home">
                                    <button>Voltar para Home</button>
                                </Link>
                            </div>
                        </Col>
                    )
                    }
                </Row>
            </Container>
            <CarouselSingle />
        </>
    )
}

export default Carrinho;
