import React from 'react';
import './style.scss';
import { Container, Row, Col } from 'react-bootstrap';
import map from '../../assets/map.png';
import email from '../../assets/email.png';
import phone from '../../assets/phone.png';
import visa from '../../assets/visa.svg';
import master from '../../assets/mastercard.svg';
import paypal from '../../assets/paypal.svg';


const Footer = () => {

    const generateDateString = () => {
        const creationYear = "2021";
        const currentYear = `${new Date().getFullYear()}`;
        return creationYear === currentYear ? currentYear : `${creationYear} - ${currentYear}`;
    }

    return (
        <Container fluid className="footer">
            <Row> 
                <Col sm className="contato">
                    <h3>Contato</h3>
                    <p><img src={map} alt="" />Rua Travessa do meio, 99. São Paulo - SP</p>
                    <p><img src={email} alt="" />amarecuidar@email.com</p>
                    <p><img src={phone} alt="" />+55 (11) 99922 0033</p>
                </Col>
            </Row>
            <Row>
                <Col sm className="footer-central">
                    <div className="links">
                        <a href="/home">HOME</a>
                        <a href="/produtos">PRODUTOS</a>
                        <a href="/home#sobre">SOBRE</a>
                        <a href="/carrinho">CARRINHO</a>
                    </div>
                    <div className="copy">
                        <p>&copy;Copyright {generateDateString()}. All Right Reserved.</p> 
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm>
                    <div className="cartoes">
                        <img src={visa} alt="" />
                        <img src={master} alt="" />
                        <img src={paypal} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;