import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext'
import {useNavigate} from "react-router-dom";

const form_fields = {
    email: '',
    password: '',
};

export function Login() {
    const [formData, setFormData] = useState(form_fields);
    const navigate = useNavigate();
    const { login } = useAuth();

    useEffect(() => {
        localStorage.clear();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/login`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: { 'Content-Type': 'application/json' },
            });

            const _response = await response.json();
            console.log('Raw response:', _response); // 👈 add this

            if (!response.ok) {
                console.error(_response.message || 'Login failed');
                return;
            }

            localStorage.setItem('token', _response.token);
            localStorage.setItem('currentUser', JSON.stringify(_response.developer));
        } catch (error) {
            console.error('An error occurred during login', error);
        }
    };


    return (
        <Container maxWidth="xs" sx={{mt: 8}}>
            <Box component='form'
                 onSubmit={handleSubmit}
                 sx={{
                     display: 'flex',
                     flexDirection: 'column',
                     alignItems: 'center',
                     gap: 2,
                 }}
            >
                <Typography variant="overline" sx={{textAlign: 'center'}}>
                    Developer Login
                </Typography>
                <TextField
                    type="email"
                    label="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    fullWidth
                />

                <TextField
                    type="password"
                    name="password"
                    label="Password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    fullWidth
                />

                <Button
                    type="submit"
                    variant="contained"
                    sx={{
                        mt: 2,
                        width: '100%',
                        py: 1.5,
                        textTransform: 'none',
                        fontSize: '1rem',
                    }}
                >
                    Login
                </Button>
            </Box>
        </Container>
    );
}


export default Login;