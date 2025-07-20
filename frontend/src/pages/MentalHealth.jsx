import React from 'react';
import {
    Box,
    Container,
    Typography,
    Button, Stack
} from '@mui/material';

import { Footer, EarlyAdoptContactForm } from "../components/index.js";
import BackToTop from "../layouts/BackToTop.jsx";
import Layout from "../layouts/Layout.jsx";

function MentalHealthContent() {
    return (
        <>
            <Box sx={{ bgcolor: '#ffffff', py: { xs: 8, sm: 10 } }}>
                <Container maxWidth="md">
                    <Box sx={{ mb: 4 }}>
                        <a href="/">
                            <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                        </a>
                    </Box>

                    <Stack spacing={2}>
                        <Typography variant="h4" gutterBottom>
                            Modern EMR/EHR Software for Mental Health Professionals
                        </Typography>

                        <Typography variant="body1">
                            <strong>Deft Therapy</strong> is software currently in development, built specifically for therapists, counselors, and mental health professionals.
                        </Typography>

                        <Typography variant="body1">
                            The goal is to create an affordable, secure, and intuitive system with the tools you need to manage a practice of any size.
                        </Typography>

                        <Typography variant="body1">
                            Several core features are already in place. To ensure the software truly supports your workflow and helps make your practice more efficient, cost-effective, and easier to run, we are gathering feedback from clinicians who use this kind of software every day.
                        </Typography>

                        <Typography variant="body1">
                            This is your opportunity to help shape something better from the beginning.
                        </Typography>
                    </Stack>

                    <Box sx={{ mt: 4 }}>
                        <Button
                            variant="contained"
                            href="https://forms.office.com/r/ir4iRZ6PDU?origin=lprLink"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                backgroundColor: '#c55429',
                                '&:hover': { backgroundColor: '#b24a22' },
                                px: 4,
                                py: 1.5
                            }}
                        >
                            Take the Therapist Survey
                        </Button>
                    </Box>

                    <Typography variant="caption" color="text.secondary" sx={{ mt: 2, display: 'block' }}>
                        No spam. No sales pitch. Just building something better with your input.
                    </Typography>

                </Container>
            </Box>
            <EarlyAdoptContactForm />

            <Footer />
            <BackToTop />
        </>
    );
}

export default function MentalHealth() {
    return (
        <Layout>
            <MentalHealthContent />
        </Layout>
    )
}

