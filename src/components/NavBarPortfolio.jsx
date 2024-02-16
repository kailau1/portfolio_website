import React from 'react';
import { Container, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import '../assets/css/NavBar.css'

export const NavBarPortfolio = () => {
    return (
        <Container style={{paddingTop: '4%'}}>
                <Toolbar style={{ justifyContent: 'center'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Link to="/" className="navButton">HOME</Link>
                        <Link to="/portfolio_main" className="navButton">PORTFOLIO</Link>
                        <Link to="/shop" className="navButton">SHOP</Link>
                        <Link to="/contact" className="navButton">CONTACT</Link>
                    </div>
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
