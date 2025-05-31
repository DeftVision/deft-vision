import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
} from '@mui/material';
import LanguageIcon  from '@mui/icons-material/Language';
import DomainIcon     from '@mui/icons-material/Domain';


import { Link as RouterLink } from 'react-router-dom';

const ServicesOverview = [
    {
        icon: <LanguageIcon  fontSize="large" color="primary" />,
        title: 'Standard Web App',
        description: 'A fast, mobile-friendly site that helps customers find you, builds trust, and grows with your business.',
        text: 'Learn More',
        link: '/services/standard-web-app'
     },
    {
        icon: <DomainIcon     fontSize="large" color="primary" />,
        title: 'Stride',
        description: 'A secure, branded platform to run your business.',
        text: 'Coming Soon',
        link: '/'
    },
];

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
                        <Paper
                            key={index}
                            elevation={2}
                            sx={{
                                cursor: 'default',
                                flex: '1 1 260px',
                                maxWidth: 320,
                                p: 4,
                                textAlign: 'center',
                                transition: 'all 0.25s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 4,
                                },
                            }}
                        >
                            {service.icon}
                            <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                {service.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                {service.description}
                            </Typography>
                            {service.link && (
                                <RouterLink to={service.link} style={{ textDecoration: 'none' }}>
                                    <Button variant='outlined'>{service.text}</Button>
                                </RouterLink>
                            )}
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
