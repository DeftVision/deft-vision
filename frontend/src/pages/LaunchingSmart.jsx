import { Container, Typography, Stack, Box, Divider } from '@mui/material';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

export default function LaunchingSmart() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={6}>
                    <Typography variant="h3" fontWeight={600}>
                        How to Launch Smart (and What Happens After)
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                        A smooth launch is about planning, not luck. Here’s what to prepare, what to expect on day one, and what comes next.
                    </Typography>

                    <Stack spacing={6} divider={<Divider />}>
                        {/* Section 1 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What to prepare before launch
                            </Typography>
                            <Stack spacing={1.5} sx={{ pl: 1 }}>
                                <Typography>✓ Content: services, bio, pricing, contact info</Typography>
                                <Typography>✓ Domain: make sure you own and can manage it</Typography>
                                <Typography>✓ Forms or booking tools: make sure they’re connected and working</Typography>
                                <Typography>✓ Professional email (optional): for contact or outbound links</Typography>
                                <Typography>✓ Mobile layout: check it on your phone before go-live</Typography>
                            </Stack>
                        </Box>

                        {/* Callout – Tip */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #1976d2', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>💡 Tip:</Typography>
                            <Typography>
                                Keep a short list of edits you'll likely want after launch — pricing, wording, typos, etc. Plan for tweaks, not perfection.
                            </Typography>
                        </Box>

                        {/* Section 2 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What to expect on launch day
                            </Typography>
                            <Stack spacing={1.5} sx={{ pl: 1 }}>
                                <Typography>✓ Your site may take a few hours to appear everywhere (DNS propagation)</Typography>
                                <Typography>✓ You might spot small things to fix once people start using it</Typography>
                                <Typography>✓ You should share it right away — social, email, and your Google Business profile</Typography>
                            </Stack>
                        </Box>

                        {/* Callout – Warning */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #d32f2f', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>⚠️ Warning:</Typography>
                            <Typography>
                                Don’t wait days or weeks to share your link. A site nobody sees doesn’t help you.
                            </Typography>
                        </Box>

                        {/* Section 3 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What to do after you’re live
                            </Typography>
                            <Stack spacing={1.5} sx={{ pl: 1 }}>
                                <Typography>✓ Make sure form submissions or bookings are working</Typography>
                                <Typography>✓ Update any missed details (hours, phone number, service areas)</Typography>
                                <Typography>✓ Ask 1–2 trusted people to test it for clarity and bugs</Typography>
                                <Typography>✓ Keep an eye on how visitors are using the site — what’s getting clicks?</Typography>
                            </Stack>
                        </Box>

                        {/* Final Callout – Summary */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #388e3c', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>✅ Key Takeaway:</Typography>
                            <Typography>
                                Launching isn’t a finish line — it’s a kickoff. Prep smart, go live with confidence, and make small improvements after you're up.
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
