import React from 'react';
import "./style.scss";
import imgProduto from "../../assets/img/produto-placeholder.png"
import { Card, Container, Row, Col, Button } from 'react-bootstrap';

const FichaSelecionado = () => {
    return (
        <>
            <Card className="ficha">
                <Card.Img className="col-md-4" variant="top" src={imgProduto} />
                <Card.Body className="ficha-corpo col-md-8">
                    <Card.Title className="ficha-titulo">PRODUTO TÍTULO</Card.Title>
                    <Card.Subtitle>AVALIAÇÃO</Card.Subtitle>
                    <Card.Subtitle>PREÇO</Card.Subtitle>
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
