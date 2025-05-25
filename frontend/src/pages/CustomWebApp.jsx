import {Box, Stack, Typography, TextField, Button, Container, List, ListItem } from '@mui/material';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import {Footer} from "../components/index";
import Layout from "../layouts/Layout";
import BackToTop from "../layouts/BackToTop";
import {sendRequestAccessForm} from "../utils/emailService";


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

        sendRequestAccessForm(e.target).then(
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
        <Layout>
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
                                Stride helps you manage and grow your business. Join our early access group to try new features and share your feedback.
                                You’ll get a discount if you choose to keep using Stride. After you submit your request, we’ll contact you by email within two business days.
                            </Typography>

                            <Box component='form' onSubmit={sendEmail}>
                                <Stack spacing={2}>
                                    <input type="text" name="website" style={{ display: 'none' }} tabIndex="-1" autoComplete="off" />
                                    <TextField label="Name" name="user_name" aria-label='Your name' fullWidth required />
                                    <TextField label="Email" type="email" name="user_email" aria-label='Your email' fullWidth required />
                                    <TextField label="Company" type="text" name="company_name" aria-label='Your Company Name' fullWidth required />
                                    <TextField label="Industry" type="text" name="user_industry" aria-label='Your Companys Industry' fullWidth required />
                                    <TextField label="Employee Count" type="number" name="employee_count" aria-label='The Number of Employees' fullWidth required />
                                    <TextField
                                        label="Message"
                                        name="message"
                                        aria-label='Your message'
                                        fullWidth
                                        multiline
                                        rows={4}
                                        placeholder="What tools are you looking for to increase the efficiency of your business?"
                                        required
                                    />
                                </Stack>
                                <Button type="submit" variant="contained" disabled={isSending} sx={{ mt: 3, mb: 3 }}>
                                    {isSending ? 'Sending...' : 'I\'m Ready!'}
                                </Button>
                            </Box>
                        </Stack>
                    </Container>
                    <Footer/>
                    <BackToTop/>
                </Box>
            </Box>
        </Layout>
    );
}

export default Contact;
