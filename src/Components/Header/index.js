import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Link } from "react-router-dom";
import RouteList from '../../routes';
import './style.scss';
import logo_img from '../../assets/img/logo.png'


const Header = () => {

    const logo = <img id="logo-img" src={logo_img} alt="logomarca" />

    return (
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
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <RouteList />
        </Router>
    )
}


export default Header;