import React from 'react';

import { Card, Container, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import star from '../../assets/img/a-star-is-born.png';

import "./style.scss";


const FichaSelecionado = () => {
    // const { repositoryOwner, repositoryName } = useParams();
    // const repoFullName = repositoryOwner + '/' + repositoryName;
    // const repository = useAxios(`repos/${repoFullName}`);
    // const repositoryLang = useAxios(`repos/${repoFullName}/languages`);
    // const repositoryContributors = useAxios(`repos/${repoFullName}/contributors`);

    const { id } = useParams();

    let selectedProduct = useAxios("/products/buscar/3"); //id pre-fixado para testes
    //console.log(selectedProduct);
    
    const pgTitle = selectedProduct.title+'';
    
    return (
        <>
            {/* ESPAÇO DO HELMET PARA DEFINIR HEAD>TITLE */}
            <Helmet>
                <title>Amar e Cuidar | {pgTitle}</title> {/* extrair propriedade título */}
            </Helmet>
            <Card className="ficha">
                <Container className="col-lg-4">
                    <Card.Img id="produto-img" variant="top" src={selectedProduct.image} />
                </Container>
                <Card.Body className="ficha-corpo col-lg-6">
                    <Card.Title className="ficha-titulo">{selectedProduct.title}</Card.Title>
                    <Card.Subtitle id="avaliacao"><img src={star} alt="Estrela de avaliação"/>{' '}{selectedProduct.avaliacao}</Card.Subtitle>
                    <Card.Subtitle>R$ {selectedProduct.price},00</Card.Subtitle>
                    <Card.Text>{selectedProduct.fulldescription}</Card.Text>
                    <Button variant="primary">ADD AO CARRINHO</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default FichaSelecionado;
