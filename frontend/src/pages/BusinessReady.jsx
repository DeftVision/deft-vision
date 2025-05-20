import Layout from '../layouts/Layout.jsx';
import { Container, Typography, Button, Stack, Box, Divider } from '@mui/material';
import { Footer } from '../components/index.js'
import PricingSection from './PricingSection'
import BackToTop from '../layouts/BackToTop.jsx';

const features = [
    {
        title: "🛠️ We Handle Everything",
        description: "Focus on your business — Deft Vision takes care of the design, build, and delivery. You don’t lift a finger.",
    },
    {
        title: "🌐 Look Great Everywhere",
        description: "Your site works beautifully on phones, tablets, and desktops — professionally polished and SEO-ready from day one.",
    },
    {
        title: "📬 Turn Visitors Into Customers",
        description: "Built-in contact form sends leads straight to your inbox. No extra tools. No monthly charges. Just results.",
    },
    {
        title: "🔐 Yours to Keep, Forever",
        description: "You get full ownership of your site and code — no subscriptions, no platforms, no fine print. Just freedom.",
    },
    {
        title: "🌱 An SPA That Grows With You",
        description: "We’ll help you choose a free or low-cost host that fits your stage — and supports you as your business grows.",
    }
];



export default function BusinessReady() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={10} alignItems="center" textAlign="center">

                    {/* Hero */}
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight={600}>
                            Business-Ready SPA
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                            A real frontend web app — built fast, mobile-ready, and yours forever.
                        </Typography>
                        <Button variant="contained" href="#contact">
                            Start My Project
                        </Button>
                    </Stack>

                    {/* Features */}
                    <Stack spacing={3} width="100%" sx={{ py: 8}} >
                        <Typography variant="h5" fontWeight={600} textAlign="center" >
                            What’s Included
                        </Typography>
                        <Box
                            display="flex"
                            flexWrap="wrap"
                            justifyContent="center"
                            gap={3}
                        >
                            {features.map(({ title, description }, i) => (
                                <Box key={i} display="flex" alignItems="flex-start" width={{ xs: '100%', sm: '55%' }} maxWidth="400px">
                                    <Box>
                                        <Typography variant="body2" fontWeight={600}>
                                            {title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {description}
                                        </Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Stack>

                    <Box sx={{ mb: 6 }}>
                        <PricingSection />
                    </Box>

                </Stack>
            </Container>

            <Footer/>
            <BackToTop />
        </Layout>
    );
}
