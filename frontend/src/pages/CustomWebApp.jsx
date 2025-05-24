import Layout from '../layouts/Layout.jsx';
import {Box, Button, Container, Stack, Typography} from '@mui/material';
import {Footer} from '../components/index.js';
import BackToTop from '../layouts/BackToTop.jsx';
import {Helmet} from "react-helmet-async";
import CustomAppPricingSection from '../pages/CustomAppPricingSection';


const features = [
    {
        title: "🔒 Single-Tenant & Secure",
        description: "Your app is fully isolated, secure hosting, private data, and full control.",
    },
    {
        title: "🧩 Modular & Customizable",
        description: "Start with a baseline and add exactly what you need — forms, dashboards, and more.",
    },
    {
        title: "📁 Built-In File Storage",
        description: "Includes encrypted file uploads with scalable storage options.",
    },
    {
        title: "🎛️ Admin & Role Management",
        description: "Manage users and permissions with built-in admin tools.",
    },
    {
        title: "🧰 Optional Features Available",
        description: "Enable MFA, notifications, scheduling, PDF export, and API integrations as needed.",
    },
    {
        title: "⚙️ White Label Support",
        description: "Brand it your way — custom domain, email, and interface.",
    },
    {
        title: "🩺 HIPAA-Ready Architecture",
        description: "HIPAA-compliant builds available. Scoped and priced separately.",
    }
];




const CustomWebApp = () => {
    return (
        <>
            <Helmet>
                <title>Standard Web App | Deft Vision</title>
                <meta name="description"
                      content="A full stack web application, with admin tools, cloud hosting, and data management."/>
                <meta property="og:title" content="Business Web App | Deft Vision"/>
                <meta property="og:description"
                      content="A full stack web application, with admin tools, cloud hosting, and data management."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://deftvision.io/services/custom-web-app"/>
                <meta property="og:image" content="/og-cover.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="Custom Web Application | Deft Vision"/>
                <meta name="twitter:description"
                      content="A full stack web application, with admin tools, cloud hosting, and data management."/>
                <meta name="twitter:image" content="/og-cover.png"/>
            </Helmet>
            <Layout>
                <Container maxWidth="md" sx={{py: 10, mb: 8}}>
                    <Stack spacing={10} alignItems='center' textAlign='center'>

                        {/* Hero */}
                        <Stack spacing={2}>
                            <Typography variant="h3" fontWeight={600}>
                                A Custom Web App Built Around Your Business
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                                Get exactly what your business needs with secure login, admin controls, and cloud hosted tools to manage data and workflows.
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



                        <Box sx={{ mb: 6 }}>
                            <CustomAppPricingSection />
                        </Box>


                    </Stack>
                </Container>
                <Footer/>
                <BackToTop/>
            </Layout>
        </>
    );
};

export default CustomWebApp;