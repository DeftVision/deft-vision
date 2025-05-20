// components/PricingSection.jsx
import { Box, Typography, Stack, Button } from '@mui/material';

export default function PricingSection() {
    return (
        <Box
            sx={{
                backgroundColor: '#f8fafc', // Soft blue-gray
                py: 7,
                px: 3,
                textAlign: 'center',
                borderRadius: 5,
                boxShadow: 2
            }}
        >
            <Typography variant="h6" fontWeight="bold" mb={2}>
                Launch Price: $500 <Typography component="span" fontWeight={400}>(Normally $850)</Typography>
            </Typography>

            <Typography variant="body1" maxWidth="600px" mx="auto" color="text.secondary" mb={4}>
                To celebrate your launch, we’re offering the Business-Ready site at a reduced price for a limited time.
            </Typography>

            <Stack spacing={1} alignItems="center" mb={4}>
                <Typography variant="body1">✅ A modern, mobile-ready frontend site</Typography>
                <Typography variant="body1">✅ Delivered within 5–7 business days from kickoff</Typography>
                <Typography variant="body1">✅ Full ownership — no builder lock-ins or hidden fees</Typography>
                <Typography variant="body1">This offer ends <strong>August 1</strong> and won’t be extended.</Typography>
            </Stack>

            <Button variant="contained" href="/#contact">
                Start My Project
            </Button>
        </Box>
    );
}
