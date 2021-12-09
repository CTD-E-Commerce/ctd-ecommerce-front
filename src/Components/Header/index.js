import React from 'react'
import { Navbar, Nav, NavDropdown, Dropdown, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { CartState } from '../../context/Context.js';
import RouteList from '../../routes';
import './style.scss';
import logo_img from '../../assets/img/logo.png'

import { AiFillDelete } from 'react-icons/ai';

const Header = () => {

    const {
        state: { cart },
        dispatch,
    } = CartState();

    const logo = <img id="logo-img" src={logo_img} alt="logomarca" />

    return (
        <>
            <header>
                <Navbar bg="linen" expand="lg" collapseOnSelect>
                    <Navbar.Brand>
                        {logo} {''}
                        <span>Cosméticos</span>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                        <Nav>
                            <Nav.Link as={Link} to={"/home"}>HOME</Nav.Link>
                            <NavDropdown title="PRODUTOS">
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/todas"}>Todas as categorias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/skin care"}>Skin care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/make up"}>Make up</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/hair care"}>Hair care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/perfumes"}>Perfumes</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/categorias/veganos"}>Veganos</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={HashLink} to={"/home#anchorSobre"}>SOBRE</Nav.Link>
                            <Nav.Link as={Link} to={"/carrinho"}>CARRINHO</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    {/*Componente Carrinho*/}
                    <Dropdown id="cart" align="end">
                        <Dropdown.Toggle variant="white">
                            <FaShoppingCart color="black" fontSize="35px" /> {/* cor do carrinho */}
                            <Badge bg="black" style={{ fontSize: 12 }}>{cart.length}</Badge>
                        </Dropdown.Toggle>

                        {/* Lista de itens do carrinho */}
                        <Dropdown.Menu id="subcart" style={{ minWidth: 320 }}>

                            {/* Verifica estado do carrinho e exibe lista de produtos ou mensagem de vazio */}
                            {cart.length > 0 ? (
                                <>
                                    {cart.map((prod) => (
                                        <span className="cartitem" key={prod.id}>
                                            <img
                                                src={prod.image}
                                                className="cartItemImg"
                                                alt={prod.title}
                                            />
                                            <div className="cartItemDetail">
                                                <span>{prod.title}</span>
                                                <span> {parseFloat(prod.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
                                            </div>
                                            {/* Icone lixeira do carrinho */}
                                            <AiFillDelete
                                                fontSize="20px"
                                                style={{ cursor: "pointer" }}

                                                onClick={() => {
                                                    dispatch({
                                                        type: "REMOVE_FROM_CART",
                                                        payload: prod,
                                                    })
                                                }}
                                            />
                                        </span>
                                    ))}
                                    <Link to="/carrinho">
                                        <Button style={{ width: "95%", margin: "0 10px", fontSize: "15px", backgroundColor: "#986D5A", border: "none" }}>
                                            Ir para o carrinho
                                        </Button>
                                    </Link>
                                </>
                            ) : (
                                <span style={{ padding: 20, margin: 15, color: 'white' }}>Carrinho vazio!</span>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar>
            </header>
            <RouteList />
        </>
    )
}


export default Header;