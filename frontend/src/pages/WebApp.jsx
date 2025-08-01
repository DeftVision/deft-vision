import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Footer } from '../components/index.js';
import BackToTop from '../layouts/BackToTop.jsx';
import { Helmet } from 'react-helmet-async';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const tiers = [
    {
        id: 'tier1',
        title: 'Single-Page Application',
        description: 'A fast, mobile-ready one-pager built with boilerplate policies, SEO tags, and support.',
        bullets: [
            'Fast-loading and mobile-optimized',
            'Terms, privacy, and SEO-ready',
            'Email or ticket-based support'
        ],
        note: 'Home-based businesses, solo founders, and small service providers.',
        price: {
            original: "$850",
            discounted: "$499",
            until: "August 1st"
        }
    },
    {
        id: 'tier2',
        title: 'Multi-Page Application',
        description: 'Adds About, Services, and Contact pages with SEO enhancements.',
        bullets: [
            'Everything in the Single-Page Application',
            'Additional pages (About, Services, Contact)',
            'Autogenerated SEO files and Search Console setup'
        ],
        note: 'Growing service businesses with more content or locations.',
        price: {
            original: "$1,299",
            discounted: "$899",
            until: "August 1st"
        }
    },
    {
        id: 'tier3',
        title: 'Multi-Page Application + Backend',
        description: 'Includes backend with database, admin login, and secure data handling.',
        bullets: [
            'Everything in the Multi-Page Application',
            'Custom backend with database and login',
            'HIPAA-ready infrastructure'
        ],
        note: 'Professionals with data-heavy forms, portals, or admin needs.',
        price: {
            original: "$2,999",
            discounted: "$2,299",
            until: "August 1st",
            starting: true
        }
    }
];

export default function WebApp() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Standard Web App | Deft Vision</title>
                <meta name="description" content="Launch a professional, lead-focused business web app. No subscriptions. You own the code." />
                <meta property="og:title" content="Standard Web Application | Deft Vision" />
                <meta property="og:description" content="Launch a professional, lead-focused business web app. No subscriptions. You own the code." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://deftvision.io/services/web-app" />
                <meta property="og:image" content="https://deftvision.io/og-cover.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Web Apps For Your Business | Deft Vision" />
                <meta name="twitter:description" content="Web applications that grow with your business. You own the code." />
                <meta name="twitter:image" content="https://deftvision.io/og-cover.png" />
            </Helmet>

            <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                <a href="/">
                    <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                </a>
            </Box>

            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={10} alignItems="center" textAlign="center">
                    <Stack spacing={2}>
                        <Typography variant="h3" fontWeight={600}>
                            Web Page Application
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                            A frontend web app built fast, mobile-ready, and yours forever.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            href="/#contact"
                            sx={{ backgroundColor: '#3DAD4F', '&:hover': { backgroundColor: '#36a343' } }}
                        >
                            Start My Project
                        </Button>
                    </Stack>

                    <Stack spacing={10} width="100%" alignItems="center">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={tier.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 1.0,
                                    delay: 0.4 + index * 0.4,
                                    ease: [0.25, 0.8, 0.25, 1]
                                }}
                                style={{ width: '100%', maxWidth: 700 }}
                            >
                                <Box textAlign="left">
                                    <Typography variant="h5" fontWeight={600} gutterBottom sx={{ color: '#3DAD4F' }}>
                                        {tier.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary" gutterBottom>
                                        {tier.description}
                                    </Typography>

                                    <Stack spacing={1} mt={2} mb={2}>
                                        {tier.bullets.map((bullet, i) => (
                                            <Stack direction="row" alignItems="center" spacing={1} key={i}>
                                                <CheckCircleIcon fontSize="small" sx={{ color: '#3DAD4F' }} />
                                                <Typography variant="body2">{bullet}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>

                                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
                                        {tier.note}
                                    </Typography>

                                    <Box sx={{ mb: 1 }}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ textDecoration: 'line-through' }}
                                        >
                                            {tier.price.starting
                                                ? `Starting at ${tier.price.original}`
                                                : tier.price.original}
                                        </Typography>

                                        <Typography variant="h6" fontWeight={700}>
                                            {tier.price.starting
                                                ? `${tier.price.discounted}+`
                                                : tier.price.discounted}
                                        </Typography>

                                        <Typography variant="caption" color="text.secondary">
                                            Limited-time {tier.price.starting ? 'starting price' : 'pricing'} until {tier.price.until}
                                        </Typography>
                                    </Box>
                                </Box>
                            </motion.div>
                        ))}
                    </Stack>
                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </>
    );
}
