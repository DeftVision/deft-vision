// components/Hero.jsx
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
                px: 2,
            }}
        >
            {/* Enhanced overlay with blur */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
                    backdropFilter: 'blur(2px)',
                    zIndex: 1,
                }}
            />

            {/* Frosted glass container for text */}
            <Container
                maxWidth="md"
                sx={{
                    position: 'relative',
                    zIndex: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(6px)',
                    borderRadius: 2,
                    p: { xs: 3, sm: 4 },
                    boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
                    textAlign: 'center',
                }}
            >
                <Typography
                    variant="h1"
                    gutterBottom
                    className={`fade-in-up ${visible ? 'visible delay-0' : ''}`}
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        textShadow: '1px 1px 4px rgba(0,0,0,0.7)',
                        mb: 2,
                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
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
                        textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
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
