import React from 'react';
import NavBar from '../components/NavBarMain';
import ProductImageGallery from '../components/ProductImageGallery';
import { Grid, Container, Typography, Box, Button } from "@mui/material"; // Import Box
import { Link } from 'react-router-dom';

import '../assets/css/ProductDetail.css';

const ProductDetail = () => {
    return(
        <div className="bg">
            <video autoPlay loop muted playsInline >
                <source src="/images/main_background.mp4" type="video/mp4" />
            </video>
            <NavBar />
            <Container className='container'>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <ProductImageGallery />
                    </Grid>
                    <Grid item xs={12} md={6} style={{ display: 'flex', flexDirection: 'column', paddingTop: '6%' }}>
                        <Box>
                            <Typography variant="h4" className='text' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>
                                IN COLD BLOOD
                            </Typography>
                            <Typography className='text' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>
                                By Hussam El-Jamal / WEAINTDUN
                            </Typography>
                            <Typography className='text' variant='h5' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>£35</Typography>
                            <Typography className='text' variant='h8' sx={{color: 'grey', fontFamily: 'Approach_Mono'}}>Additional £2.99 shipping</Typography>
                            <Typography className='text' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>
                            I have released this book in help of my people in Palestine. I made this book to show everyone how Palestine is being supported by the public more than the big governments. It gives you some information about Palestine and its history. A portion of the proceeds will go to a reliable charity that helps the people in palestine and plants olive trees in the homeland. I hope you all enjoy this and share this powerful message im trying to spread to the world.
                            </Typography>
                            <Typography className='text' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>
                                8x8 hardcover
                            </Typography>
                            <Typography className='text' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>
                                45 pages
                            </Typography>
                            <Button sx={{marginTop: '5%', color: 'black', fontSize: '1.2rem', backgroundColor: 'white', fontFamily: 'Approach_Mono'}} href="https://buy.stripe.com/test_14k9ElfzadNTffi8ww">Purchase now</Button>
                            <Typography className='text' sx={{paddingTop: '2%', fontFamily: 'Approach_Mono'}}>20% of profts will go to Olive Tree | Human Appeal</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default ProductDetail;
