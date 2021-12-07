import React from 'react'
import {Navbar, Nav, NavDropdown, Dropdown, Badge} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import {BrowserRouter as Router, Link } from "react-router-dom";
import {CartState} from '../../context/Context.js';
import RouteList from '../../routes';
import './style.scss';
import logo_img from '../../assets/img/logo.png'

import {AiFillDelete} from 'react-icons/ai';

const Header = () => {

        const {
            state: {cart},
            dispatch,
        } = CartState();

    const logo = <img id="logo-img" src={logo_img} alt="logomarca" />

    return (
        <>
        <Router>
            <header>
                <Navbar bg="linen" expand="lg" collapseOnSelect>
                    <Navbar.Brand>
                        {logo} {''}
                        <span>Cosméticos</span>
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>

                            <Nav.Link as={Link} to={"/home"}>HOME</Nav.Link>

                            <NavDropdown title="PRODUTOS">
                                <NavDropdown.Item as={Link} to={"/produtos"}>Todas as categorias</NavDropdown.Item>
                                <NavDropdown.Divider/>

                                {/* <NavDropdown.Item as={Link} to={"/produtos/categoria01"}>CATEGORIA01</NavDropdown.Item> */}
                                <NavDropdown.Item as={Link} to={"/produtos/skincare"}>Skin care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/makeup"}>Make up</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/haircare"}>Hair care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/perfume"}>Perfumes</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/vegano"}>Veganos</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link href="/home#anchorSobre">SOBRE</Nav.Link> {/* TESTE para evitar header cortar conteúdo */}

                            <Nav.Link as={Link} to={"/carrinho"}>CARRINHO</Nav.Link>

                            {/*Componente Carrinho*/}
                            <Dropdown alignRight>
                                <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px" />
                                <Badge>{cart.length}</Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{minWidth: 370}}>
                                    {cart.length > 0 ? (
                                        <>
                                            {cart.map((prod) => {
                                                    <span className="cartitem" key={prod.id}>
                                                        <img
                                                            src={prod.image}
                                                            className="cartItemImg"
                                                            alt={prod.title}
                                                        />

                                                        <div className="cartItemDetail">
                                                            <span>{prod.title}</span>
                                                            <span>{prod.price}</span>
                                                        </div>

                                                        <AiFillDelete
                                                            fontSize="20px"
                                                            style={{cursor: "pointer" }}

                                                            onClick={() => {
                                                                dispatch({
                                                                    type: "REMOVE_FROM_CART",
                                                                    payload: prod,
                                                                })
                                                        }}
                                                        
                                                        />
                                                    </span>
                                                })
                                            }
                                        </>
                                    ) : (
                                        <span style={{padding: 10}}>Cart is empty!</span>
                                    )}
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <RouteList />
        </Router>
        </>
    )
}


export default Header;