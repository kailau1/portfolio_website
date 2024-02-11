import React from 'react';
import NavBar from '../components/NavBarPortfolio';
import { Container, Toolbar, Button, ImageList, ImageListItem } from "@mui/material";

// Array of image data with paths
const itemData = [
    { img: '/images/portfolio/corteiz/IMG_6829.jpeg', title: 'IMG_6829' },
    { img: '/images/portfolio/corteiz/IMG_6838.jpeg', title: 'IMG_6838' },
    { img: '/images/portfolio/corteiz/IMG_6850.jpeg', title: 'IMG_6850' },
    { img: '/images/portfolio/corteiz/IMG_6852.jpeg', title: 'IMG_6852' },
    { img: '/images/portfolio/corteiz/IMG_6866.jpeg', title: 'IMG_6866' },
    { img: '/images/portfolio/corteiz/IMG_6913.jpeg', title: 'IMG_6913' },
    { img: '/images/portfolio/corteiz/IMG_6915.jpeg', title: 'IMG_6915' },
    { img: '/images/portfolio/corteiz/IMG_6919.jpeg', title: 'IMG_6919' },
    { img: '/images/portfolio/corteiz/IMG_6926.jpeg', title: 'IMG_6926' },
    { img: '/images/portfolio/corteiz/IMG_6928.jpeg', title: 'IMG_6928' },
    { img: '/images/portfolio/corteiz/IMG_6934.jpeg', title: 'IMG_6934' },
    { img: '/images/portfolio/corteiz/IMG_6935.jpeg', title: 'IMG_6935' },
    { img: '/images/portfolio/corteiz/IMG_6939.jpeg', title: 'IMG_6939' },
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
