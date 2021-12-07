import React from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import imgProduto from "../../assets/img/produto-placeholder.png"
import star from '../../assets/img/a-star-is-born.png';
import "./style.scss";


const FichaSelecionado = () => {
    return (
        <>

        {/* ESPAÇO DO HELMET PARA DEFINIR HEAD>TITLE */}

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
        </>
    )
}

export default FichaSelecionado;
