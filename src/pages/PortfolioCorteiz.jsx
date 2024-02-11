import React from 'react';
import NavBar from '../components/NavBarPortfolio';
import { Container, Toolbar, Button, ImageList, ImageListItem } from "@mui/material";

// Array of image data with paths
const itemData = [
    { img: '/images/portfolio/corteiz/1.jpg', title: '1.' },
    { img: '/images/portfolio/corteiz/2.jpeg', title: '2.' },
    { img: '/images/portfolio/corteiz/3.jpeg', title: '3' },
    { img: '/images/portfolio/corteiz/4.jpeg', title: '4' },
    { img: '/images/portfolio/corteiz/5.jpeg', title: '5' },
    { img: '/images/portfolio/corteiz/6.jpeg', title: '6' },
    { img: '/images/portfolio/corteiz/7.jpeg', title: '7' },
    { img: '/images/portfolio/corteiz/8.jpeg', title: '8' },
    { img: '/images/portfolio/corteiz/9.jpeg', title: '9' },
    { img: '/images/portfolio/corteiz/10.jpeg', title: '10' },
    { img: '/images/portfolio/corteiz/11.jpeg', title: '11' },
    { img: '/images/portfolio/corteiz/12.jpeg', title: '12' },
  ];
  

  const PortfolioCorteiz = () => {
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
            // Increase the minimum size to 150px (or any size you want) to make images larger
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
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </Container>
      </div>
    )
  };
  
  export default PortfolioCorteiz;
