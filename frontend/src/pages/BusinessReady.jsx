import Layout from '../layouts/Layout.jsx';
import { Container, Typography, Button, Stack, Box, Divider } from '@mui/material';
import { Footer } from '../components/index.js'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import BackToTop from '../layouts/BackToTop.jsx';

const features = [
    "Responsive single-page layout",
    "SEO-ready and mobile-first",
    "Contact form with email notifications",
    "1 round of updates",
    "Optional 30-min kickoff call",
    "Delivered via GitHub (you own the code)",
    "Support doc + walkthrough",
    "Your choice of hosting provider (free options available)",
];

export default function BusinessReady() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={10} alignItems="center" textAlign="center">

                    {/* Hero */}
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight={600}>
                            Business-Ready SPA
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                            Get a real frontend app — fast, mobile-ready, and built to grow with your business.
                        </Typography>
                        <Button variant="contained" href="#contact">
                            Start My Project
                        </Button>
                    </Stack>

                    {/* Features */}
                    <Stack spacing={3} width="100%">
                        <Typography variant="h5" fontWeight={600} textAlign="center">
                            What’s Included
                        </Typography>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="center"
                            gap={3}
                        >
                            {features.map((feature, i) => (
                                <Box
                                    key={i}
                                    display="flex"
                                    alignItems="flex-start"
                                    width={{ xs: '100%', sm: '45%' }}
                                    maxWidth="400px"
                                >
                                    <CheckCircleIcon color="success" sx={{ mt: '3px', mr: 1 }} />
                                    <Typography variant="body2" fontWeight={500}>
                                        {feature}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Stack>

                    <Stack spacing={2} textAlign="left" maxWidth="sm" mx="auto">
                        <Typography variant="subtitle2" fontWeight={600}>
                            Estimated Timeline
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Most Business-Ready projects are completed in 7–10 business days, depending on content and response time.
                        </Typography>
                    </Stack>


                    {/* Final CTA */}
                    <Divider sx={{ width: '100%', my: 5 }} />
                    <Stack spacing={2} alignItems="center" textAlign="center">
                        <Typography variant="h5" fontWeight={600}>
                            Launch fast. Scale when you're ready.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" maxWidth="sm">
                            No subscriptions. No builders. No support tickets. Just a modern frontend app — ready now, and ready to grow later.
                        </Typography>
                        <Button variant="contained" size="large" href="#contact">
                            Start My Project
                        </Button>
                    </Stack>

                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </Layout>
    );
}
