import React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import { Footer, FaqData as faqData} from "../components/index";
import BackToTop from "../layouts/BackToTop";
import Layout from "../layouts/Layout";



function FAQContent() {
    return (
        <>
            <Container maxWidth="md" sx={{ py: 6 }}>
                <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                    <a href="/">
                        <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                    </a>
                </Box>
                <Typography variant="h4" component="h1" gutterBottom>
                    Frequently Asked Questions
                </Typography>

                {faqData.map((item, index) => (
                    <Box key={index} sx={{ mb: 5 }}>
                        <Typography
                            variant="h6"
                            component="h2"
                            sx={{ fontWeight: 600, mb: 1 }}
                        >
                            {item.question}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 2 }}>
                            {item.answer}
                        </Typography>
                        {index < faqData.length - 1 && <Divider />}
                    </Box>
                ))}
            </Container>
            <Footer />
            <BackToTop/>
        </>
    );
}

export default function FAQ() {
    return (
        <Layout>
            <FAQContent />
        </Layout>
    );
}