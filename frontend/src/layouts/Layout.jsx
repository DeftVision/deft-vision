// layouts/Layout.jsx
import { useState } from 'react';
import { Divider, useScrollTrigger } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
    AppBar,
    Box,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Stack,
    Toolbar,
    Typography,
    useTheme,
    useMediaQuery,
    Slide,
    Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DeftLogo from '../assets/DeftVisionSymbol-old.svg?react';

function HideOnScroll({ children }) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

// Nav item config: label + href + isAnchor
const navItems = [
    { label: 'Home', href: '/', anchor: false },
    { label: 'Services', href: '#services', anchor: true },
    { label: 'Portfolio', href: '#portfolio', anchor: true },
    { label: 'Contact', href: '#contact', anchor: true },
];

export default function Layout({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prev) => !prev);
    };

    const handleNavClick = (href, isAnchor) => {
        if (isAnchor) {
            navigate(`/${href}`);
        } else {
            navigate(href);
        }
    };

    const drawer = (
        <Box sx={{ textAlign: 'center', py: 3 }}>
            <Box sx={{ width: 40, height: 40, margin: '0 auto 16px', filter: 'drop-shadow( 0px 1px 2px rgba(0, 0, 0, 0.4))' }}>
                <DeftLogo style={{ width: '100%', height: '100%' }} />
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                handleNavClick(item.href, item.anchor);
                                setTimeout(() => setMobileOpen(false), 150);
                            }}
                            sx={{ textAlign: 'center', py: 1.5 }}
                        >
                            <Typography variant="subtitle1" fontWeight={500}>
                                {item.label}
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <HideOnScroll>
                <AppBar
                    position="sticky"
                    color="primary"
                    elevation={1}
                >
                    <Toolbar
                        sx={{
                            position: 'relative',
                            minHeight: 64,

                        }}
                    >
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ zIndex: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                fontSize: '1.25rem',
                                color: '#F2F2F2',
                                pointerEvents: 'none',
                            }}
                        >
                            Deft Vision
                        </Typography>

                        {!isMobile && (
                            <Box sx={{ marginLeft: 'auto', zIndex: 2 }}>
                                <Stack direction="row" spacing={2}>
                                    {navItems.map((item) => (
                                        <Button
                                            key={item.label}
                                            onClick={() => handleNavClick(item.href, item.anchor)}
                                            sx={{
                                                color: 'inherit',
                                                textTransform: 'none',
                                                fontWeight: 500,
                                                transition: 'opacity 0.2s ease',
                                                '&:hover': { opacity: 0.75 },
                                            }}
                                        >
                                            {item.label}
                                        </Button>
                                    ))}
                                </Stack>
                            </Box>
                        )}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>

            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={{ mb: 6 }}>
                {children}
            </Box>
        </>
    );
}
