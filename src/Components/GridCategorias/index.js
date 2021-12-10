import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { CartState } from '../../context/Context.js';
import './style.scss';


const GridCategorias = ({ categoryProd }) => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    // Para o head da página com o helmet
    const { category } = useParams();

    return (
        <>
            <Helmet>
                <title>Amar e Cuidar | {category}</title>
            </Helmet>
            <section id="produtos-categoria">
                <Container fluid className="grid-categorias">
                    <p className='p-title'>O autocuidado em todas as</p>
                    <h3>Categorias</h3>
                    <div className='div-btn'>
                        <Button as={Link} to={"/produtos/categorias/todas"} className="btn-categorias">Todas</Button>
                        <Button as={Link} to={"/produtos/categorias/skin care"} className="btn-categorias">Skin care</Button>
                        <Button as={Link} to={"/produtos/categorias/make up"} className="btn-categorias">Make up</Button>
                        <Button as={Link} to={"/produtos/categorias/hair care"} className="btn-categorias">Hair care</Button>
                        <Button as={Link} to={"/produtos/categorias/perfumes"} className="btn-categorias">Perfumes</Button>
                        <Button as={Link} to={"/produtos/categorias/veganos"} className="btn-categorias">Veganos</Button>
                    </div>

                    {/* CARDS DE PRODUTOS */}
                    <Row xs={1} md={2} xl={3} className="grid-cards">
                        {categoryProd.map((prod) => (
                            <Col key={prod.id}>
                                <Card className="cards-produtos">
                                    <Link to={"/produtos/" + prod.id}>
                                        <Card.Img variant="top" src={prod.image} />
                                    </Link>
                                    <Card.Body>
                                        <Card.Title>{prod.title}</Card.Title>
                                        <Card.Subtitle>R$ {prod.price}</Card.Subtitle>
                                        <Card.Text>{prod.shortdescription}</Card.Text>
                                        {/* BOTÃO ADD AO CARRINHO */}
                                        {cart.some(p => p.id === prod.id) ? (
                                            <button onClick={() => {
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod
                                                })
                                            }} className="btn-prod">Remover</button>
                                        ) : (<button onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: prod
                                            })
                                        }} className="btn-prod">Comprar</button>)
                                        }
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

export default GridCategorias;