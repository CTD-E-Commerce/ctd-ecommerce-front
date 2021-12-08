import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import { Container, Form, Row, Col, Card } from 'react-bootstrap';
import { CartState } from '../../context/Context.js';
import './style.scss';


const GridCategorias = ({categoryProd}) => {

    const {
        state: {cart},
        dispatch,
    } = CartState();

    // Para o head da página com o helmet
    const { category } = useParams();
    const pgTitle = category;

    return (
        <>
            <Helmet>
                <title>Amar e Cuidar | {pgTitle}</title>
            </Helmet>
            <section id="produtos-categoria">
                <Container fluid>
                    {/* SELETOR CATEGORIAS */}
                    <Form.Select aria-label="Default select example">
                        <option>Categorias</option>
                        <option value="1">Todas as categorias</option>
                        <option value="2">Skin care</option>
                        <option value="3">Make up</option>
                        <option value="4">Hair care</option>
                        <option value="5">Perfumes</option>
                        <option value="6">Veganos</option>
                    </Form.Select>
                    
                {/* <Container fluid className="radios"> */}
                    {/* RADIOS COM AS CATEGORIAS */}
                    {/* <Form>
                        <h4>Categorias</h4>
                        <Form.Check as={Link} to={"/produtos/categorias/todas"} type="radio" aria-label="radio 1" name="categorias" label="Todas as categorias" />
                        <Form.Check as={Link} to={"/produtos/categorias/skin care"} type="radio" aria-label="radio 1" name="categorias" label="Skin care" />
                        <Form.Check as={Link} to={"/produtos/categorias/make up"} type="radio" aria-label="radio 1" name="categorias" label="Make up" />
                        <Form.Check as={Link} to={"/produtos/categorias/hair care"}  type="radio" aria-label="radio 1" name="categorias" label="Hair care" />
                        <Form.Check as={Link} to={"/produtos/categorias/perfumes"}  type="radio" aria-label="radio 1" name="categorias" label="Perfumes" />
                        <Form.Check as={Link} to={"/produtos/categorias/veganos"} type="radio" aria-label="radio 1" name="categorias" label="Veganos" />
                    </Form> */}
                    {/* CARDS DE PRODUTOS */}
                    <Row xs={1} md={2} xl={3} className="grid-cards">
                        {categoryProd.map((prod) => (
                            <Col>
                            <Card className="cards-produtos" key={prod.id}>
                                <Link to={"/produtos/"+prod.id}>
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
                                        }} className="btn-prod">Remover do carrinho</button>
                                        ) : (<button onClick={() => {
                                            dispatch({
                                                type: "ADD_TO_CART",
                                                payload: prod
                                            })
                                        }} className="btn-prod">Add ao carrinho</button>)
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