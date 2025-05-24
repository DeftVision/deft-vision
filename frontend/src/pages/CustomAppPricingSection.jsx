// components/CustomAppPricingSection.jsx
import { Box, Typography, Stack, Button } from '@mui/material';
import FeatureCheck from '../utils/FeatureCheck';

export default function CustomAppPricingSection() {
    return (
        <Box
            sx={{
                backgroundColor: '#f8fafc',
                py: 7,
                px: 3,
                textAlign: 'center',
                borderRadius: 5,
                boxShadow: 2
            }}
        >
            <Typography variant="h6" fontWeight="bold" mb={2}>
                Starting at $2,000 + Annual License
            </Typography>

            <Typography variant="body1" maxWidth="600px" mx="auto" color="text.secondary" mb={4}>
                Custom, single-tenant apps built to your exact needs. You own the code and control the platform.
            </Typography>

            <Stack spacing={1} alignItems="center" mb={4}>
                <FeatureCheck text="Secure login with role-based access" />
                <FeatureCheck text="Up to 3 custom forms and 4 dashboard widgets" />
                <FeatureCheck text="5 GB encrypted storage included (more available)" />
                <FeatureCheck text="Admin panel and license-based access" />
                <FeatureCheck text="Built for mobile, desktop, and tablet use" />
                <Typography variant="body1" fontStyle="italic" mt={2}>
                    HIPAA compliance and white label setup available on request.
                </Typography>
            </Stack>

            <Button variant="contained" href="/#contact">
                Book a Free Consult
            </Button>
        </Box>
    );
}
