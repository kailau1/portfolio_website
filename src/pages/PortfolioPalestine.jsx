import React from 'react';
import NavBar from '../components/NavBarPortfolio';
import { Container, Toolbar, Button, ImageList, ImageListItem } from "@mui/material";

// Array of image data with paths
const itemData = [
    { img: '/images/portfolio/palestine/1.JPG', title: '1.' },
    { img: '/images/portfolio/palestine/2.JPG', title: '2.' },
    { img: '/images/portfolio/palestine/3.JPG', title: '3' },
    { img: '/images/portfolio/palestine/4.JPG', title: '4' },
    { img: '/images/portfolio/palestine/5.JPG', title: '5' },
    { img: '/images/portfolio/palestine/6.JPG', title: '6' },
    { img: '/images/portfolio/palestine/7.JPG', title: '7' },
    { img: '/images/portfolio/palestine/8.JPG', title: '8' },
    { img: '/images/portfolio/palestine/9.JPG', title: '9' },
    { img: '/images/portfolio/palestine/10.JPG', title: '10' },
    { img: '/images/portfolio/palestine/11.JPG', title: '11' },
    { img: '/images/portfolio/palestine/12.JPG', title: '12' },
    { img: '/images/portfolio/palestine/13.JPG', title: '13' },
    { img: '/images/portfolio/palestine/14.JPG', title: '14' },
    { img: '/images/portfolio/palestine/15.JPG', title: '15' },
    { img: '/images/portfolio/palestine/16.JPG', title: '16' },
    { img: '/images/portfolio/palestine/17.JPG', title: '17' },
    { img: '/images/portfolio/palestine/18.JPG', title: '18' },
    { img: '/images/portfolio/palestine/19.JPG', title: '19' },
    { img: '/images/portfolio/palestine/20.JPG', title: '20' },
    { img: '/images/portfolio/palestine/21.JPG', title: '21' },
    { img: '/images/portfolio/palestine/22.JPG', title: '22' },
    { img: '/images/portfolio/palestine/23.JPG', title: '23' },
    { img: '/images/portfolio/palestine/24.JPG', title: '24' },
    { img: '/images/portfolio/palestine/25.JPG', title: '25' },
    { img: '/images/portfolio/palestine/26.JPG', title: '26' },
    { img: '/images/portfolio/palestine/27.JPG', title: '27' },
    { img: '/images/portfolio/palestine/28.JPG', title: '28' },
    { img: '/images/portfolio/palestine/29.JPG', title: '29' },
    { img: '/images/portfolio/palestine/30.JPG', title: '30' },
    { img: '/images/portfolio/palestine/31.JPG', title: '31' },
    { img: '/images/portfolio/palestine/32.JPG', title: '32' },
    { img: '/images/portfolio/palestine/33.JPG', title: '33' },
    { img: '/images/portfolio/palestine/34.JPG', title: '34' },
    { img: '/images/portfolio/palestine/35.JPG', title: '35' },
    { img: '/images/portfolio/palestine/36.JPG', title: '36' },
    { img: '/images/portfolio/palestine/37.JPG', title: '37' },
    { img: '/images/portfolio/palestine/38.JPG', title: '38' },
    { img: '/images/portfolio/palestine/39.JPG', title: '39' },
    { img: '/images/portfolio/palestine/40.JPG', title: '40' },
    { img: '/images/portfolio/palestine/41.JPG', title: '41' },
    { img: '/images/portfolio/palestine/42.JPG', title: '42' },
    { img: '/images/portfolio/palestine/43.JPG', title: '43' },
    { img: '/images/portfolio/palestine/44.JPG', title: '44' },
    { img: '/images/portfolio/palestine/45.JPG', title: '45' },
    { img: '/images/portfolio/palestine/46.JPG', title: '46' },
    { img: '/images/portfolio/palestine/47.JPG', title: '47' },
    { img: '/images/portfolio/palestine/48.JPG', title: '48' },
    { img: '/images/portfolio/palestine/49.JPG', title: '49' },
  ];
  

  const PortfolioPalestine = () => {
    return (
      <div className="bg">
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
  
  export default PortfolioPalestine;
