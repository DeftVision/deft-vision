import Layout from '../layouts/Layout.jsx';
import {Box, Button, Container, Stack, Typography} from '@mui/material';
import {Footer} from '../components/index.js'
import PricingSection from './PricingSection'
import BackToTop from '../layouts/BackToTop.jsx';
import {Helmet} from "react-helmet-async";

const features = [
    {
        title: "🛠️ We do all the building",
        description: "Focus on your business, no need to waste time learning a DIY platform.",
    },
    {
        title: "🌐 Look Great Everywhere",
        description: "Your site works beautifully on phones, tablets, and desktops.",
    },
    /*{
        title: "📬 Turn Visitors Into Customers",
        description: "Take advantage of having built-in contact form that will send leads straight to your inbox.",
    },*/
    {
        title: "🔐 Yours to Keep, Forever",
        description: "You get full ownership of your code to expand, change, and host as you please.",
    },
    {
        title: "🌱 A Web App That Grows With You",
        description: "We’ll help you choose the right host that will allow your web application to grow as you do.",
    }
];


export default function BusinessWebApp() {
    return (
        <>
            <Helmet>
                <title>Standard Web App | Deft Vision</title>
                <meta name="description"
                      content="Launch a professional, lead-focused business web app. No subscriptions. You own the code."/>
                <meta property="og:title" content="Standard Web Application | Deft Vision"/>
                <meta property="og:description"
                      content="Launch a professional, lead-focused business web app. No subscriptions. You own the code."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://deftvision.io/services/Standard-web-app"/>
                <meta property="og:image" content="/og-cover.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Business Web App | Deft Vision"/>
                <meta name="twitter:description"
                      content="Launch a professional, lead-focused business web app. No subscriptions. You own the code."/>
                <meta name="twitter:image" content="/og-cover.png"/>
            </Helmet>

            <Layout>
                <Container maxWidth="md" sx={{py: 10, mb: 8}}>
                    <Stack spacing={10} alignItems="center" textAlign="center">

                        {/* Hero */}
                        <Stack spacing={2}>
                            <Typography variant="h3" fontWeight={600}>
                                Single Web Page Application
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                                A real frontend web app — built fast, mobile-ready, and yours forever.
                            </Typography>
                            <Box>
                                <Button variant="contained" size='large' href="/#contact">
                                    Start My Project
                                </Button>
                            </Box>
                        </Stack>

                        {/* Features */}
                        <Stack spacing={3} width="100%" sx={{py: 8}}>
                            <Typography variant="h5" fontWeight={600} textAlign="center">
                                What’s Included
                            </Typography>
                            <Box
                                display="flex"
                                flexWrap="wrap"
                                justifyContent="center"
                                gap={3}
                            >
                                {features.map(({title, description}, i) => (
                                    <Box key={i} display="flex" alignItems="flex-start" width={{xs: '100%', sm: '55%'}}
                                         maxWidth="400px">
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

                        <Box sx={{mb: 6}}>
                            <PricingSection/>
                        </Box>

                    </Stack>
                </Container>

                <Footer/>
                <BackToTop/>
            </Layout>
        </>
    );
}
