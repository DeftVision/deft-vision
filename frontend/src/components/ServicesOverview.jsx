import React, { useState } from 'react';
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

const MotionCard = motion(Box);

const ServicesOverview = [
    {
        icon: <LaunchIcon fontSize="large" color="primary" />,
        title: 'Starter Site',
        description: 'A clean, mobile-first site with everything you need to get online.',
        details: 'Includes 1-page layout, your brand colors, contact links, and SEO basics. Delivered in 3–5 days.',
        price: '$300',
    },
    {
        icon: <LayersIcon fontSize="large" color="primary" />,
        title: 'Custom Site',
        description: 'Need more pages or a custom layout?',
        details: 'Includes up to 3 pages (Home, About, Contact), custom layout and styles, and structured metadata for SEO.',
        price: '$600',
    },
    {
        icon: <LockOpenIcon fontSize="large" color="primary" />,
        title: 'Managed Hosting',
        description: 'Includes hosting, updates, and secure infrastructure.',
        details: 'Your site lives on AWS with domain, SSL, and form support. Cancel anytime. Great for growing sites and backend needs.',
        price: '$50/month',
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
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleCardClick = (index) => {
        setSelectedIndex(index === selectedIndex ? null : index);
    };

    return (
        <Box id="services" sx={{ py: 10, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    What You Get
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    Simple options for fast, modern websites — with optional hosting and support if you want it.
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
                        <Box key={service.title} sx={{ flex: '1 1 300px' }}>
                            <MotionCard
                                onClick={() => handleCardClick(index)}
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
                                    textAlign: 'center',
                                    backgroundColor: '#fff',
                                    border: '1px solid #e0e0e0',
                                    cursor: 'pointer',
                                    boxShadow: selectedIndex === index ? '0px 10px 24px rgba(0,0,0,0.12)' : 'none',
                                }}
                            >
                                <Box>{service.icon}</Box>
                                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                                    {service.description}
                                </Typography>
                            </MotionCard>

                            {selectedIndex === index && (
                                <Box sx={{ mt: 2, p: 3, border: '1px solid #ccc', borderRadius: 2, backgroundColor: '#f9f9f9' }}>
                                    <Typography variant="body1" gutterBottom>
                                        {service.details}
                                    </Typography>
                                    <Typography variant="h6" sx={{ mb: 2 }}>
                                        Price: {service.price}
                                    </Typography>
                                    <Button variant="contained" color="primary" href="/start">
                                        Start This Project
                                    </Button>
                                </Box>
                            )}
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
