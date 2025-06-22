import {Box, Button, Stack, TextField, Typography} from '@mui/material';


export default function Faq() {



    return (
    <>
        <Box>
            <Box>
                <Stack direction='column' spacing={2}>
                    <Typography>FAQ</Typography>
                    <TextField
                        type="text"
                        label="Entry"
                        value={formData.entry}
                        onChange={(e) => setFormData({...formData, entry: e.target.value})}
                        fullWidth
                    />
                    <Button variant='outlined'>Add</Button>
                </Stack>
            </Box>
        </Box>
    </>
    );
}