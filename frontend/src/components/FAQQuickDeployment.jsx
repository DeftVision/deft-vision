import { Typography, Box, Stack, Paper, Container } from '@mui/material';

const faqs = [
    {
        q: "What’s included?",
        a: "A responsive, SEO-ready single-page app built for quick deployment. Includes contact form, hosting help, and one round of revisions.",
    },
    {
        q: "How much does it cost?",
        a: "$500 flat. No subscription. You own the code.",
    },
    {
        q: "What’s the turnaround time?",
        a: "Most Quick Deploy projects are completed in 7–10 business days depending on response time and content readiness.",
    },
    {
        q: "Can I scale this later?",
        a: "Yes. It’s a real frontend app — not a static site. It can be upgraded to a full-stack web app when you're ready.",
    },
    {
        q: "What’s the support model?",
        a: "Bug fixes are covered. Ongoing support is $100/hr, with optional $10/month retainer for basic upkeep.",
    },
];

export default function FAQQuickDeployment() {
    return (
        <Box sx={{ py: 10, backgroundColor: 'grey.50' }}>
            <Container maxWidth="md">
                <Typography variant="h5" fontWeight={600} sx={{ mb: 4 }}>
                    Quick Deployment – FAQ
                </Typography>
                <Stack spacing={4}>
                    {faqs.map(({ q, a }, index) => (
                        <Paper
                            key={index}
                            elevation={2}
                            sx={{
                                p: 3,
                                borderRadius: 2,
                                boxShadow: 2,
                                border: '1px solid',
                                borderColor: 'divider',
                                backgroundColor: 'background.paper',
                            }}
                        >
                            <Typography variant="h6" fontWeight={600} gutterBottom>
                                {q}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {a}
                            </Typography>
                        </Paper>
                    ))}
                </Stack>
            </Container>
        </Box>
    );
}
