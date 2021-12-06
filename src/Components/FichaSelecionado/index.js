import React from 'react';
import "./style.scss";
import imgProduto from "../../assets/img/produto-placeholder.png"
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import star from '../../assets/img/a-star-is-born.png';

const FichaSelecionado = () => {
    return (
        <>
            <Card className="ficha">
                <Container className="col-lg-4">
                    <Card.Img id="produto-img" variant="top" src={imgProduto} />
                </Container>
                <Card.Body className="ficha-corpo col-lg-6">
                    <Card.Title className="ficha-titulo">PRODUTO TÍTULO</Card.Title>
                    <Card.Subtitle id="avaliacao"><img src={star} alt="Estrela de avaliação"/>{' '}8,5</Card.Subtitle>
                    <Card.Subtitle>R$ 58,99</Card.Subtitle>
                    <Card.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet rerum dolor esse quidem totam ad quas repellat, et possimus! Itaque eius omnis expedita? Recusandae delectus asperiores error est nisi</Card.Text>
                    <Button variant="primary">ADD AO CARRINHO</Button>
                </Card.Body>
            </Card>


        {/* <Container>
                <Row>
                    <Col>
                        <img id="detalhes-img" src={imgProduto} alt="" />
                    </Col>

                    <Col>
                        <div className="selecionado-resumo">
                            <h1>TÍTULO PRODUTO</h1>
                            <h3>AVALIAÇÃO</h3>
                            <h3>PREÇO</h3>
                            <Button type="submit">Adicionar ao carrinho</Button>{' '}
                        </div>
                    </Col>
                </Row>

                <Row>
                    <h3>CATEGORIA PRODUTO</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae amet rerum dolor esse quidem totam ad quas repellat, et possimus! Itaque eius omnis expedita? Recusandae delectus asperiores error est nisi!</p>
                </Row>
        </Container> */}
        </>
    )
}

export default FichaSelecionado;
