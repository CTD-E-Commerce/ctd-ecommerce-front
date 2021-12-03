import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Link } from "react-router-dom";
import RouteList from '../../routes';
import './style.scss';
import logo_img from '../../assets/img/logo_placeholder.png'


const Header = () => {

    const logo = <img id="logo-img" src={logo_img} alt="logomarca" />

    return (
        <header>
            <Router>
                    <Navbar bg="linen" expand="lg" collapseOnSelect>
                        
                        {/* brand = logomarca */}
                        <Navbar.Brand>
                            {/* ESCOLHER IMG PARA LOGO E IMPORTAR */}
                            {logo} {''}
                            LOGO-TEXT
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
                                
                                <Nav.Link href="#" target="_blank">SOBRE</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>             
                    </Navbar>
                    <RouteList />
                </Router>
        </header>
    )
}

export default Header;