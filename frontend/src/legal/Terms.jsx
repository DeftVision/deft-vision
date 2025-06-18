import { Container, Typography, Button, Stack, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import BackToTop from '../layouts/BackToTop.jsx';
import { Footer } from '../components/index.js';

export default function TermsOfUse() {
    const navigate = useNavigate();

    const sections = [
        {
            title: 'Acceptance of Terms',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    By accessing or using this website, you agree to be bound by these Terms of Use. If you do not agree, do not use this site.
                </Typography>
            )
        },
        {
            title: 'Website Purpose',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    This site is intended to provide information about Deft Vision’s services and serve as a contact point for prospective clients. It is not intended for any transactional or operational purposes beyond those stated.
                </Typography>
            )
        },
        {
            title: 'Intellectual Property',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    All content on this website—including text, graphics, logos, and design elements—is the property of Deft Vision or its licensors. You may not copy, reproduce, or redistribute any part of this site without prior written permission.
                </Typography>
            )
        },
        {
            title: 'Permitted Use',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    You may browse, read, and print materials from this site for your personal, non-commercial use only. Automated access, scraping, or use of bots is strictly prohibited.
                </Typography>
            )
        },
        {
            title: 'No Warranties',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    The content on this site is provided “as is” with no guarantees of accuracy, completeness, or currentness. Deft Vision disclaims any warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose.
                </Typography>
            )
        },
        {
            title: 'Limitation of Liability',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    Deft Vision is not liable for any direct, indirect, incidental, or consequential damages resulting from your use of this site or reliance on its content.
                </Typography>
            )
        },
        {
            title: 'Privacy',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    We collect minimal information (such as contact form submissions) and do not track users or sell data. For more information, see our Privacy Policy.
                </Typography>
            )
        },
        {
            title: 'Changes to Terms',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    These terms may be updated at any time without notice. Continued use of this site after changes are made constitutes acceptance of those changes.
                </Typography>
            )
        },
        {
            title: 'Governing Law',
            content: (
                <Typography sx={{ textAlign: 'start' }}>
                    These terms are governed by the laws of the State of California, without regard to its conflict of law provisions.
                </Typography>
            )
        }
    ];

    return (
        <>
            <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                <a href="/">
                    <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                </a>
            </Box>

            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={5}>
                    <Typography variant="h4" fontWeight={600}>
                        Website Terms of Use
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        These terms apply to all visitors of deftvision.io<br />
                        Terms effective: June 17, 2025
                    </Typography>

                    <Stack spacing={4}>
                        {sections.map(({ title, content }, index) => (
                            <Paper key={index} elevation={0} sx={{ p: 3, bgcolor: 'grey.50' }}>
                                <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                    {title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {content}
                                </Typography>
                            </Paper>
                        ))}
                    </Stack>

                    <Button variant="outlined" onClick={() => navigate('/')}>
                        Back to Site
                    </Button>
                </Stack>
            </Container>

            <Footer />
            <BackToTop />
        </>
    );
}
