import React from 'react';
import './style.scss';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './item';


export const Carrossel = () => {

    /* ARRAY PARA TESTAR A PASSAGEM DE PARAMETROS PARA OS CARDS */
    const produtos =[
        {
            id: 1,
            produto: "Shampoo",
            descricao: "Shampoo descrição",
            preco: "R$ 20,00"
        },
        {
            id: 2,
            produto: "Perfume",
            descricao: "Perfume descrição",
            preco: "R$ 200,00"
        },
        {
            id: 3,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 30,00"
        }
    ]

    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <div className="container-card">
                        {produtos.map(({ id, produto, descricao, preco }) => {
                            return (
                                <Item id={id} produto={produto} descricao={descricao} preco={preco} />
                            )
                        })}
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="container-card">
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL 2 */}

            <Carousel>
                <Carousel.Item>
                    <div className="container-card">
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </Carousel.Item>

                <Carousel.Item>
                    <div className="container-card">
                        <Item />
                        <Item />
                        <Item />
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
