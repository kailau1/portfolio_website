import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const imageUrls = [
  '/images/product/product1.jpg',
  '/images/product/product2.jpeg',
  '/images/product/product3.jpeg',
  '/images/product/product4.jpeg',
  '/images/product/product5.jpeg',
  // Add more image URLs as needed...
];

const ProductImageGallery = () => {
  return (
    <Carousel interval={null} style={{ maxWidth: '35rem' }}>
      {imageUrls.map((url, index) => (
        <Carousel.Item key={index}>
          <div style={{width: '100%', height: '75vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <img
              className="d-block"
              src={url}
              alt={`Slide ${index}`}
              style={{
                maxWidth: '100%',
                maxHeight: '75vh',
                objectFit: 'contain',
                display: 'block'
              }}
            />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductImageGallery;
