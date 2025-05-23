import {
    Box,
    Container,
    Typography,
    Paper,
    Button,
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import DesignServicesIcon from '@mui/icons-material/DesignServices';


import { Link as RouterLink } from 'react-router-dom';

const ServicesOverview = [
    // {
    //     icon: <SchoolIcon fontSize="large" color="primary" />,
    //     title: 'Deft Vision\'s Guide',
    //     description:
    //         'Not sure where to start? Let\'s figure out what you need now and where you want to be.',
    //     link: '/services/deft-guide'
    // },
    {
        icon: <CodeIcon fontSize="large" color="primary" />,
        title: 'Business Web App',
        description:
            'A fast, lead-focused web app that\'s mobile friendly, SEO ready, and built to grow with your business.',
        link: '/services/business-web-app'
     },
    // {
    //     icon: <DesignServicesIcon fontSize="large" color="primary" />,
    //     title: 'Maintenance Service Plan',
    //     description:
    //         'Keep your site fresh — we’ll handle content changes and tech updates.',
    //     link: '/'
    // }

];

export default function Services() {
    return (
        <Box id="services" sx={{ py: 8, backgroundColor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>
                    Launch Your Site
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
                                    <Button variant='outlined'>Learn More</Button>
                                </RouterLink>
                            )}
                        </Paper>
                    ))}
                </Box>
            </Container>
        </Box>
    );
}
