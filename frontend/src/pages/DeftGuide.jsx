import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

const topics = [
    {
        title: "What’s Your Goal for Going Online?",
        path: "/guide/online-objectives",
    },
    {
        title: "Just Need a Link? Start Here.",
        path: "/guide/basic-start",
    },
    {
        title: "How to Prepare Before You Launch",
        path: "/guide/launch-prep",
    },
    {
        title: "What Is a Business Web App?",
        path: "/guide/business-web-app",
    },
    {
        title: "Frontend vs Full Stack — What’s the Difference?",
        path: "/guide/frontend-vs-fullstack",
    },
    {
        title: "What Does Future-Proofing Actually Mean?",
        path: "/guide/future-proofing",
    },
    {
        title: "What Does It Mean to Own Your Site and Code?",
        path: "/guide/code-ownership",
    },
    {
        title: "What to Expect After Launch",
        path: "/guide/post-launch",
    },
    {
        title: "What Is GitHub and Why Do You Share Code Through It?",
        path: "/guide/github-delivery",
    },
    {
        title: "Not Sure What You Need? Start Here.",
        path: "/guide/decision-helper",
    }
];

export default function DeftGuide() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={6} alignItems="center" textAlign="center">
                    <Typography variant="h3" fontWeight={600}>
                        The Deft Guide
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" maxWidth="sm">
                        Understand what you’re getting, what your site can grow into, and what all the terms actually mean — without the noise.
                    </Typography>

                    <Stack spacing={4} sx={{ width: '100%' }}>
                        {topics.map(({ title, path }, index) => (
                            <Box
                                key={index}
                                sx={{
                                    p: 3,
                                    border: '1px solid',
                                    borderColor: 'divider',
                                    borderRadius: 2,
                                    textAlign: 'left',
                                }}
                            >
                                <Typography variant="h6" fontWeight={500}>
                                    {title}
                                </Typography>
                                <Button
                                    component={Link}
                                    to={path}
                                    variant="outlined"
                                    sx={{ mt: 2 }}
                                >
                                    Read Article
                                </Button>
                            </Box>
                        ))}
                    </Stack>
                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </Layout>
    );
}
