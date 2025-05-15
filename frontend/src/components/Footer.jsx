import { Box, Stack, Typography, Link, Divider } from '@mui/material';
import DeftLogo from '../assets/DeftVisionSymbol-old.svg?react';

function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: '#FAFAFA',
                color: '#212121',
                px: 4,
                py: 6,
                borderTop: '1px solid #E0E0E0',
            }}
        >
            <Stack spacing={3} alignItems="center" textAlign="center">
                <DeftLogo style={{ width: 48, height: 48, filter: 'drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.4))' }} />

                <Typography variant="subtitle1">
                    Professional SPAs. Built fast. Priced right.
                </Typography>

                <Divider sx={{ width: '100%', maxWidth: 400 }} />

                <Stack direction="row" spacing={2}>
                    <Link href="/terms" underline="hover" color="inherit" rel="noopener noreferrer">
                        Terms of Service
                    </Link>
                    <Link href="/privacy" underline="hover" color="inherit">
                        Privacy Policy
                    </Link>
                    <Link href="/faq" target="_blank" underline="hover" color="inherit">
                        FAQ
                    </Link>
                </Stack>


                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    © {new Date().getFullYear()} Deft Vision — Built with focus.
                </Typography>
            </Stack>
        </Box>
    );
}

export default Footer;
