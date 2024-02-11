import React from 'react';
import { Container, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const NavBarPortfolio = () => {
    return (
        <Container style={{paddingTop: '4%'}}>
                <Toolbar style={{ justifyContent: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button component={Link} to="/" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline'  }}>Home</Button>
                        <Button component={Link} to="/portfolio_main" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline'  }}>Portfolio</Button>
                        <Button component={Link} to="/shop" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline' }}>Shop</Button>
                        <Button component={Link} to="/contact" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline' }}>Contact</Button>
                    </div>
                    <div></div> 
                </Toolbar>
                <Toolbar style={{ justifyContent: 'center', borderBottom: '1px solid white'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button  component={Link} to="/portfolio_events" style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'Approach_Mono'  }}>Corteiz Events</Button>
                        <Button  component={Link} to="/portfolio_people" style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'Approach_Mono'  }}>People</Button>
                        <Button  component={Link} to="/portfolio_protest" style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'Approach_Mono' }}>FREE PALESTINE</Button>
                    </div>
                    <div></div> 
            </Toolbar>
            </Container>
    );
};

export default NavBarPortfolio;
