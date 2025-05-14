import { Typography, Box, Stack, Paper, Container } from '@mui/material';

const faqs = [
    {
        q: "What’s included?",
        a: "A fully branded, multi-section web app built around your content, features, and customer flow. Includes deployment, responsive layout, scalable code, and SEO-ready structure.",
    },
    {
        q: "How is this different from Quick Deployment?",
        a: "Quick Deployment uses a fixed layout. The Custom Web App is custom-designed from the ground up — layout, logic, and content are all built for your business specifically.",
    },
    {
        q: "How much does it cost?",
        a: "Most projects start at $1,150. Final cost depends on scope, timeline, and complexity. Proposals follow the planning call.",
    },
    {
        q: "What’s the timeline?",
        a: "Most projects take 3–4 weeks depending on feedback and how fast content is provided.",
    },
    {
        q: "Do I own the code?",
        a: "Yes. You get full access and control. Code is delivered via GitHub and all Deft Vision access is removed after handoff unless support continues.",
    },
    {
        q: "Can I request changes later?",
        a: "Yes — ongoing work is billed at $100/hr with a 30-minute minimum. Monthly retainers available if needed.",
    },
];

export default function FAQCustomWebApp() {
    return (
        <Box sx={{ py: 10, backgroundColor: 'grey.50' }}>
            <Container maxWidth="md">
                <Typography variant="h5" fontWeight={600} sx={{ mb: 4 }}>
                    Custom SPA – FAQ
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
