import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

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
                minHeight: '100vh',
                backgroundImage: 'url(/images/hero-green.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center 40%',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                px: { xs: 2, md: 8 },
                pt: { xs: 6, md: 10},
                position: 'relative',
            }}
        >
            {/* Logo - now in flow */}
            <Box
                sx={{
                    alignSelf: { xs: 'center', md: 'flex-start' },
                    mb: {
                        xs: 14,
                        md: 8
                    },
                }}
            >

                    <Box
                        component="img"
                        src="/images/DeftVisionLogo.svg"
                        alt="Deft Vision Logo"
                        sx={{
                            height: 72,
                            width: 'auto',
                            display: 'block',
                        }}
                    />
            </Box>

            {/* Hero Content */}
            <Box
                component={motion.div}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                sx={{
                    maxWidth: '680px',
                    width: '100%',
                    color: 'white',
                    textAlign: { xs: 'center', md: 'left' },
                    zIndex: 2,
                }}
            >
                <Typography
                    component={motion.h1}
                    variants={fadeInUp}
                    variant="h1"
                    sx={{
                        color: 'white',
                        fontWeight: 600,
                        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
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
                    Fast, scalable sites built with real app architecture, ready to grow with your business.
                </Typography>

                <motion.div variants={fadeInUp}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            mb: { xs: 6, md: 0 },
                        }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            href="#contact"
                            sx={{
                                backgroundColor: '#F06449',
                                color: '#fff',
                                px: 4,
                                fontWeight: 500,
                                textTransform: 'none',
                                borderRadius: 2,
                                boxShadow: '0 4px 12px rgba(240, 100, 73, 0.35)',
                                '&:hover': {
                                    backgroundColor: '#C54B35',
                                },
                            }}
                        >
                            Start My Project
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            mt: { xs: 4, md: 6 },
                            display: 'flex',
                            justifyContent: { xs: 'center', md: 'flex-start' },
                            fontSize: '2rem',
                            color: '#fff',
                            animation: 'bounce 2s infinite',
                        }}
                    >
                        <a href='#services' sx={{ textDecoration: 'none' }}>
                            <KeyboardArrowDownIcon sx={{ fontSize: 36, color: '#ffffff' }} />
                        </a>
                    </Box>
                </motion.div>
            </Box>
        </Box>
    );
}
