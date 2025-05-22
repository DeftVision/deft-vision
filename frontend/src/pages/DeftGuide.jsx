import { Container, Typography, Stack, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

const topics = [
    {
        title: "What Do You Actually Need Online?",
        path: "/guide/what-you-need-to-get-online",
    },
    {
        title: "How to Launch Smart (and What Happens After)",
        path: "/guide/launching-smart",
    },
    {
        title: "What You're Actually Getting Built",
        path: "/guide/understanding-your-build",
    },
    {
        title: "Owning and Receiving Your Site the Right Way",
        path: "/guide/code-ownership-and-delivery",
    },
    {
        title: "What Future-Proofing Actually Means",
        path: "/guide/future-proofing",
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
