import React from 'react';
import './style.scss';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './item';
/* import {Produtos} from './produtos'; */


export const Carouselsm = (props) => {

    return (
        <>
            {/* CARROSSEL MOBILE 1 */}
            <Col sm={{ span: 6, offset: 3 }} className="carousel-sm cabecalho"><h1>Novidades</h1></Col>
            <Carousel className="carousel-sm">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>


            {/* CARROSSEL MOBILE 2 */}
            <Col sm={{ span: 6, offset:3 }} className="carousel-sm cabecalho"><h1>Mais vendidos</h1></Col>
            <Carousel className="carousel-sm">
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                    {Object.values(props.productsArray).map(({ id, title, description, price, image }, index) => {
                            if(index < 1){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} imagem={image} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
