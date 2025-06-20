import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Stack,
    Button,
    Collapse,
} from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import LayersIcon from '@mui/icons-material/Layers';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const services = [
    {
        icon: <LaunchIcon fontSize="large" color="primary" />,
        title: 'Starter Site',
        price: '$300',
        description: 'Built to go live fast. Clean code, built to scale and expand smart when you\'re ready.',
        details: [
            'Responsive layout that works on all modern devices',
            'Accessible structure with readable contrast and keyboard navigation',
            'Fast-loading images and lightweight code',
            'Flexible section layout ready to scale or repurpose',
        ],
    },
    {
        icon: <LayersIcon fontSize="large" color="primary" />,
        title: 'Custom Site',
        price: '$600',
        description: 'For growing businesses that need extra pages and a design tailored to their brand’s look and feel.',
        details: [
            'Up to 3 additional pages of custom content',
            'Design matched to your brand colors and typography',
            'Mobile-first layout with responsive scaling',
            'Ready for add-ons like forms, galleries, or bookings',
        ],

    },
    {
        icon: <LockOpenIcon fontSize="large" color="primary" />,
        title: 'Hosting',
        price: '',
        description: 'Hosting that works with your existing setup, or we’ll help you get launched with reliable infrastructure and support.',
        details: [
            'Connect your existing domain or get help setting up a new one',
            'Secure SSL setup and monitoring',
            'Supports custom features like forms and protected areas',
            'Flexible infrastructure that can scale with your needs',
        ],
    },
];

export default function ServicesSection() {
    const [expanded, setExpanded] = useState(() => services.map(() => false));

    const toggleDetails = (index) => {
        setExpanded((prev) => {
            const next = [...prev];
            next[index] = !next[index];
            return next;
        });
    };

    return (
        <Box id="services" sx={{ py: 10, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    What You Get
                </Typography>
                <Typography variant="body1" align="center" sx={{ maxWidth: 600, mx: 'auto', mb: 6 }}>
                    All sites come mobile-optimized, accessible, and SEO optimized. Every build includes colors, fonts, and a theme to match your brand.
                </Typography>

                <Stack spacing={4} direction={{ xs: 'column', md: 'row' }} justifyContent="center" alignItems="stretch">
                    {services.map((service, index) => (
                        <Box
                            key={service.title}
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                border: '1px solid #e0e0e0',
                                backgroundColor: '#fff',
                                flex: '1 1 300px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box sx={{ mb: 2 }}>
                                {service.icon}
                                <Typography variant="h5" sx={{ mt: 2 }}>
                                    {service.title}
                                </Typography>
                                <Typography variant="h6" sx={{ mt: 1 }}>
                                    {service.price}
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>
                                    {service.description}
                                </Typography>
                            </Box>

                            <Collapse in={expanded[index]}>
                                <Box sx={{ mt: 2 }}>
                                    {service.details.map((item, i) => (
                                        <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                                            <CheckCircleOutlineIcon fontSize="small" color="primary" sx={{ mt: '2px', mr: 1 }} />
                                            <Typography variant="body2">{item}</Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Collapse>

                            <Button
                                onClick={() => toggleDetails(index)}
                                variant="text"
                                size="small"
                                fullWidth
                                sx={{ mt: 2 }}
                            >
                                {expanded[index] ? 'Hide Details' : "What's Included"}
                            </Button>
                        </Box>
                    ))}
                </Stack>

                <Box textAlign="center" mt={6}>
                    <Button variant="contained" size="large" href="/#contact">
                        Start Your Project
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
