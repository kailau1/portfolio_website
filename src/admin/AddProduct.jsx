import React, { useState } from 'react';
import AdminNavBar from '../components/AdminNavBar';
import { Container, TextField, Button } from "@mui/material";
import axios from 'axios';

const AddProduct = () => {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const productData = {
      name: productName,
      description: productDescription,
      price: productPrice,
    };

    const handleSubmit = () => {
      axios.post("http://localhost:5000/api/product", productData)
        .then(response => {
          console.log(response.date);
        })
        .catch(error => {
          console.eroor(error);
        })};
    
    return (
        <div className="bg">
          <video autoPlay loop muted>
            <source src="/images/main_background.mp4" type="video/mp4" />
          </video>
          <AdminNavBar />
          <Container>
            <form onSubmit={handleSubmit}> 
              <TextField 
                label="Name" 
                color="secondary" 
                onChange={(e) => setProductName(e.target.value)}
                focused  
                inputProps={{ style: {color: 'white'}}} 
                sx={{marginTop: "5%", 
                marginRight: "5%"
              }}/>
              <TextField 
                label="Price" 
                color="secondary" 
                focused  
                onChange={(e) => setProductPrice(e.target.value)}
                inputProps={{ style: {color: 'white'}}} 
                sx={{marginTop: "5%",
                marginRight: "5%"
              }}/>
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                onChange={(e) => setProductDescription(e.target.value)}
                color="secondary"
                focused 
                multiline
                maxRows={10}
                inputProps={{ style: {color: 'white'}}} 
                sx={{marginTop: "5%",
                width: "20rem"
              }}/>
              <Button type="submit" variant="contained" color="secondary" sx={{marginTop: "5%",
                marginLeft: "5%", color: "white"
              }}>
                Add Product
              </Button>
            </form>
          </Container>
        </div>
      );
      
};

export default AddProduct;
