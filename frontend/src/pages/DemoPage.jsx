import { useParams, Navigate } from "react-router-dom";
import {
    Box,
    Typography,
    Container,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Paper,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const demos = [
    {
        type: "Barber Shop",
        image: "/images/barber-demo.png", // Replace with real image or use fallback
        url: "https://demo.deftvision.io/barber",
    },
    {
        type: "Landscaper",
        image: "/images/landscaper-demo.png",
        url: "https://demo.deftvision.io/landscaper",
    },
    {
        type: "Handyman",
        image: "/images/handyman-demo.png",
        url: "https://demo.deftvision.io/handyman",
    },
    {
        type: "Real Estate Agent",
        image: "/images/realestate-demo.png",
        url: "https://demo.deftvision.io/realestate",
    },
    {
        type: "Therapist",
        image: "/images/therapist-demo.png",
        url: "https://demo.deftvision.io/therapist",
    },
];


export default function DemoPage() {
    const { industry } = useParams();
    const demo = demoContent[industry];

    if (!demo) return <Navigate to="/" replace />;

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="md">
                <Typography variant="h3" align="center" gutterBottom>
                    {demo.title}
                </Typography>

                <Paper
                    elevation={3}
                    sx={{
                        overflow: "hidden",
                        borderRadius: 2,
                        mb: 6,
                    }}
                >
                    <Box
                        component="img"
                        src={demo.image || "/images/demo-placeholder.png"}
                        alt={`${demo.type} demo`}
                        loading="lazy"
                        sx={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                            objectFit: "cover",
                        }}
                    />

                </Paper>

                <Typography variant="h5" gutterBottom>
                    Key Features
                </Typography>

                <List>
                    {demo.features.map((feature, i) => (
                        <ListItem key={i} disablePadding>
                            <ListItemIcon>
                                <CheckCircleOutlineIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                        </ListItem>
                    ))}
                </List>

                <Box textAlign="center" mt={6}>
                    <Button variant="contained" size="large" href="#contact">
                        Start with This Template
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
