import React from 'react';
import NavBar from '../components/NavBarMain';
import ProductImageGallery from '../components/ProductImageGallery';
import { Grid, Container, Typography, Box, Button } from "@mui/material"; // Import Box
import { Link } from 'react-router-dom';

import '../assets/css/ProductDetail.css';

const ProductDetail = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted>
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Container className='container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <ProductImageGallery />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', paddingTop: '6%' }}>
                        {/* Wrap Typography in a Box */}
                        <Box>
                            <Typography variant="h4" className='text'>
                                IN COLD BLOOD
                            </Typography>
                            <Typography className='text' >
                                By Hussam El-Jamal / WEAINTDUN
                            </Typography>
                            <Typography className='text' variant='h5' sx={{paddingTop: '2%'}}>£35</Typography>
                            <Typography className='text' sx={{paddingTop: '2%'}}>
                            I have released this book in help of my people in Palestine. I made this book to show everyone how Palestine is being supported by the public more than the big governments. It gives you some information about Palestine and its history. A portion of the proceeds will go to a reliable charity that helps the people in palestine and plants olive trees in the homeland. I hope you all enjoy this and share this powerful message im trying to spread to the world.
                            </Typography>
                            <Typography className='text' sx={{paddingTop: '5%'}}>
                                8x8 hardcover
                            </Typography>
                            <Typography className='text' sx={{paddingTop: '2%'}}>
                                45 pages
                            </Typography>
                            <Button sx={{marginTop: '5%', color: 'black', fontSize: '1.2rem', backgroundColor: 'white', fontFamily: 'Approach_Mono'}}>purchase now</Button>
                            <Typography className='text' sx={{marginTop: '2%'}}>20% of profts will go to CHARITY</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductDetail;
