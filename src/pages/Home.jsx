import React from 'react';
import NavBar from '../components/NavBarMain';

import '../assets/css/Home.css';

const Home = () => {
    return (
        <div className="video-background-container">
            <video autoPlay loop muted className="default-video">
                <source src="/images/home_background1.mp4" type="video/mp4" />
            </video>
            <video autoPlay loop muted className="medium-screen-video">
                <source src="/images/home_background2.mp4" type="video/mp4" />
            </video>
            <video autoPlay loop muted className="small-screen-video">
                <source src="/images/home_background3.mp4" type="video/mp4" />
            </video>
            <NavBar />
        </div>
    );
};

export default Home;
