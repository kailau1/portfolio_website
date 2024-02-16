import React from 'react';
import { Container, Toolbar } from "@mui/material";
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css'; 

export const NavBar = () => {
    return (
        <Container style={{ paddingTop: '4%' }}>
            <Toolbar style={{ justifyContent: 'center', borderBottom: '1px solid white' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Link to="/" className="navButton">HOME</Link>
                    <Link to="/portfolio_main" className="navButton">PORTFOLIO</Link>
                    <Link to="/shop" className="navButton">SHOP</Link>
                    <Link to="/contact" className="navButton">CONTACT</Link>
                </div>
            </Toolbar>
        </Container>
    );
};

export default NavBar;
