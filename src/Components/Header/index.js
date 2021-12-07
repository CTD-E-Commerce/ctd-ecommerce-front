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
                        Cosméticos
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>

                            <Nav.Link as={Link} to={"/home"}>HOME</Nav.Link>

                            <NavDropdown title="PRODUTOS">
                                <NavDropdown.Item as={Link} to={"/produtos"}>TODOS</NavDropdown.Item>
                                <NavDropdown.Divider/>

                                {/* <NavDropdown.Item as={Link} to={"/produtos/categoria01"}>CATEGORIA01</NavDropdown.Item> */}
                                <NavDropdown.Item href="#produtos/categoria01" target="_blank">Skin care</NavDropdown.Item>
                                <NavDropdown.Item href="#produtos/categoria02" target="_blank">Make up</NavDropdown.Item>
                                <NavDropdown.Item href="#produtos/categoria03" target="_blank">Hair care</NavDropdown.Item>
                                <NavDropdown.Item href="#produtos/categoria04" target="_blank">Perfume</NavDropdown.Item>
                                <NavDropdown.Item href="#produtos/categoria05" target="_blank">Hipoalergênico</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to={"/carrinho"}>CARRINHO</Nav.Link>
                            
                            <Nav.Link href="/home#sobre">SOBRE</Nav.Link>

                            {/*Componente Carrinho*/}
                            <Dropdown>
                                <Dropdown.Toggle variant="success">
                                <FaShoppingCart color="white" fontSize="25px" />
                                    <Badge>{cart.length}</Badge>
                                </Dropdown.Toggle>

                                <Dropdown.Menu style={{minWidth: 370}}>

                                {cart.length > 0 ? (
                                    <>
                                        {
                                            cart.map(prod => {
                                                <>
                                                <span className="cartitem" key={prod.id} />
                                                <img
                                                    src={prod.image}
                                                    className="cartItemImg"
                                                    alt={prod.title}
                                                ></img>

                                                <div className="cartItemImg">
                                                    <span>{prod.title}</span>
                                                    <span>{prod.price[0]}</span>
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
                                            </>
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