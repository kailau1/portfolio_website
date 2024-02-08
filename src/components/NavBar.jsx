import React from 'react';
import { AppBar, Toolbar, Button } from "@mui/material";
import { Link } from 'react-router-dom';

export const NavBar = () => {
    return (
        <AppBar className="AppBar" position='static'>
            <Toolbar style={{ justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img className="logo" src="/images/wad_black.png" href="" aria-label="logo" alt="logo" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button component={Link} to="/" style={{ color: 'black', fontSize: '1.2rem' }}>Home</Button>
                    <Button component={Link} to="/" style={{ color: 'black', fontSize: '1.2rem' }}>Portfolio</Button>
                    <Button component={Link} to="/" style={{ color: 'black', fontSize: '1.2rem' }}>Shop</Button>
                    <Button component={Link} to="/" style={{ color: 'black', fontSize: '1.2rem' }}>Contact</Button>
                </div>
                <div></div> 
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
