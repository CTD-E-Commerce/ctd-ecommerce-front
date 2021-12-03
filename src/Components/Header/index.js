import React from 'react'
import {Navbar, Nav, NavDropdown} from 'react-bootstrap';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './style.scss';
import logo_img from '../../assets/img/logo_placeholder.png'
// import 'bootstrap/dist/css/bootstrap.css'


const Header = () => {

    const logo = <img id="logo-img" src={logo_img} alt="logomarca" />


    return (
        <header>
            <Router>
                    {/* lembrar que fixed demanda uso de margin-top de elementos seguintes, ao passo que sticky, por sua vez, não é suportado por todos os browsers */}
                    <Navbar bg="myGreen" variant="dark" sticky="top" expand="lg" collapseOnSelect>
                        
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
                                    <NavDropdown.Item href="#produtos/" target="_blank">TODOS</NavDropdown.Item>
                                    <NavDropdown.Divider/>

                                    {/* <NavDropdown.Item as={Link} to={"/produtos/categoria01"}>CATEGORIA01</NavDropdown.Item> */}
                                    <NavDropdown.Item href="#produtos/categoria01" target="_blank">CATEGORIA01</NavDropdown.Item>
                                    <NavDropdown.Item href="#produtos/categoria02" target="_blank">CATEGORIA02</NavDropdown.Item>
                                    <NavDropdown.Item href="#produtos/categoria03" target="_blank">CATEGORIA03</NavDropdown.Item>
                                    <NavDropdown.Item href="#produtos/categoria04" target="_blank">CATEGORIA04</NavDropdown.Item>
                                    <NavDropdown.Item href="#produtos/categoria05" target="_blank">CATEGORIA05</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link href="#" target="_blank">CARRINHO</Nav.Link>
                                
                                <Nav.Link href="#" target="_blank">SOBRE</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>             
                    </Navbar>
                    {/* <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>

                        COMO FUNCIONARIAM A PÁGINA DE PRODUTOS E SEUS LINKS COM FILTRO EMBUTIDO?
                        <Route path="/produtos">
                            <Produtos />
                        </Route>

                        <Route path="/sobre">
                            <Sobre />
                        </Route>
                        <Route path="/carrinho">
                            <Carrinho />
                        </Route>
                    </Switch> */}
                </Router>
        </header>
    )
}

export default Header;