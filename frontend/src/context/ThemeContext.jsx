import { createContext, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { GlobalStyles } from '@mui/material';

export const ThemeContext = createContext();

const lightModeColors = {
    primary: '#F06449',
    primaryDark: '#C54B35',
    secondary: '#9B2BCB',
    textPrimary: '#222222',
    textSecondary: '#5c5c5c',
    backgroundDefault: '#FFF6F1',
    backgroundPaper: '#ffffff',
};

const darkModeColors = {
    primary: '#F06449',
    primaryDark: '#C54B35',
    secondary: '#9B2BCB',
    textPrimary: '#F5F5F5',
    textSecondary: '#BBBBBB',
    backgroundDefault: '#1E1128',
    backgroundPaper: '#2B1A38',
};

export const ThemeContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');

    const theme = useMemo(() => {
        const colors = mode === 'light' ? lightModeColors : darkModeColors;

        return createTheme({
            palette: {
                mode,
                primary: {
                    main: colors.primary,
                    dark: colors.primaryDark,
                },
                secondary: {
                    main: colors.secondary,
                },
                background: {
                    default: colors.backgroundDefault,
                    paper: colors.backgroundPaper,
                },
                text: {
                    primary: colors.textPrimary,
                    secondary: colors.textSecondary,
                },
            },
            typography: {
                fontFamily: 'Inter, sans-serif',
                h1: { fontWeight: 600, fontSize: '3rem' },
                h2: { fontWeight: 500, fontSize: '2.25rem' },
                h3: { fontWeight: 500, fontSize: '1.75rem' },
                body1: { fontSize: '1rem' },
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
                            color: colors.secondary,
                            textDecoration: 'none',
                            fontWeight: 500,
                            '&:hover': {
                                textDecoration: 'underline',
                                color: colors.primaryDark,
                            },
                        },
                    },
                },
            },
        });
    }, [mode]);

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
