// src/components/Hero.jsx

import { Box, Typography, Button, Container } from '@mui/material';

export default function Hero() {
    return (
        <Box
            sx={{
                minHeight: '50vh',
                backgroundImage: 'url(/images/hero-bg.png)',
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
                    backgroundColor: 'rgba(0, 0, 0, 0.25)', // ⬅ reduces blur intensity
                    zIndex: 1,
                }}
            />


            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h1" gutterBottom>
                    Websites that work like apps.
                </Typography>
                <Typography variant="h5" color="text.primary" sx={{ mb: 4 }}>
                    Built to bring in leads. Structured to grow with your business.
                </Typography>
                <Button variant="contained" size="large" href="#contact">
                    Start a Project
                </Button>
            </Container>
        </Box>
    );
}
