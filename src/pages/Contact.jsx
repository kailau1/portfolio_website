import React from 'react';
import NavBar from '../components/NavBarMain';
import { Container, Typography } from "@mui/material";

import '../assets/css/Contact.css'


const Contact = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted>
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Container>
                <Typography className="contactText" variant="h2" style={{fontFamily: 'Approach_Mono'}}>
                    Contact
                </Typography>
                <Typography className="contactText" variant="h5" style={{fontFamily: 'Approach_Mono'}}>
                    Instagram: @weaintdun
                </Typography>
                <Typography className="contactText" variant="h5" style={{fontFamily: 'Approach_Mono'}}>
                    TikTok: @weaintdun
                </Typography>
                <Typography className="contactText" variant="h5" style={{fontFamily: 'Approach_Mono'}}>
                    Email: weaintdun@gmail.com
                </Typography>
            </Container>
        </div>
    )
};

export default Contact;
