import React from 'react';
import { Box, Typography } from '@mui/material';
import constructionImg from '../assets/construction.png'; // adjust path if needed
import { keyframes } from '@emotion/react';

// Simple bounce animation
const bounce = keyframes`
    0%, 100% {
        transform: translateY(0) scale(1);
    }
    50% {
        transform: translateY(-8px) scale(1.03);
    }
`;


const UnderConstruction = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                bgcolor: '#f5f5f5',
                padding: 2,
            }}
        >
            <Box
                component="img"
                src={constructionImg}
                alt="Under construction"
                sx={{
                    width: 200,
                    animation: `${bounce} 2s infinite`,
                    filter: 'drop-shadow(0px 6px 12px rgba(0, 0, 0, 0.2))',
                }}

            />
            <Typography variant="h4" mt={4}>
                Step away from the drag-and-drop.
            </Typography>
            <Typography variant="body1" mt={1}>
                We’re building something useful — and staying out of the way until it’s ready.
            </Typography>
        </Box>
    );
};

export default UnderConstruction;
