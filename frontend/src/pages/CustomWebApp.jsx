import {Box, Stack, Typography, TextField, Button, Container, List, ListItem } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { sendRequestAccessForm } from '../utils/emailService';


function Contact() {
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
                        <Typography variant="h5" component='h2'>Be the First to Experience Stride</Typography>

                        <Typography variant="body2" color="text.secondary">
                            {/*Stride is an all-in-one platform designed to help you manage and grow your business more efficiently.
                            Right now, we are offering early access to a select group of businesses so we can gather real-world feedback and improve our tools before a wider release.
                            If you join as an early user, you will have a direct influence on the features and experience, and your feedback will help shape the future of Stride.
                            Surveys will be sent to the email you provide, and your honest input is appreciated.
                            As a thank you, you will receive a discount if you decide to continue using Stride after the early access period.
                            Once you submit your request, our team will review it and contact you by email within two business days with next steps.
                            Discounts will be offered if you choose to continue to implement Stride in your business.*/}
                            Stride helps you manage and grow your business. Join our early access group to try new features and share your feedback.
                            You’ll get a discount if you choose to keep using Stride. After you submit your request, we’ll contact you by email within two business days.
                            </Typography>

                        <Box component='form' onSubmit={sendEmail}>
                            <Stack spacing={2}>
                                <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                                <TextField label="Name" name="user_name" aria-label='Your name' fullWidth required />
                                <TextField label="Email" type="email" name="user_email" aria-label='Your email' fullWidth required />
                                <TextField
                                    label="Message"
                                    name="message"
                                    aria-label='Your message'
                                    fullWidth
                                    multiline
                                    rows={4}
                                    placeholder="What kind of problems are you trying to solve with your business operations?"
                                    required
                                />
                            </Stack>
                            <Button type="submit" variant="contained" disabled={isSending} sx={{ mt: 3, mb: 3 }}>
                                {isSending ? 'Sending...' : 'I\'m Ready!'}
                            </Button>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </Box>
    );
}

export default Contact;
