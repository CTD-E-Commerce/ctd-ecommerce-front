import React from 'react';

import { Card, Container} from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { CartState } from '../../context/Context.js';
import {CarouselSingle} from '../Galeria/Carousel/carouselsingle';
import star from '../../assets/img/a-star-is-born.png';
import "./style.scss";


const FichaSelecionado = ({prod}) => {


    const {
        state: {cart},
        dispatch,
    } = CartState();
        
    const pgTitle = prod.title+'';
    
    return (
        <>
            <Helmet>
                <title>Amar e Cuidar | {pgTitle}</title>
            </Helmet>
            <Card className="ficha">
                <Container className="col-lg-4">
                    <Card.Img id="produto-img" variant="top" src={prod.image} />
                </Container>
                <Card.Body className="ficha-corpo col-lg-6">
                    <Card.Title className="ficha-titulo">{prod.title}</Card.Title>
                    <Card.Subtitle id="avaliacao"><img src={star} alt="Estrela de avaliação"/>{' '} {prod.avaliacao}</Card.Subtitle>
                    <Card.Subtitle>R$ {prod.price}</Card.Subtitle>
                    <Card.Text>{prod.fulldescription}</Card.Text>

                    {cart.some(p => p.id === prod.id) ? (
                            <button onClick={() => {
                            dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: prod
                            })
                        }}>Remover</button>
                        ) : (<button onClick={() => {
                            dispatch({
                                type: "ADD_TO_CART",
                                payload: prod
                            })
                        }}>Comprar</button>)
                    }
                </Card.Body>
            </Card>

            {/* CAROUSEL */}
            <CarouselSingle />
        </>
    )
}

export default FichaSelecionado;