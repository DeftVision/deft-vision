import { Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function FeatureCheck({ text }) {
    return (
        <Stack direction='row' alignItems='center' spacing={1}>
            <CheckCircleIcon fontSize='small' color='success' />
            <Typography variant='body1'>{text}</Typography>
        </Stack>
    );
}

export default FeatureCheck;