import { Box, Fab, useScrollTrigger, Zoom } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function BackToTop() {
    const trigger = useScrollTrigger({ threshold: 300 });

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Zoom in={trigger}>
            <Box
                role="presentation"
                sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1200 }}
            >
                <Fab color="primary" size="small" onClick={handleClick} aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
}
