import { Box, Typography, Button, Container } from '@mui/material';


export default function Hero() {
    return (
        <Box
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
            {/* Gradient Overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))',
                    zIndex: 1,
                }}
            />

            {/* Content */}
            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
                <Typography
                    variant="h1"
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        textShadow: '0 2px 8px rgba(0, 0, 0, 0.5)',
                        mb: 2,
                    }}
                    gutterBottom
                >
                    Websites that work like apps.
                </Typography>
                <Typography
                    variant="h5"
                    sx={{
                        color: 'white',
                        fontWeight: 300,
                        textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)',
                        mb: 4,
                    }}
                >
                    Built to bring in leads. Structured to grow with your business.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
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
