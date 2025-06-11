import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import DevicesIcon from '@mui/icons-material/Devices';
import LockIcon from '@mui/icons-material/Lock';
import BallotIcon from '@mui/icons-material/Ballot';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GroupsIcon from '@mui/icons-material/Groups';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const capabilities = [
    {
        icon: <DevicesIcon color="primary" fontSize="large" />,
        title: 'Mobile-Friendly Design',
        description: 'Built to look and work great on phones, tablets, and desktops.',
    },
    {
        icon: <LockIcon color="primary" fontSize="large" />,
        title: 'Secure Logins',
        description: 'Protect your data with login systems using Firebase or JWT.',
    },
    {
        icon: <BallotIcon color="primary" fontSize="large" />,
        title: 'Smart Forms',
        description: 'Multi-step forms with logic, validation, and custom rules.',
    },
    {
        icon: <DashboardIcon color="primary" fontSize="large" />,
        title: 'Admin Dashboards',
        description: 'See users, metrics, or tasks in clean dashboard views.',
    },
    {
        icon: <CloudUploadIcon color="primary" fontSize="large" />,
        title: 'File Uploads',
        description: 'Securely store files with drag-and-drop uploads to the cloud.',
    },
    {
        icon: <GroupsIcon color="primary" fontSize="large" />,
        title: 'Role-Based Access',
        description: 'Show different views and features based on user roles.',
    },
    {
        icon: <PaymentIcon color="primary" fontSize="large" />,
        title: 'Stripe Payments',
        description: 'Accept one-time or recurring payments directly in your app.',
    },
    {
        icon: <LocalHospitalIcon color="primary" fontSize="large" />,
        title: 'HIPAA-Ready Options',
        description: 'Custom features for therapists, LCSWs, or healthcare workflows.',
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
        },
    }),
};

export default function Capabilities() {
    return (
        <Box id="capabilities" sx={{ py: 10, backgroundColor: 'background.default' }}>
            <Container maxWidth="lg">
                <Typography variant="h3" align="center" gutterBottom>
                    What We Build for You
                </Typography>
                <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
                    Features we can include in your custom website or platform.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {capabilities.map((cap, index) => (
                        <Grid item xs={12} sm={6} md={4} key={cap.title}>
                            <motion.div
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={fadeUp}
                            >
                                <Paper
                                    elevation={2}
                                    sx={{
                                        p: 4,
                                        borderRadius: 3,
                                        height: '100%',
                                        textAlign: 'center',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-6px)',
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <Box>{cap.icon}</Box>
                                    <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                                        {cap.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {cap.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
