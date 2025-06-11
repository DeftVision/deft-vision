import React from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Paper,
    useTheme,
} from "@mui/material";

const demos = [
    {
        type: "Barber Shop",
        image: "/images/barber-demo.png",
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

export default function DemoShowcase() {
    const theme = useTheme();

    return (
        <Box
            id="demo-showcase"
            sx={{
                py: 10,
                // backgroundColor: theme.palette.background.default,
            }}
        >
            <Box px={2}>
                <Typography variant="h4" align="center" gutterBottom>
                    Preview Our Demo Sites
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    sx={{ mb: 6 }}
                >
                    Explore industry-specific designs tailored to real business needs.
                </Typography>

                <Grid container spacing={4} justifyContent="center">
                    {demos.map((demo, i) => (
                        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                            <Paper
                                elevation={3}
                                sx={{
                                    overflow: "hidden",
                                    borderRadius: 2,
                                    transition: "transform 0.2s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                    },
                                }}
                            >
                                <Box
                                    component="a"
                                    href={demo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ display: "block" }}
                                >
                                    <Box
                                        component="img"
                                        src={demo.image}
                                        alt={`${demo.type} demo`}
                                        sx={{
                                            width: "100%",
                                            height: "auto",
                                            display: "block",
                                        }}
                                    />
                                </Box>
                                <Box p={2} textAlign="center">
                                    <Typography variant="h6">{demo.type}</Typography>
                                    <Button
                                        href={demo.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        size="small"
                                        sx={{ mt: 1 }}
                                    >
                                        View Demo
                                    </Button>
                                </Box>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    );
}
