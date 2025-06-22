import {Box, Container, Typography} from '@mui/material';
import {Footer} from "../components/index.js";
import BackToTop from "../layouts/BackToTop.jsx";




export default function Faq () {
    return (
        <>
            <Container maxWidth="xs" sx={{mt: 8}}>
                <Box sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
                    <a href="/">
                        <img src="/images/DarkDeftVisionLogo.svg" alt="Deft Vision logo" style={{ height: 56 }} />
                    </a>
                </Box>
                <Box sx={{ mt: 8 }}>
                    <Typography variant='overline'>Frequently Asked Questions</Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Do I need to buy hosting or a domain?
                    </Typography>
                    <Typography variant="body1">
                        You’ll need a domain, but hosting depends on your setup. If you already have a host like GoDaddy or HostGator, we can work with that. If not, we offer optional cloud hosting on our infrastructure.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        What makes Deft Vision sites different?
                    </Typography>
                    <Typography variant="body1">
                        Our sites are built with clean, modern code — not bulky templates. They're fast, mobile-first, SEO-optimized, and designed to scale with your business.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Can I make changes later?
                    </Typography>
                    <Typography variant="body1">
                        Yes. Your site is built to grow with you. Whether you need more pages, a contact form, or a blog, we can add features as you’re ready.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        Do you offer subscriptions?
                    </Typography>
                    <Typography variant="body1">
                        No subscriptions are required. You own your site. Optional monthly hosting or support retainers are available if you need them.
                    </Typography>
                </Box>

                <Box sx={{ mt: 4 }}>
                    <Typography variant="h6" gutterBottom>
                        What is SEO?
                    </Typography>
                    <Typography variant="body1">
                        SEO stands for Search Engine Optimization. It helps your site get found on Google. All sites from Deft Vision include baseline SEO setup.
                    </Typography>
                </Box>

            </Container>

            <Footer />
            <BackToTop />
        </>
    );
}