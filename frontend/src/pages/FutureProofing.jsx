import { Container, Typography, Stack, Box, Divider } from '@mui/material';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

export default function FutureProofing() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={6}>
                    <Typography variant="h3" fontWeight={600}>
                        What Future-Proofing Actually Means
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                        You don’t need to predict the future — you just need to avoid boxed-in decisions that cost more later. Here's how we build with flexibility.
                    </Typography>

                    <Stack spacing={6} divider={<Divider />}>
                        {/* Section 1 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What “future-proof” actually means
                            </Typography>
                            <Typography>
                                Your site is built so it can grow, change, or scale — without needing to be rebuilt from scratch. You’re not locked into rigid templates or limited tools.
                            </Typography>
                        </Box>

                        {/* Callout – Tip */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #1976d2', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>💡 Tip:</Typography>
                            <Typography>
                                You don’t need every feature right now. But the platform should allow you to add them without redoing the whole stack.
                            </Typography>
                        </Box>

                        {/* Section 2 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Common upgrades clients make later
                            </Typography>
                            <Stack spacing={1.5} sx={{ pl: 1 }}>
                                <Typography>✓ Add online booking or payment tools</Typography>
                                <Typography>✓ Turn simple forms into secure data flows</Typography>
                                <Typography>✓ Move from a static page to a full site</Typography>
                                <Typography>✓ Add logins or client portals</Typography>
                            </Stack>
                        </Box>

                        {/* Section 3 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                How we build for flexibility
                            </Typography>
                            <Typography>
                                Sites are built with modular components, clean routing, and reusable layouts. Forms and content are structured so they can scale. If you ever need a database or backend tools, it’s ready.
                            </Typography>
                        </Box>

                        {/* Callout – Warning */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #d32f2f', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>⚠️ Warning:</Typography>
                            <Typography>
                                Many off-the-shelf builders can’t scale. If your tools can’t handle secure data, automation, or performance upgrades, you’ll have to start over.
                            </Typography>
                        </Box>

                        {/* Section 4 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                Focus on the next 12 months
                            </Typography>
                            <Typography>
                                You don’t have to plan 5 years ahead. But a smart build should make room for what you might need next — not box you into the current moment.
                            </Typography>
                        </Box>

                        {/* Final Callout – Summary */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #388e3c', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>✅ Key Takeaway:</Typography>
                            <Typography>
                                Future-proofing isn’t about guessing the future — it’s about avoiding dead ends. A smart foundation lets you grow without rebuilding.
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
