import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
    Box,
    Typography,
    Avatar,
    useTheme,
    Paper,
    Stack,
} from "@mui/material";

const testimonials = [
    {
        logo: "/images/4ecc-logo.png",
        image: "/images/4ecc.png",
        url: "https://4everconcretecoatings.com",
        quote: "I needed a professional site up fast. I picked the colors, images, and text I wanted, and Deft did the rest. Super smooth process.",
        customer: "Andrew, 4ever Concrete Coatings",
    }/*,
    {
        logo: "/images/therapy-logo.png",
        image: "/images/therapy-old.png",
        url: "https://gabriel-barrett.com",
        quote: "Professional, efficient, and friendly. A joy to work with.",
        customer: "Maria Lopez, Founder of BrightPath",
    },
    {
        logo: "/images/gym-logo.png",
        image: "/images/gym.png",
        url: "https://gabriel-barrett.com",
        quote: "Outstanding support and great results. Five stars!",
        customer: "Liam Chen, Manager at ZenSolutions",
    },*/
];

const Portfolio = () => {
    const theme = useTheme();

    return (
        <Box
            id="portfolio"
            sx={{
                py: 10,
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Box px={2}>
                <Typography variant="h4" align="center" gutterBottom>
                    What Clients Are Saying
                </Typography>

                <Box width="100%" maxWidth="900px" mx="auto" overflow="hidden" mt={4}>
                    <Carousel
                        autoPlay
                        infiniteLoop
                        showThumbs={false}
                        showStatus={false}
                        showIndicators={false}
                        interval={10000}
                    >
                        {testimonials.map((testimonial, index) => (
                            <Box
                                key={index}
                                display="flex"
                                flexDirection={{ xs: "column", md: "row" }}
                                alignItems="center"
                                justifyContent="center"
                                gap={4}
                                px={2}
                            >
                                {/* Screenshot */}
                                <Paper
                                    elevation={3}
                                    sx={{
                                        borderRadius: 2,
                                        overflow: "hidden",
                                        width: { xs: "100%", md: 320 },
                                        flexShrink: 0,
                                    }}
                                >
                                    <Box
                                        component="a"
                                        href={testimonial.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ display: "block" }}
                                    >
                                        <Box
                                            component="img"
                                            src={testimonial.image}
                                            alt={`${testimonial.customer} site`}
                                            sx={{
                                                width: "100%",
                                                height: "auto",
                                                display: "block",
                                                transition: "transform 0.2s ease-in-out",
                                                "&:hover": {
                                                    transform: "scale(1.01)",
                                                },
                                            }}
                                        />
                                    </Box>
                                </Paper>

                                {/* Quote + customer + logo */}
                                <Stack
                                    spacing={2}
                                    alignItems={{ xs: "center", md: "flex-start" }}
                                    textAlign={{ xs: "center", md: "left" }}
                                    maxWidth={400}
                                >
                                    <Typography variant="h6" fontStyle="italic">
                                        “{testimonial.quote}”
                                    </Typography>
                                    <Typography variant="subtitle2" color="text.secondary">
                                        — {testimonial.customer}
                                    </Typography>
                                    <Avatar
                                        src={testimonial.logo}
                                        alt={testimonial.customer}
                                        variant="square"
                                        sx={{
                                            width: 80,
                                            height: 80,
                                            mt: 1,
                                        }}
                                    />
                                </Stack>
                            </Box>
                        ))}
                    </Carousel>
                </Box>
            </Box>
        </Box>
    );
};

export default Portfolio;
