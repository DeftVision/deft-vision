import {
    Box,
    Container,
    Typography,
    Button,
} from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';
import DomainIcon from '@mui/icons-material/Domain';
import { Link as RouterLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionPaper = motion(Box); // Custom motion-enabled Paper-like Box

const ServicesOverview = [
    {
        icon: <LanguageIcon fontSize="large" color="primary" />,
        title: 'Standard Web App',
        description:
            'A fast, mobile-friendly site that helps customers find you, builds trust, and grows with your business.',
        text: 'Learn More',
        link: '/services/standard-web-app',
    },
    {
        icon: <DomainIcon fontSize="large" color="primary" />,
        title: 'Stride',
        description: 'A secure, branded platform to run your business.',
        text: 'Coming Soon',
        link: '/',
    },
];

// Animation variants for Framer Motion
const cardVariants = {
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
        <Box id="services" sx={{ py: 8, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    Build Your Online Presence
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: 4,
                        mt: 4,
                    }}
                >
                    {ServicesOverview.map((service, index) => (
                        <MotionPaper
                            key={service.title}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            whileHover={{
                                y: -6,
                                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
                                transition: { duration: 0.3 },
                            }}
                            sx={{
                                cursor: 'default',
                                flex: '1 1 260px',
                                maxWidth: 320,
                                p: 4,
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                borderRadius: 2,
                                border: '1px solid #e0e0e0',
                                boxShadow: 2,
                                transition: 'all 0.3s ease-in-out',
                            }}
                        >
                            {service.icon}
                            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                {service.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {service.description}
                            </Typography>
                            {service.link && (
                                <Button
                                    component={RouterLink}
                                    to={service.link}
                                    variant="outlined"
                                    color="primary"
                                >
                                    {service.text}
                                </Button>
                            )}
                        </MotionPaper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}

