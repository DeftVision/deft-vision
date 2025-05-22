import { Container, Typography, Stack, Box, Divider } from '@mui/material';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

export default function WhatYouNeedOnline() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={6}>
                    <Typography variant="h3" fontWeight={600}>
                        What Do You Actually Need Online?
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                        Not everyone needs a full site or app right away. Here’s how to figure out what fits your business today — and what you can grow into later.
                    </Typography>

                    <Stack spacing={6} divider={<Divider />}>
                        {/* Section 1 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Start with your goal
                            </Typography>
                            <Typography>
                                Are you trying to look legit? Get booked? Replace back-and-forth DMs? Different goals call for different solutions.
                            </Typography>
                        </Box>

                        {/* Section 2 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Three types of online presence
                            </Typography>
                            <Stack spacing={1.5} sx={{ pl: 1 }}>
                                <Typography><strong>One-page site:</strong> Simple, fast, and easy to share. Great for getting started.</Typography>
                                <Typography><strong>Multi-page site:</strong> Good for SEO, more info, or blog content.</Typography>
                                <Typography><strong>Web app:</strong> Adds scheduling, logins, secure forms, or custom tools.</Typography>
                            </Stack>
                        </Box>

                        {/* Callout – Tip */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #1976d2', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>💡 Tip:</Typography>
                            <Typography>
                                Most businesses don’t need a full web app on day one. Start lean, then grow as you learn what works.
                            </Typography>
                        </Box>

                        {/* Section 3 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                When less is better
                            </Typography>
                            <Typography>
                                A fast one-page site with one clear message will beat a bloated site every time. Focus on clarity, not features.
                            </Typography>
                        </Box>

                        {/* Section 4 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Avoid buying features you don’t need
                            </Typography>
                            <Typography>
                                If you won’t use something in the next 90 days, don’t build it yet. You can always add later.
                            </Typography>
                        </Box>

                        {/* Callout – Warning */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #d32f2f', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>⚠️ Warning:</Typography>
                            <Typography>
                                Always buy your own domain. If someone else owns it, you don’t control your brand.
                            </Typography>
                        </Box>

                        {/* Section 5 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                You can always grow later
                            </Typography>
                            <Typography>
                                A good site grows with you. Add tools, pages, or custom features as your business scales.
                            </Typography>
                        </Box>

                        {/* Section 6 – Checklist */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Common starter goals
                            </Typography>
                            <Stack spacing={1.2} sx={{ pl: 1 }}>
                                <Typography>✓ I just need a link for my profile or business card</Typography>
                                <Typography>✓ I want people to book me or request a service</Typography>
                                <Typography>✓ I need a contact form to collect leads</Typography>
                                <Typography>✓ I want to look professional — not like a scam</Typography>
                            </Stack>
                        </Box>

                        {/* Final Callout – Summary */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #388e3c', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>✅ Key Takeaway:</Typography>
                            <Typography>
                                Match your website to your real business needs. Skip the fluff, build smart, and upgrade when it actually makes sense.
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
