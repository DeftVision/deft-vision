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
        description: 'A fast, professional site you can launch quickly and build on when you\'re ready.',
        details: [
            'Responsive design for phones, tablets, and desktops',
            'Accessible structure with strong contrast and keyboard navigation',
            'Optimized images and minimal code for fast loading',
            'Flexible sections you can reuse or expand',
        ],
    },
    {
        icon: <LayersIcon fontSize="large" color="primary" />,
        title: 'Custom Site',
        price: '$600',
        description: 'For businesses that need more content, more pages, or added features beyond the starter site.',
        details: [
            'Custom content pages based on your business needs',
            'Custom styles to match your brand’s colors and type',
            'Mobile-first layout with responsive scaling',
            'Ready for add-ons like forms, galleries, or bookings',
        ],

    },
    {
        icon: <LockOpenIcon fontSize="large" color="primary" />,
        title: 'Hosting',
        price: '',
        description: 'Whether you\'re managing your own account or need help getting started, your site will be ready to launch.',
        details: [
            'Custom domain connection',
            'HTTPS included for site security',
            'No-cost hosting options available',
            'Fully managed plans if you want us to handle it'
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
