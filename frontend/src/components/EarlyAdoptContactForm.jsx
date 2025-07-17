import { Box, Stack, Typography, TextField, Button, Container} from '@mui/material';
import emailjs from '@emailjs/browser';

import { useState } from 'react';
import { sendEarlyAccessForm } from '../utils/emailService';

export default function EarlyAdoptContactForm() {
    const [isSending, setIsSending] = useState(false);

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        // Honeypot check
        if (e.target.EMR.value) {
            setIsSending(false);
            return;
        }

        try {
            const result = await sendEarlyAccessForm(e.target);
            console.log('Email sent!', result);
            alert("Thank you! Your message has been sent.");
        } catch (error) {
            console.error("Email failed:", JSON.stringify(error, null, 2));
            console.error("Email failed:", error?.text || error);
            alert("Oops, something went wrong. Please try again.");
        } finally {
            setIsSending(false);
            e.target.reset(); // Clear the form after sending
        }
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
                        <Typography variant="h5" component='h2'>Be the first to use Deft Therapy!</Typography>

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