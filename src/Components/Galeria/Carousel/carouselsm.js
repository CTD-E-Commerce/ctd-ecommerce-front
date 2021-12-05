import React from 'react';
import './style.scss';
import { Carousel, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './item';
/* import {Produtos} from './produtos'; */


export const Carouselsm = (props) => {

    //Retorna Carousel Items com dados do array retornado da api service
    return (
        <>
            {/* CARROSSEL MOBILE 1 */}

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
