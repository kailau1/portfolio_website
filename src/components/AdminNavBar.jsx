import React from 'react';
import { Container, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <Container style={{paddingTop: '4%'}}>
                <Toolbar style={{ justifyContent: 'center', borderBottom: '1px solid white' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button component={Link} to="/htrapzyweaintdun/update_portfolio" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline'  }}>Add Portfolio images</Button>
                        <Button component={Link} to="/htrapzyweaintdun/add_product" style={{ color: 'white', fontSize: '1.2rem', fontFamily: 'Approach_Mono', textDecoration: 'underline'  }}>Add a new product</Button>
                    </div>
                    <div></div> 
                </Toolbar>
            </Container>
    );
};

export default NavBar;
