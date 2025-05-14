import Layout from '../layouts/Layout.jsx';
import BackToTop from '../layouts/BackToTop.jsx';
import { Footer } from '../components/index.js'
import {
    Container,
    Typography,
    Stack,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Divider,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Seo() {
    return (
        <Layout>
            <Container maxWidth="md" sx={{ py: 10 }}>
                <Stack spacing={8}>

                    {/* What is SEO */}
                    <Stack spacing={2}>
                        <Typography variant="h4" fontWeight={600}>
                            What Is SEO?
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            SEO stands for Search Engine Optimization. It’s the process of making your site easy to find when someone searches for your business or services online.
                        </Typography>
                    </Stack>

                    {/* Why it matters */}
                    <Stack spacing={2}>
                        <Typography variant="h4" fontWeight={600}>
                            Why It Matters
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Most people find local businesses through Google. If your site isn’t built for visibility, you’re invisible. Good SEO helps your name, location, and services show up where customers are actually looking.
                        </Typography>
                    </Stack>

                    {/* What's included */}
                    <Stack spacing={2}>
                        <Typography variant="h4" fontWeight={600}>
                            What Deft Vision Includes by Default
                        </Typography>
                        <List>
                            {[
                                'Mobile-first design (Google ranks mobile-first)',
                                'Fast load speed',
                                'Clean semantic HTML',
                                'Proper heading structure (H1–H3)',
                                'Meta title and description',
                                'OpenGraph support for link previews',
                            ].map((item, i) => (
                                <ListItem key={i} disableGutters>
                                    <ListItemIcon>
                                        <CheckCircleIcon color="success" fontSize="small" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>
                    </Stack>

                    {/* Grow when ready */}
                    <Stack spacing={2}>
                        <Typography variant="h4" fontWeight={600}>
                            Grow When You're Ready
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Want to go further? Add a blog, Google Business Profile integration, or track visits through analytics. Deft Vision gives you a site you can grow into — not one you’ll outgrow.
                        </Typography>
                    </Stack>

                    <Divider />

                    {/* CTA */}
                    <Stack spacing={2} alignItems="center" textAlign="center">
                        <Typography variant="h5" fontWeight={600}>
                            Ready to make your business easier to find?
                        </Typography>
                        <Button variant="contained" size="large" href="/#contact">
                            Start My Project
                        </Button>
                    </Stack>
                </Stack>
            </Container>
            <Footer />
            <BackToTop />
        </Layout>
    );
}
