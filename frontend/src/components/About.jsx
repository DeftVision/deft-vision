import { Box, Stack, Typography } from '@mui/material';

export default function About() {
    return (
        <Box id="about" sx={{ my: 10, px: 2 }}>
            <Stack spacing={2}>
                <Typography variant="h5">
                    Websites for businesses that want more than a template.
                </Typography>

                <Typography variant="body1" color="text.secondary">
                    Fast, mobile-ready, and built to match your brand. Full access, no subscriptions, no lock-in.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    Need updates later? You own the code. Deft Vision can help when you’re ready.
                </Typography>
            </Stack>
        </Box>
    );
}
