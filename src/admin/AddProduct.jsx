import React, { useState } from 'react';
import AdminNavBar from '../components/AdminNavBar';
import { Container, Typography, TextField, Button } from "@mui/material";

function AddProduct  () {
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: productName,
                    description: productDescription,
                    price: productPrice,
                }),
            });
    
            if (response.ok) {
                console.log('Product was successfully added to the db.');
            } else {
                console.error('Error adding product');
            } 
        } catch (error) {
            console.error('error adding product');
        }
    };
    
    return (
        <div className="bg">
          <video autoPlay loop muted>
            <source src="/images/main_background.mp4" type="video/mp4" />
          </video>
          <AdminNavBar />
          <Container>
            <form onSubmit={handleSubmit}> {/* Add onSubmit event to form */}
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
            </form> {/* Close the form */}
          </Container>
        </div>
      );
      
};

export default AddProduct;
