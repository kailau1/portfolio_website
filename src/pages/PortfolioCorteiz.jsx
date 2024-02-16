import React from 'react';
import NavBar from '../components/NavBarPortfolio';
import { Container} from "@mui/material";

const itemData = [
    { img: '/images/portfolio/corteiz/1.JPG', title: '1.' },
    { img: '/images/portfolio/corteiz/2.JPG', title: '2.' },
    { img: '/images/portfolio/corteiz/3.JPG', title: '3' },
    { img: '/images/portfolio/corteiz/4.JPG', title: '4' },
    { img: '/images/portfolio/corteiz/5.JPG', title: '5' },
    { img: '/images/portfolio/corteiz/6.JPG', title: '6' },
    { img: '/images/portfolio/corteiz/7.JPG', title: '7' },
    { img: '/images/portfolio/corteiz/8.JPG', title: '8' },
    { img: '/images/portfolio/corteiz/9.JPG', title: '9' },
    { img: '/images/portfolio/corteiz/10.JPG', title: '10' },
    { img: '/images/portfolio/corteiz/11.jpeg', title: '11' },
    { img: '/images/portfolio/corteiz/12.jpeg', title: '12' },
    { img: '/images/portfolio/corteiz/13.jpeg', title: '13' },
    { img: '/images/portfolio/corteiz/14.jpeg', title: '14' },
    { img: '/images/portfolio/corteiz/15.jpeg', title: '15' },
    { img: '/images/portfolio/corteiz/16.jpeg', title: '16' },
    { img: '/images/portfolio/corteiz/17.jpeg', title: '17' },
    { img: '/images/portfolio/corteiz/18.jpeg', title: '18' },
    { img: '/images/portfolio/corteiz/19.jpeg', title: '19' },
    { img: '/images/portfolio/corteiz/20.jpeg', title: '20' },
    { img: '/images/portfolio/corteiz/21.jpeg', title: '21' },
    { img: '/images/portfolio/corteiz/22.jpeg', title: '22' },
    { img: '/images/portfolio/corteiz/23.jpeg', title: '23' }

  ];
  

  const PortfolioCorteiz = () => {
    return (
      <div className="bg">
        <NavBar />
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
  
  export default PortfolioCorteiz;
