import React from 'react';
import './style.scss';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Item } from './item';


export const Carrossel = (props) => {

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
            preco: "R$ 30,00"
        },
        {
            id: 3,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 40,00"
        },
        {
            id: 4,
            produto: "Shampoo",
            descricao: "Shampoo descrição",
            preco: "R$ 50,00"
        },
        {
            id: 5,
            produto: "Perfume",
            descricao: "Perfume descrição",
            preco: "R$ 60,00"
        },
        {
            id: 6,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 70,00"
        },
        {
            id: 7,
            produto: "Shampoo",
            descricao: "Shampoo descrição",
            preco: "R$ 80,00"
        },
        {
            id: 8,
            produto: "Perfume",
            descricao: "Perfume descrição",
            preco: "R$ 90,00"
        },
        {
            id: 9,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 100,00"
        },
        {
            id: 10,
            produto: "Shampoo",
            descricao: "Shampoo descrição",
            preco: "R$ 110,00"
        },
        {
            id: 11,
            produto: "Perfume",
            descricao: "Perfume descrição",
            preco: "R$ 120,00"
        },
        {
            id: 12,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 130,00"
        },
        {
            id: 13,
            produto: "Shampoo",
            descricao: "Shampoo descrição",
            preco: "R$ 140,00"
        },
        {
            id: 14,
            produto: "Perfume",
            descricao: "Perfume descrição",
            preco: "R$ 150,00"
        },
        {
            id: 15,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 160,00"
        },
        {
            id: 16,
            produto: "Shampoo",
            descricao: "Shampoo descrição",
            preco: "R$ 170,00"
        },
        {
            id: 17,
            produto: "Perfume",
            descricao: "Perfume descrição",
            preco: "R$ 180,00"
        },
        {
            id: 18,
            produto: "Creme para o corpo",
            descricao: "creme descriçao",
            preco: "R$ 190,00"
        }
    ]
    var produtos1=[];
    var produtos2=[];
    var produtos3=[];
    var produtos4=[];
    
    function primeirosCards() {
        for (var i=0; i<6; i++){

            if(i<3){
                produtos1.push(produtos[i])
            }
            if(i>2 && i<6){
                produtos2.push(produtos[i])
            }
        }
    }
    

    function sortearCards() {
        for (var i=0; i<6; i++){
            var s = getRandomArbitrary(produtos.length, 1);
            if(i<3){
                produtos3.push(produtos[s])
            }
            if(i>2 && i<6){
                produtos4.push(produtos[s])
            }
        }
        
    }
    
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    primeirosCards();

    sortearCards();

    
/*     Object.values(props.productsArray).map((product, index) => {
        console.log(product)
    }) */
    
    return (
        <div>
            <Carousel >
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 3){
                                return (
                                    <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                           if(index < 3){
                            return (
                                <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>

            {/* CARROSSEL 2 */}

            <Carousel >
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                            if(index < 3){
                                return (
                                 <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
                <Carousel.Item >
                    <div className="container-card">
                        {Object.values(props.productsArray).map(({ id, title, description, price }, index) => {
                        if(index < 3){
                            return (
                                <Item id={id} produto={title} descricao={description} preco={price} />
                            )}
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
