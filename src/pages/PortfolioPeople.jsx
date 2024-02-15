import React from 'react';
import NavBar from '../components/NavBarPortfolio';
import { Container, Toolbar, Button } from "@mui/material";

const itemData = [
    { img: '/images/portfolio/onwe_photowalk/1.JPG', title: '1.' },
    { img: '/images/portfolio/onwe_photowalk/2.JPG', title: '2.' },
    { img: '/images/portfolio/onwe_photowalk/3.JPG', title: '3' },
    { img: '/images/portfolio/onwe_photowalk/4.JPG', title: '4' },
    { img: '/images/portfolio/onwe_photowalk/5.JPG', title: '5' },
    { img: '/images/portfolio/onwe_photowalk/6.JPG', title: '6' },
    { img: '/images/portfolio/onwe_photowalk/7.JPG', title: '7' },
    { img: '/images/portfolio/onwe_photowalk/8.JPG', title: '8' },
    { img: '/images/portfolio/onwe_photowalk/9.JPG', title: '9' },
    { img: '/images/portfolio/onwe_photowalk/10.JPG', title: '10' },
    { img: '/images/portfolio/onwe_photowalk/11.JPG', title: '11' },
    { img: '/images/portfolio/onwe_photowalk/12.JPG', title: '12' },
    { img: '/images/portfolio/onwe_photowalk/13.JPG', title: '13' },
    { img: '/images/portfolio/onwe_photowalk/14.JPG', title: '14' },
    { img: '/images/portfolio/onwe_photowalk/15.JPG', title: '15' },
    { img: '/images/portfolio/onwe_photowalk/16.JPG', title: '16' },
    { img: '/images/portfolio/onwe_photowalk/17.JPG', title: '17' },
    { img: '/images/portfolio/onwe_photowalk/18.JPG', title: '18' },
    { img: '/images/portfolio/onwe_photowalk/19.JPG', title: '19' },
    { img: '/images/portfolio/onwe_photowalk/20.JPG', title: '20' },
    { img: '/images/portfolio/onwe_photowalk/21.JPG', title: '21' },
    { img: '/images/portfolio/onwe_photowalk/22.JPG', title: '22' },
    { img: '/images/portfolio/onwe_photowalk/23.JPG', title: '23' },
    { img: '/images/portfolio/onwe_photowalk/24.JPG', title: '24' },
    { img: '/images/portfolio/onwe_photowalk/25.JPG', title: '25' },
    { img: '/images/portfolio/onwe_photowalk/26.JPG', title: '26' },
    { img: '/images/portfolio/onwe_photowalk/27.JPG', title: '27' },
    { img: '/images/portfolio/onwe_photowalk/28.JPG', title: '28' },
    { img: '/images/portfolio/onwe_photowalk/29.JPG', title: '29' },
    { img: '/images/portfolio/onwe_photowalk/30.JPG', title: '30' },
    { img: '/images/portfolio/onwe_photowalk/31.JPG', title: '31' },
    { img: '/images/portfolio/onwe_photowalk/32.JPG', title: '32' },
    { img: '/images/portfolio/onwe_photowalk/33.JPG', title: '33' },
    { img: '/images/portfolio/onwe_photowalk/34.JPG', title: '34' },
    { img: '/images/portfolio/onwe_photowalk/35.JPG', title: '35' },
    { img: '/images/portfolio/onwe_photowalk/36.JPG', title: '36' },
    { img: '/images/portfolio/onwe_photowalk/37.JPG', title: '37' },
    { img: '/images/portfolio/onwe_photowalk/38.JPG', title: '38' }

  ];

const Portfolio = () => {
    return (
        <div className="bg">
          <video autoPlay loop muted>
            <source src="/images/main_background.mp4" type="video/mp4" />
          </video>
          <NavBar />
          <Container>
            <video autoPlay loop muted src="/images/portfolio/main/IMG_3992.mp4" type="video/mp4" />
          </Container>
          <Container style={{ padding: '10px' }}>
            <div className="grid-container" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', 
              gridAutoRows: 'auto',
              gridGap: '10px',
            }}>
              {itemData.map((item, index) => (
                <div key={index} className="grid-item" style={{
                  width: '100%',
                }}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>
      )
    };

export default Portfolio;
