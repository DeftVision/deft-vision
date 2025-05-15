import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(() =>
        createTheme({
            palette: {
                mode,
                primary: {
                    main: '#3A6EA5', // new soft blue
                    dark: '#2f5a85',
                },
                secondary: {
                    main: '#F48FB1', // optional warm contrast
                },
                background: {
                    default: mode === 'light' ? '#f7f9fc' : '#121212',
                    paper: mode === 'light' ? '#ffffff' : '#1e1e1e',
                },
                text: {
                    primary: mode === 'light' ? '#212121' : '#ffffff',
                    secondary: mode === 'light' ? '#6c757d' : '#bbbbbb',
                },
            },
            typography: {
                fontFamily: 'Roboto, sans-serif',
                h1: {
                    fontWeight: 600,
                    fontSize: '3rem',
                },
                h2: {
                    fontWeight: 500,
                    fontSize: '2.25rem',
                },
                h3: {
                    fontWeight: 500,
                    fontSize: '1.75rem',
                },
                body1: {
                    fontSize: '1rem',
                },
            },
            components: {
                MuiButton: {
                    defaultProps: {
                        variant: 'text',
                        color: 'primary',
                    },
                    styleOverrides: {
                        root: {
                            textTransform: 'none',
                            borderRadius: 8,
                            fontWeight: 500,
                            padding: '8px 16px',
                            boxShadow: 'none',
                            '&:hover': {
                                boxShadow: 'none',
                            },
                        },
                    },
                },
                MuiLink: {
                    styleOverrides: {
                        root: {
                            color: '#3A6EA5',
                            textDecoration: 'none',
                            fontWeight: 500,
                            '&:hover': {
                                textDecoration: 'underline',
                                color: '#2f5a85',
                            },
                        },
                    },
                },
            },
        }), [mode]);

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleColorMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles styles={{ html: { scrollBehavior: 'smooth' } }} />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};
export default ThemeContextProvider;
