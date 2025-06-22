import {Box, Button, Container, TextField, Typography, FormControlLabel, Switch} from '@mui/material';
import {useState} from 'react'

const form_fields = {
    faqTitle: '',
    faqText: '',
}

export default function ManageFaq() {
    const [formData, setFormData] = useState(form_fields)


    return (
        <>
            <Container maxWidth="xs" sx={{mt: 8}}>
                <Box component='form'
                     // onSubmit={handleSubmit}
                     sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         alignItems: 'center',
                         gap: 2,
                     }}
                >
                    <Typography variant='overline'>FAQ Manager</Typography>

                    <TextField
                        type="text"
                        label=""
                        value={formData.faqText}
                        onChange={(e) => setFormData({...formData, faqText: e.target.value})}
                        fullWidth
                    />

                    <TextField
                        type="text"
                        label="Entry"
                        value={formData.faqText}
                        onChange={(e) => setFormData({...formData, faqText: e.target.value})}
                        multiline={true}
                        fullWidth
                    />

                    <Button variant='outlined'>Submit</Button>
                </Box>
            </Container>
        </>
    );
}