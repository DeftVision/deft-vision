import { Container, Typography, Button, Stack, Paper, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout.jsx';
import BackToTop from '../layouts/BackToTop.jsx';


export default function Terms() {
    const navigate = useNavigate();

    const sections = [
        {
            title: '1. Scope of Service',
            content:
                'These terms apply only to Business-Ready and Custom SPA frontend projects. They do not cover full stack applications, HIPAA-compliant systems, or AWS-hosted backend deployments.',
        },
        {
            title: '2. Ownership',
            content:
                'After final payment, you own the code. You may host it, modify it, or transfer it. Deft Vision retains no rights to your delivered project.',
        },
        {
            title: '3. Revisions',
            content:
                'Business-Ready projects include one round of revisions after delivery. Revisions cover text, color, and logo swaps only — no new features. Custom SPAs follow the same revision rule unless otherwise agreed.',
        },
        {
            title: '4. Timeline',
            content:
                'Business-Ready projects typically complete within 7–10 business days, starting from the scheduled project date. Delays caused by customer response time may extend the timeline.',
        },
        {
            title: '5. Deployment & Hosting',
            content: (
                <>
                    Customers are responsible for choosing their own hosting providers. For Deft Vision to deploy on your behalf, the host must support React + Vite frontend apps. All full stack applications are hosted in AWS (EC2 and S3). Their terms and billing policies apply. Ongoing AWS charges may be passed through by Deft Vision or billed to the customer directly.
                </>
            ),
        },
        {
            title: '6. Third-Party Services',
            content: (
                <>
                    Projects may use services such as <strong>GitHub</strong> (for code delivery) and <strong>EmailJS</strong> (for contact forms). These tools operate under their own terms and privacy policies. You can view their terms here:&nbsp;
                    <Link href="https://www.emailjs.com/legal/terms-of-service/" target="_blank" rel="noopener noreferrer" underline="hover">
                        EmailJS Terms
                    </Link>
                    &nbsp;and&nbsp;
                    <Link href="https://docs.github.com/en/site-policy/github-terms/github-terms-of-service" target="_blank" rel="noopener noreferrer" underline="hover">
                        GitHub Terms
                    </Link>.
                    Customers are responsible for managing their own third-party accounts. Deft Vision takes no responsibility for those services.
                </>
            ),
        },
        {
            title: '7. Account Access & Retention',
            content: (
                <>
                    For Deft Vision to deploy or manage your code, temporary access to your account(s) may be required during development. After project completion, payment, and handoff via GitHub, all credentials must be changed. If ongoing access is required, Deft Vision may be added as a collaborator on your repository only, or granted access to third-party services as needed.
                </>
            ),
        },
        {
            title: '8. Support & Compatibility',
            content: (
                <>
                    Support requests will be responded to within 24–48 hours. Bug fixes are handled at no charge if the issue is directly related to the code delivered by Deft Vision.
                    <br /><br />
                    For non-bug support — including help with updates, hosting changes, or troubleshooting unrelated to your original project — support is billed at $100/hour with a 30-minute minimum.
                    <br /><br />
                    Business-Ready clients may optionally subscribe to a support retainer for $10/month. This includes priority support and discounted hourly billing for approved changes or assistance.
                    <br /><br />
                    Deft Vision does not support issues caused by third-party services, hosting providers, or future changes to frameworks, libraries, or browser behavior. Compatibility issues that arise due to deprecated tools or software updates may require billable code changes.
                </>
            )
        },
        {
            title: '9. Refund Policy',
            content:
                'All sales are final once code is delivered. There are no refunds for completed projects, regardless of use. Customer sign-off confirms completion and triggers final payment.',
        },
        {
            title: '10. Inactivity & Abandonment',
            content: (
                <>
                    If there is no communication from the client for 14 consecutive days at any point during the project, the work will be considered abandoned. Deft Vision will attempt contact by email on day 5, day 10, and 2 days before closure. All communication must occur via email only.
                    <br /><br />
                    If no response is received by the deadline, the project will be closed. Charges will be applied based on the amount of work completed at the time of closure. No refunds will be issued under any circumstances.
                    <br /><br />
                    All project materials — including code, files, images, logos, or submitted content — will be permanently deleted from all drives, devices, and cloud services used during development. Recovery will not be possible after closure.
                </>
            ),
        },
    ];

    return (
       <Layout>
           <Container maxWidth="md" sx={{ py: 10 }}>
               <Stack spacing={5}>
                   <Typography variant="h4" fontWeight={600}>
                       Terms of Service
                   </Typography>

                   <Typography variant="body1" color="text.secondary">
                       Please read the terms below before starting a project.
                   </Typography>

                   <Stack spacing={4}>
                       {sections.map(({ title, content }, index) => (
                           <Paper key={index} elevation={0} sx={{ p: 3, bgcolor: 'grey.50' }}>
                               <Typography variant="subtitle1" fontWeight={600} gutterBottom>
                                   {title}
                               </Typography>
                               <Typography variant="body2" color="text.secondary">
                                   {content}
                               </Typography>
                           </Paper>
                       ))}
                   </Stack>

                   <Button variant="outlined" onClick={() => navigate('/')}>
                       Back to Site
                   </Button>
               </Stack>
           </Container>
           <BackToTop/>
       </Layout>
    );
}
