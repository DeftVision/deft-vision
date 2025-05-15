import { Box, Typography, Button, Container } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export default function Hero() {
    const heroRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.4 }
        );

        if (heroRef.current) observer.observe(heroRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Box
            ref={heroRef}
            sx={{
                minHeight: '60vh',
                backgroundImage: 'url(/images/hero.webp)',
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
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
                    zIndex: 1,
                }}
            />
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h1"
                    gutterBottom
                    className={`fade-in-up ${visible ? 'visible delay-0' : ''}`}
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        mb: 2,
                    }}
                >
                    Websites that work like apps.
                </Typography>
                <Typography
                    variant="h5"
                    className={`fade-in-up ${visible ? 'visible delay-1' : ''}`}
                    sx={{
                        color: 'white',
                        fontWeight: 300,
                        mb: 4,
                    }}
                >
                    Built to bring in leads. Structured to grow with your business.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    className={`fade-in-up ${visible ? 'visible delay-2' : ''}`}
                    sx={{
                        backgroundColor: '#3A6EA5',
                        color: '#fff',
                        px: 4,
                        fontWeight: 500,
                        textTransform: 'none',
                        boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
                        '&:hover': {
                            backgroundColor: '#2f5a85',
                        },
                    }}
                    href="#contact"
                >
                    Start My Project
                </Button>
            </Container>
        </Box>
    );
}
