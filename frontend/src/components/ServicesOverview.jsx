import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material';
import { motion } from 'framer-motion';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import BusinessCenterRoundedIcon from '@mui/icons-material/BusinessCenterRounded';
import { Link as RouterLink } from 'react-router-dom';

const MotionCard = motion(Box);

const ServicesOverview = [
    {
        icon: <RocketLaunchRoundedIcon fontSize="large" color="primary" />,
        title: 'Web Application',
        description: 'A fast, mobile-friendly site tailored to your brand. SEO-ready, built for performance, and fully yours to own.',
        link: '/services/standard-web-app',
        text: 'See What’s Included',
    },
    {
        icon: <BusinessCenterRoundedIcon fontSize="large" color="primary" />,
        title: 'Stride Platform',
        description: 'A secure, scalable platform with dashboards, form builders, and role-based access — designed to power the way your business operates.',
        link: '/services/stride',
        text: 'Explore the Platform',
    },
];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: 'easeOut',
        },
    }),
};

export default function Services() {
    return (
        <Box id="services" sx={{ py: 10, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    Choose Your Solution
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    Whether you need a fast, beautiful website or a powerful platform to run your business — we’ve got you covered.
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
                                y: -6,
                                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.1)',
                                transition: { duration: 0.3 },
                            }}
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                maxWidth: 340,
                                flex: '1 1 300px',
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                border: '1px solid #e0e0e0',
                                transition: 'all 0.3s ease-in-out',
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
