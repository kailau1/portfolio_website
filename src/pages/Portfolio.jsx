import React from 'react';
import NavBar from '../components/NavBar';
import { Container, Toolbar, Button } from "@mui/material";



const Portfolio = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted>
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Toolbar style={{ justifyContent: 'center', borderBottom: '1px solid white'}}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Button  style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'Approach_Mono', paddingRight: '1%'  }}>Corteiz Events</Button>
                        <Button  style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'Approach_Mono', paddingRight: '1%'  }}>People</Button>
                        <Button  style={{ color: 'white', fontSize: '0.8rem', fontFamily: 'Approach_Mono', paddingRight: '1%' }}>FREE PALESTINE</Button>
                    </div>
                    <div></div> 
                </Toolbar>
        </div>
    )
};

export default Portfolio;
