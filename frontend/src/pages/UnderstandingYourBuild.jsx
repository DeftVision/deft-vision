import { Container, Typography, Stack, Box, Divider } from '@mui/material';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

export default function UnderstandingYourBuild() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={6}>
                    <Typography variant="h3" fontWeight={600}>
                        What You're Actually Getting Built
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                        Not all websites are the same. This guide breaks down what you're really getting — and when you might need something more than a basic page.
                    </Typography>

                    <Stack spacing={6} divider={<Divider />}>
                        {/* Section 1 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Website vs Web App
                            </Typography>
                            <Stack spacing={1.5} sx={{ pl: 1 }}>
                                <Typography><strong>Website:</strong> Pages with info, contact forms, and links. Great for showing who you are and what you offer.</Typography>
                                <Typography><strong>Web app:</strong> Interactive tools — scheduling, portals, dashboards, secure logins, and data workflows.</Typography>
                            </Stack>
                        </Box>

                        {/* Callout – Tip */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #1976d2', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>💡 Tip:</Typography>
                            <Typography>
                                You can launch with a simple site first — and upgrade to app-like features when it makes sense. You don’t need to build it all at once.
                            </Typography>
                        </Box>

                        {/* Section 2 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What the frontend actually is
                            </Typography>
                            <Typography>
                                The frontend is what your visitors see — your layout, colors, buttons, text, and interactions. It’s the “face” of your site.
                            </Typography>
                        </Box>

                        {/* Section 3 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What the backend does
                            </Typography>
                            <Typography>
                                The backend handles the work behind the scenes — storing form data, managing logins, and handling anything private or secure.
                            </Typography>
                        </Box>

                        {/* Callout – Warning */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #d32f2f', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>⚠️ Warning:</Typography>
                            <Typography>
                                If you’re dealing with sensitive info (health, payment, legal), you’ll need a backend and secure workflows — not just a contact form.
                            </Typography>
                        </Box>

                        {/* Section 4 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                When to consider a full-stack build
                            </Typography>
                            <Typography>
                                You’ll want a backend when you need to store or protect user data, automate workflows, or offer any kind of login experience. Think: scheduling, uploads, secure notes, or anything more than “read-only” pages.
                            </Typography>
                        </Box>

                        {/* Final Callout – Summary */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #388e3c', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>✅ Key Takeaway:</Typography>
                            <Typography>
                                A “site” and an “app” aren’t the same thing. You’re getting a setup that fits your business today — with the right foundation to scale up later.
                            </Typography>
                        </Box>
                    </Stack>
                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </Layout>
    );
}
