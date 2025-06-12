import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import LayersIcon from '@mui/icons-material/Layers';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { Link as RouterLink } from 'react-router-dom';

const MotionCard = motion(Box);

const ServicesOverview = [
    {
        icon: <LaunchIcon fontSize="large" color="primary" />,
        title: 'Single-Page App',
        description: 'A fast, mobile-first page with everything you need to get online. SEO-ready, clean, and optimized.',
        link: '/services/web-app#tier1',
        text: 'Explore Tier 1',
    },
    {
        icon: <LayersIcon fontSize="large" color="primary" />,
        title: 'Multi-Page Application',
        description: 'Add extra pages like About, Contact, and Services — perfect for growing visibility and content.',
        link: '/services/web-app#tier2',
        text: 'Explore Tier 2',
    },
    {
        icon: <LockOpenIcon fontSize="large" color="primary" />,
        title: 'Web App + Backend',
        description: 'Includes secure login, database support, and custom logic — ideal for data-heavy needs.',
        link: '/services/web-app#tier3',
        text: 'Explore Tier 3',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.6,
            ease: [0.25, 0.8, 0.25, 1],
        },
    }),
};

export default function Services() {
    return (
        <Box id="services" sx={{ py: 10, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    Choose Your Tier
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    From simple sites to fully powered platforms, we’ll help you launch the right solution for your business.
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 4,
                    }}
                >
                    {ServicesOverview.map((service, index) => (
                        <MotionCard
                            key={service.title}
                            custom={index}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.25, ease: 'easeOut' },
                            }}
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                maxWidth: 340,
                                flex: '1 1 300px',
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                border: '1px solid #e0e0e0',
                                transition: 'transform 0.25s ease-out, box-shadow 0.25s ease-out',
                                '&:hover': {
                                    boxShadow: '0px 10px 24px rgba(0, 0, 0, 0.08)',
                                },
                            }}
                        >
                            <Box>{service.icon}</Box>
                            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                {service.description}
                            </Typography>
                            <Button
                                component={RouterLink}
                                to={service.link}
                                variant="outlined"
                                color="primary"
                            >
                                {service.text}
                            </Button>
                        </MotionCard>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
