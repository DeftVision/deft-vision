import { Box, Typography, Button, Container } from '@mui/material';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 },
    },
};

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
    return (
        <Box
            sx={{
                minHeight: '60vh',
                position: 'relative',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                px: 2,
            }}
        >
            {/* Animated Gradient Background */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0,
                    background: 'linear-gradient(270deg, #3A6EA5, #8357c5, #00A9A5)',
                    backgroundSize: '600% 600%',
                    animation: 'gradientShift 20s ease infinite',
                }}
            />

            {/* Dark overlay on top of gradient */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))',
                    backdropFilter: 'blur(2px)',
                    zIndex: 1,
                }}
            />

            {/* Frosted Glass Content */}
            <Container
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
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
                    component={motion.h1}
                    variants={fadeInUp}
                    variant="h1"
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
                    component={motion.p}
                    variants={fadeInUp}
                    variant="h5"
                    sx={{
                        color: 'white',
                        fontWeight: 300,
                        textShadow: '1px 1px 3px rgba(0,0,0,0.6)',
                        mb: 4,
                    }}
                >
                    Built to grow with your business.
                </Typography>

                <motion.div variants={fadeInUp}>
                    <Button
                        variant="contained"
                        size="large"
                        href="#contact"
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
                    >
                        Start My Project
                    </Button>
                </motion.div>
            </Container>
        </Box>
    );
}
