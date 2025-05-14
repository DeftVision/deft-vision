// src/components/Hero.jsx

import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
    return (
        <Box
            sx={{
                minHeight: '50vh',
                backgroundImage: 'url(/images/hero.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                textAlign: 'center',
                px: 2,
            }}
        >
            {/* Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    zIndex: 1,
                }}
            />


            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, color: 'white' }}>
                <Typography variant="h1" gutterBottom>
                    Websites that work like apps.
                </Typography>
                <Typography variant="h5" color="text.primary" sx={{ mb: 4, color: 'white' }}>
                    Built to bring in leads. Structured to grow with your business.
                </Typography>
                <Button variant="contained" size="large" href="#contact">
                    Start My Project
                </Button>
            </Container>
        </Box>
    );
}
