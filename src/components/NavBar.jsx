import React from 'react';
import { Container, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Container style={{paddingTop: '4%'}}>
                <Toolbar style={{ justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button component={Link} to="/" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline'  }}>Home</Button>
                        <Button component={Link} to="/portfolio" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline'  }}>Portfolio</Button>
                        <Button component={Link} to="/shop" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline' }}>Shop</Button>
                        <Button component={Link} to="/contact" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline' }}>Contact</Button>
                    </div>
                    <div></div> 
                </Toolbar>
            </Container>
    );
};

export default NavBar;
