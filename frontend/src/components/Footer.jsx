import {Box, Divider, Link, Stack, Typography} from '@mui/material';
import DynamicDeftLogo from '../assets/DynamicDeftLogo.svg?react';

function Footer() {
    return (
        <>
            <Box
                component="footer"
                sx={{
                    backgroundColor: '#FAFAFA',
                    color: '#212121',
                    px: 4,
                    py: 4,
                    borderTop: '1px solid #E0E0E0',
                }}
            >
                <Stack spacing={3} alignItems="center" textAlign="center">
                    <a href='/'>
                        <Box
                            component={DynamicDeftLogo}
                            sx={{
                                width: 64,
                                height: 64,
                                mx: 'auto',
                                my: 2,
                                display: 'block',
                            }}
                        />

                    </a>

                    <Typography variant="subtitle1">
                        Built to grow with your business.
                    </Typography>

                    <Divider sx={{width: '100%', maxWidth: 400}}/>

                    <Stack direction="row" spacing={2} flexWrap="wrap" justifyContent="center">
                        <Link href="/terms" underline="hover" color="inherit">Terms of Service</Link>
                        <Link href="/privacy" underline="hover" color="inherit">Privacy Policy</Link>
                        <Link href="/blog" underline="hover" color="inherit">Blog</Link>
                        <Link href="/faq" underline="hover" color="inherit">FAQ</Link>
                    </Stack>



                    <Typography variant="body2" color="text.secondary" sx={{mt: 2}}>
                        © {new Date().getFullYear()} Deft Vision — Built with focus.
                    </Typography>
                </Stack>
            </Box>
        </>
    );
}

export default Footer;
