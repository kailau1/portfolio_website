import React from 'react';
import NavBar from '../components/NavBarMain';
import { Container, Typography } from "@mui/material";
import { Link } from 'react-router-dom';


import '../assets/css/Shop.css';

const Shop = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted>
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Container style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                minHeight: '100vh',
                paddingTop: '1%',
                textDecoration: 'none' 
            }} component={Link} to="/IN_COLD_BLOOD">
                <img className="product1" src="/images/product/product1.jpg" alt="Book Product" />
                <Typography className="productText" variant="h5" style={{fontFamily: 'Approach_Mono', paddingTop: '1%'}}>
                    IN COLD BLOOD
                </Typography>
                <Typography className="productText"  style={{fontFamily: 'Approach_Mono'}}>
                    By Hussam El-Jamal
                </Typography>
                <Typography className="productText" style={{fontFamily: 'Approach_Mono'}}>
                    £35.00
                </Typography>
            </Container>
        </div>
    );
};

export default Shop;
