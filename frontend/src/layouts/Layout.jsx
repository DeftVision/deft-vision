import {useState} from 'react';
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    Slide,
    Stack,
    Toolbar,
    Typography,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import DeftLogo from '../assets/DynamicDeftLogo.svg?react';


function HideOnScroll({children}) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

// Nav item config: label + href + isAnchor
const navItems = [
    {label: 'Home', href: '/', anchor: false},
    {label: 'Services', href: '#services', anchor: true},
    {label: 'Contact', href: '#contact', anchor: true},
    {label: 'Blog', href: '/blog', anchor: true},
];

export default function Layout({children}) {
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
        <Box sx={{textAlign: 'center', py: 3}}>
            <Box
                component={DeftLogo}
                sx={{
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    my: 2,
                    display: 'block',
                }}
            />

            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            onClick={() => {
                                handleNavClick(item.href, item.anchor);
                                setTimeout(() => setMobileOpen(false), 150);
                            }}
                            sx={{textAlign: 'center', py: 1.5}}
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
                                sx={{zIndex: 2}}
                            >
                                <MenuIcon/>
                            </IconButton>
                        )}

                        <Stack direction="row" alignItems="center" spacing={1}>
                            <Box
                                component={DeftLogo}
                                sx={{
                                    color: '#D3DCE4',
                                    width: 48,
                                    height: 48,
                                    position: 'absolute',
                                    left: '50%',
                                    transform: 'translateX(-50%) rotateY(0deg)',
                                    animation: `
                                    spinThenPulse 1.2s ease-out,
                                    pulseOnce 0.6s ease-in-out 1.3s
                                `,
                                    transformStyle: 'preserve-3d',
                                    '@keyframes spinThenPulse': {
                                        from: {transform: 'translateX(-50%) rotateY(0deg)'},
                                        to: {transform: 'translateX(-50%) rotateY(360deg)'},
                                    },
                                    '@keyframes pulseOnce': {
                                        '0%': {transform: 'translateX(-50%) scale(1)'},
                                        '50%': {transform: 'translateX(-50%) scale(1.05)'},
                                        '100%': {transform: 'translateX(-50%) scale(1)'},
                                    },
                                }}


                            />
                            <Typography
                                variant="h6"
                                noWrap
                                sx={{
                                    display: {xs: 'none', md: 'block'},
                                    fontFamily: 'Poppins, sans-serif',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    fontSize: '1.25rem',
                                    color: '#F2F2F2',
                                }}
                            >
                                Deft Vision
                            </Typography>
                        </Stack>

                        {!isMobile && (
                            <Box sx={{marginLeft: 'auto', zIndex: 2}}>
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
                                                '&:hover': {opacity: 0.75},
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
                    ModalProps={{keepMounted: true}}
                    sx={{
                        display: {xs: 'block', md: 'none'},
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 240,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>

            <Box component="main" sx={{mb: 6}}>
                {children}
            </Box>
        </>
    );
}
