import { Box, Stack, Typography, TextField, Button, Container} from '@mui/material';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { sendContactForm } from '../utils/emailService';

export default function EarlyAdoptContactForm() {
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        // Honeypot check
        if (e.target.website.value) {
            setIsSending(false);
            return;
        }

        sendContactForm(e.target).then(
            (result) => {
                console.log('Email sent!', result.text);
                alert("Thank you! Your message has been sent.");
                setIsSending(false);
            },
            (error) => {
                console.error('Email failed:', error.text);
                alert("Oops, something went wrong. Please try again.");
                setIsSending(false);
            }
        );

        e.target.reset(); // Clear the form after sending
    };

    return (
        <Box id='contact' sx={{ my: 8 }}>
            <Box
                sx={{
                    minHeight: 'auto',
                    pt: 10,
                    bgcolor: 'background.paper',
                }}
            >
                <Container maxWidth='sm'>
                    <Stack spacing={2}>
                        <Typography variant="h5" component='h2'>Be the first to test drive!</Typography>

                        <Typography variant="body2" color="text.secondary">
                            If you want to be one of the first users, drop your info below.
                        </Typography>

                        <Box component='form' onSubmit={sendEmail}>
                            <Stack spacing={2}>
                                <input type="text" name="EMR" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                                <TextField label="Your Name" name="user_name" aria-label='Your name' fullWidth required />
                                <TextField label="Your Email" type="email" name="user_email" aria-label='Your email' fullWidth required />
                                <TextField label="Name of your practice" name="practice_name" aria-label='Practice Name' fullWidth required />
                            </Stack>
                            <Button type="submit" variant="contained" disabled={isSending} sx={{ mt: 3, mb: 3 }}>
                                {isSending ? 'Sending...' : 'Count Me In'}
                            </Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}