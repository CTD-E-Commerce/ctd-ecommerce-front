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
                                <NavDropdown.Item as={Link} to={"/produtos"}>Todos as categorias</NavDropdown.Item>
                                <NavDropdown.Divider/>

                                {/* <NavDropdown.Item as={Link} to={"/produtos/categoria01"}>CATEGORIA01</NavDropdown.Item> */}
                                <NavDropdown.Item as={Link} to={"/produtos/skincare"}>Skin care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/makeup"}>Make up</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/haircare"}>Hair care</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/perfume"}>Perfumes</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/produtos/vegano"}>Veganos</NavDropdown.Item>
                            </NavDropdown>

                            <Nav.Link as={Link} to={"/carrinho"}>CARRINHO</Nav.Link>
                            
                            <Nav.Link href="/home#anchorSobre">SOBRE</Nav.Link> {/* TESTE */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
            <RouteList />
        </Router>
    )
}


export default Header;