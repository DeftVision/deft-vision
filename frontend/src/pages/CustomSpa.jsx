import Layout from '../layouts/Layout.jsx';
import { Footer } from '../components/index.js'
import BackToTop from '../layouts/BackToTop.jsx';
import {
    Container,
    Typography,
    Stack,
    Box,
    Divider,
    Button,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const features = [
    'Built-from-scratch layout — not template-based',
    'Responsive design for desktop and mobile',
    'Custom sections, structure, and styling',
    'Email form with notifications',
    'Delivered via GitHub — you own the code',
    'Scalable: can evolve into a full-stack app',
    'Support doc + walkthrough',
    'Content consultation included',
];

export default function CustomSpa() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={10} alignItems="center" textAlign="center">

                    {/* Hero */}
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight={600}>
                            Custom SPA
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                            Designed from the ground up for your brand — structure, style, and layout tailored to your content.
                        </Typography>
                        <Button variant="contained" href="/#contact">
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

                    {/* Scope Note & Timeline */}
                    <Stack spacing={2} textAlign="left" maxWidth="sm" mx="auto">
                        <Typography variant="subtitle2" fontWeight={600}>
                            What “Custom” Means
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            This product includes custom layout, styling, and structure tailored to your business — no pre-made templates. However, it does not include complex animation, app-style interactivity, or advanced frontend effects. If your request requires these features, a separate quote will be provided.
                        </Typography>

                        <Typography variant="subtitle2" fontWeight={600} sx={{ pt: 2 }}>
                            Estimated Timeline
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Most Custom SPA projects are completed within 2–3 weeks, depending on content, scope, and response time.
                        </Typography>
                    </Stack>


                    {/* Final CTA */}
                    <Divider sx={{ width: '100%', my: 5 }} />
                    <Stack spacing={2} alignItems="center" textAlign="center">
                        <Typography variant="h5" fontWeight={600}>
                            Built for you. Ready to grow.
                        </Typography>
                        <Typography variant="body1" color="text.secondary" maxWidth="sm">
                            Whether you're just starting or planning to scale, a custom SPA gives you a real foundation — ready to expand into full-stack when you are.
                        </Typography>
                        <Button variant="contained" size="large" href="/#contact">
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
