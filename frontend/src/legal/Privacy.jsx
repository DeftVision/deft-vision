import { Container, Typography, Button, Stack, Paper, Link, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackToTop from '../layouts/BackToTop.jsx';
import {Footer} from "../components/index.js";

export default function Privacy() {
    const navigate = useNavigate();

    const sections = [
        {
            title: '1. Information We Collect',
            content:
                'If you fill out a form on this site, we collect your name, email, and any other details you choose to submit.',
        },
        {
            title: '2. How It’s Handled',
            content: (
                <>
                    Submitted information is sent directly to Deft Vision via a secure email submission service.
                    No data is stored or processed elsewhere by Deft Vision.
                    You can review the privacy policy of our submission service here:&nbsp;
                    <Link
                        href="https://www.emailjs.com/legal/privacy-policy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                    >
                        emailjs.com/legal/privacy-policy
                    </Link>.
                </>
            ),
        },
        {
            title: '3. Analytics',
            content:
                'We may collect anonymous usage data (like page visits) to improve the site. No personal identifiers are tracked or stored.',
        },
        {
            title: '4. Data Security',
            content:
                'Reasonable security measures are in place. No method of transmission or storage is completely secure.',
        },
        {
            title: '5. Questions?',
            content: (
                <>
                    For questions about this policy or your data, email us at&nbsp;
                    <Link href="mailto:support@deftvision.com" underline="hover">
                        support@deftvision.com
                    </Link>.
                </>
            ),
        },
    ];

    return (
        <>
            <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                <a href="/">
                    <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                </a>
            </Box>

            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={5}>
                    <Typography variant="h4" fontWeight={600}>
                        Privacy Policy
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        This policy applies to visitors of the deftvision.io website.<br />
                        Effective: June 17, 2025
                    </Typography>

                    <Stack spacing={4}>
                        {sections.map(({ title, content }, index) => (
                            <Paper key={index} elevation={0} sx={{ p: 3, bgcolor: 'grey.50' }}>
                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {content}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>

                    <Button variant="outlined" onClick={() => navigate('/')}>
                        Back to Site
                    </Button>
                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </>
    );
}
