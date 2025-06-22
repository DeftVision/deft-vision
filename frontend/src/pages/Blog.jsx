import { Box, Button, Container, Stack, Typography } from '@mui/material';
import { Footer } from '../components/index.js';
import BackToTop from '../layouts/BackToTop.jsx';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const MotionBox = motion(Box);
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const sections = [
    {
        heading: 'Better Experience for Your Visitors',
        body: [
            "People have short attention spans. If your website is slow or clunky, they leave. SPAs feel fast and modern. Everything loads right away, and visitors can move between sections instantly. That makes it easier for people to find your products, services, and contact info, which leads to more inquiries and more sales.",
        ],
    },
    {
        heading: 'Easier and Faster to Build',
        body: [
            "SPAs are often quicker to build and manage than traditional websites. Many of the tools used to create SPAs are built to save time and reduce rework. That helps you save money during the development process and makes it easier to update your site in the future.",
        ],
    },
    {
        heading: 'Works Great on Mobile Devices',
        body: [
            "Most people will visit your website on their phone. SPAs are designed to be mobile friendly and respond well on smaller screens. Because they load fewer files and avoid full page refreshes, the experience feels faster and more fluid on mobile devices.",
            "This is especially important for local businesses whose customers are often browsing while on the move.",
        ],
    },
    {
        heading: 'Fast Navigation That Keeps People On Your Site',
        body: [
            "Even if a Single Page Application takes an extra second to load at the beginning, once it's open, everything else is lightning fast. Visitors can click between sections instantly without delays. This keeps them exploring your content and makes it easier for them to decide to work with you.",
        ],
    },
    {
        heading: 'Keeps Customers Engaged',
        body: [
            "SPAs can include modern features like instant updates, interactive forms, and real-time chat. These features make your site feel more alive and personal. When people feel like the website responds to them, they stay longer, come back more often, and are more likely to trust your business.",
        ],
    },
    {
        heading: 'Easy to Keep Updated',
        body: [
            "When you want to change something on your website, it should not feel like a hassle. SPAs are easier to update because the content and design are separated from the layout. This means you or your developer can make changes faster and keep your site fresh without having to start over.",
        ],
    },
    {
        heading: 'Can Still Be Search Engine Friendly',
        body: [
            "Search engine visibility is important. In the past, SPAs had trouble being indexed by search engines. Today, that’s no longer a problem if your site is built using the right tools and techniques. We use methods like server rendering and pre-rendering so search engines can still find and rank your site properly.",
            "You still get the speed and modern features without giving up on search visibility.",
        ],
    },
    {
        heading: 'Grows With Your Business',
        body: [
            "As your business grows, your website should grow with you. SPAs make it easy to add new features later, like online booking, customer portals, or even e-commerce. You don’t need to rebuild from scratch. Your website grows when you’re ready.",
        ],
    },
    {
        heading: 'Conclusion: A Smarter Way to Show Up Online',
        body: [
            "You work hard to grow your business. Your website should help you do that, not get in the way. A Single Page Application is a smart way to build an online presence that feels modern, loads fast, and works on every device.",
            "It helps people find you, trust you, and choose to work with you. And because it’s built to grow with your business, it will keep working for you long after launch.",
            "If you're ready to build something better, we’re here to help you make it happen.",
        ],
    },
];

export default function Blog() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Why SPAs Are Better for Business | Deft Vision</title>
                <meta name="description" content="Explore the benefits of Single Page Applications and why they're better for speed, UX, and growth." />
                <meta property="og:title" content="Why SPAs Are Better for Business | Deft Vision" />
                <meta property="og:description" content="Faster loading. Easier to use. Ready for mobile. Learn why Single Page Applications are the future of business websites." />
                <meta property="og:type" content="article" />
                <meta property="og:image" content="https://deftvision.io/og-cover.png" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Why SPAs Are Better for Business | Deft Vision" />
                <meta name="twitter:description" content="Explore the benefits of SPAs: faster, simpler, and built to grow with your business." />
                <meta name="twitter:image" content="https://deftvision.io/og-cover.png" />
            </Helmet>

            <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                <a href="/">
                    <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                </a>
            </Box>

            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={10} alignItems="center" textAlign="center">
                    <Box sx={{ maxWidth: 700 }}>
                        <Typography variant="h3" fontWeight={600}>
                            Why a Faster, Simpler Website Can Help Your Business Grow
                        </Typography>
                        <Box sx={{ width: 80, height: 4, backgroundColor: '#3DAD4F', mt: 1, mb: 2, mx: 'auto' }} />
                        <Typography variant="subtitle1" color="text.secondary" maxWidth="sm" mx="auto">
                            A fast-loading, mobile-first website isn’t a luxury — it’s a requirement.
                        </Typography>
                        <Typography variant="caption" color="#3DAD4F" display="block" mt={1}>
                            3 min read
                        </Typography>
                    </Box>

                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        sx={{ textAlign: 'left', maxWidth: 700 }}
                    >
                        <Typography paragraph>
                            In today’s digital world, your website is often the first impression people get of your business. Whether you run a home-based business, a local shop, or an online service, having a smooth, fast, and modern website can be the difference between gaining a new customer or losing them to a competitor.
                        </Typography>
                        <Typography paragraph>
                            That’s where something called a Single Page Application (SPA) comes in. SPAs look and feel like a regular website, but they work more like a fast mobile app. They load once and then update in place when a visitor clicks around. That makes everything faster and easier for your users.
                        </Typography>
                        <Typography paragraph>
                            Let’s take a look at how this type of website can give your business an edge.
                        </Typography>
                    </MotionBox>

                    <Stack spacing={10} width="100%" alignItems="center">
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeInUp}
                                style={{ width: '100%', maxWidth: 700 }}
                            >
                                <Box textAlign="left">
                                    <Typography variant="subtitle1" fontWeight={600} sx={{ color: '#3DAD4F', mb: 1 }}>
                                        {section.heading}
                                    </Typography>
                                    {section.body.map((text, idx) => (
                                        <Typography key={idx} paragraph>
                                            {text}
                                        </Typography>
                                    ))}
                                </Box>
                            </motion.div>
                        ))}
                    </Stack>

                    <MotionBox
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={fadeInUp}
                        sx={{ textAlign: 'center' }}
                    >
                        <Stack spacing={2} alignItems="center">
                            <Typography variant="h6">
                                Ready to turn your website into your best sales tool?
                            </Typography>
                            <Button variant="contained" size="large" href="/contact" sx={{ backgroundColor: '#3DAD4F', '&:hover': { backgroundColor: '#36a343' } }}>
                                Let's Build It Together
                            </Button>
                        </Stack>
                    </MotionBox>
                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </>
    );
}
