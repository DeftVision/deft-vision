import React from 'react';
import {Box, Container, Typography} from '@mui/material'
import {Footer} from "../components/index.js";
import BackToTop from "../layouts/BackToTop.jsx";


export default function MentalHealth() {
    return (
        <>
            <Container maxWidth="md" sx={{py: 6}}>
                <Box sx={{py: 4, display: 'flex', justifyContent: 'center'}}>
                    <a href="/">
                        <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{height: 56}}/>
                    </a>
                </Box>
                <Typography variant="h6" component="h1" gutterBottom>
                    MODERN EMR/EHR SOFTWARE
                </Typography>


            </Container>
            <Footer/>
            <BackToTop/>
        </>
    );
};

