import { Container, Typography, Stack, Box, Divider } from '@mui/material';
import Layout from '../layouts/Layout';
import BackToTop from '../layouts/BackToTop';
import { Footer } from '../components/index.js';

export default function CodeOwnershipAndDelivery() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10, mb: 8 }}>
                <Stack spacing={6}>
                    <Typography variant="h3" fontWeight={600}>
                        Owning and Receiving Your Site the Right Way
                    </Typography>

                    <Typography variant="subtitle1" color="text.secondary">
                        You own your site and your code — no subscriptions, no lock-in. Here's what that actually means and how your delivery works.
                    </Typography>

                    <Stack spacing={6} divider={<Divider />}>
                        {/* Section 1 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What “owning your code” really means
                            </Typography>
                            <Typography>
                                You have full access to everything that makes your site work. You can download the files, move them, or hand them to another developer. You’re not stuck with a platform.
                            </Typography>
                        </Box>

                        {/* Callout – Tip */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #1976d2', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>💡 Tip:</Typography>
                            <Typography>
                                You don’t need to touch the code — but having access to it puts you in control if things change down the line.
                            </Typography>
                        </Box>

                        {/* Section 2 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                How your code is delivered
                            </Typography>
                            <Typography>
                                Once your project is done, you’ll get access to your source code in a secure repository. From there, you can download it, archive it, or use it however you like.
                            </Typography>
                        </Box>

                        {/* Section 3 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                What makes this different from drag-and-drop builders
                            </Typography>
                            <Typography>
                                Platforms like Wix or Squarespace don’t give you your source code. You’re paying to rent a page. With Deft, you actually own what you’re paying for.
                            </Typography>
                        </Box>

                        {/* Callout – Warning */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #d32f2f', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>⚠️ Warning:</Typography>
                            <Typography>
                                If someone builds your site but won’t give you the code, you don’t really own it. You’re stuck with their system.
                            </Typography>
                        </Box>

                        {/* Section 4 */}
                        <Box>
                            <Typography variant="h5" fontWeight={500} gutterBottom>
                                After delivery, you decide what’s next
                            </Typography>
                            <Typography>
                                You can keep us on for updates, hand it off to someone else, or manage it yourself. You’re not locked into anything — and you’ll never have to rebuild just to switch providers.
                            </Typography>
                        </Box>

                        {/* Final Callout – Summary */}
                        <Box sx={{ p: 3, borderRadius: 2, borderLeft: '4px solid #388e3c', mt: 3, mb: 3 }}>
                            <Typography fontWeight={500}>✅ Key Takeaway:</Typography>
                            <Typography>
                                You’re not buying access — you’re buying ownership. Your site, your rules, and no strings attached.
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
