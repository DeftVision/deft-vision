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
                    <Typography variant='overline'>FAQs</Typography>
                </Box>
            </Container>

            <Footer />
            <BackToTop />
        </>
    );
}