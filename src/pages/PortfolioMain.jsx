import React from 'react';
import NavBar from '../components/NavBarPortfolio';
import { Container, Toolbar, Button } from "@mui/material";



const PortfolioMain = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted>
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Container>
                <video autoPlay loop muted src="/images/portfolio/main/IMG_3992.mp4" type="video/mp4" />
            </Container>
        </div>
    )
};

export default PortfolioMain;
