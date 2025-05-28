import {Container, Typography, Button, Stack, Paper, Box} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/Layout.jsx';
import BackToTop from '../layouts/BackToTop.jsx';


export default function Terms() {
    const navigate = useNavigate();

    const sections = [
        {
            title: 'Scope of Service',
            content:
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>a. Coverage:</strong><br/>
                            These terms apply only to the standard web application product offered by Deft Vision.
                        </Typography>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>b. Exclusions:</strong><br/>
                            These terms do not apply to full stack applications, HIPAA-compliant systems, or the Stride product. Separate agreements and terms will govern those services.
                        </Typography>
                    </Stack>
                </Box>
        },
        {
            title: 'Ownership',
            content:
                <Box>
                    <Stack direction='column' spacing={2} >
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>a. Delivery Format:</strong><br/>By default, your code will be delivered as a .zip file containing plain text (.txt) versions of the project’s application files.
                            Delivery via GitHub is strongly recommended for clients who want to track ownership and version history; if you choose this method, you must have an active GitHub account and accept the repository transfer.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>b. Domain Requirement:</strong><br/>You are required to own your domain—no exceptions.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>c. Alternative Formats: </strong><br/>If you prefer code delivery by GitHub or another format (such as PDF for reference), you must request this in writing before the project hand-off and final payment.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>d. Exclusions:</strong><br/>Code delivered will not include any proprietary deployment scripts, access keys, API endpoints, or files required for cloud deployment on Deft Vision’s AWS infrastructure.
                            For further details, see the Deployment & Hosting section.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>e. Code Usage:</strong><br/>Once ownership is transferred, you have complete freedom to modify, host, and utilize the code as you wish, except for reselling, duplicating, or redistributing it for profit.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>f. Format Limitations: </strong><br/>Code provided in PDF or .txt format is for reference and archival purposes and may not be directly usable for deployment without further preparation.
                        </Typography>
                    </Stack>
                </Box>
        },
        {
            title: 'Revisions',
            content:
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>a. Included Revisions:</strong><br/>
                            Standard web application projects include one round of revisions after initial delivery.
                        </Typography>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>b. Scope of Revisions:</strong><br/>
                            Revisions are limited to changes in text, colors, and logo swaps only. No new features, additional functionality, or structural changes are included.
                        </Typography>
                    </Stack>
                </Box>
        },
        {
            title: 'Timeline',
            content:
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>a. Typical Duration:</strong><br/>
                            Standard web application projects are typically completed within 7–10 business days, starting from the scheduled project date.
                        </Typography>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>b. Customer Delays:</strong><br/>
                            Delays caused by late customer responses, missing information, or required approvals may extend the project timeline.
                        </Typography>
                    </Stack>
                </Box>
        },
        {
            title: 'Deployment & Hosting',
            content: (
                <Box>
                   <Stack direction='column' spacing={2} >
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>a. Customer Hosting Responsibility:</strong><br/>
                           Customers must select and provide access to their own hosting provider so Deft Vision can complete deployment.
                       </Typography>
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>b. Hosting Recommendations:</strong><br/>
                           Deft Vision can recommend hosting providers during your consultation, but the final choice and all responsibility for selecting and managing your hosting provider rests with the customer.
                       </Typography>
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>c. Hosting Requirements:</strong><br/>
                           The chosen hosting platform must support React, Vite, or Next.js. Customers must have access to the required DNS records (such as CNAME) and any other settings needed for setup.
                       </Typography>
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>d. AWS Hosting Option:</strong><br/>
                           Deft Vision can also host your site on its AWS infrastructure for a monthly hosting fee, which is separate from any maintenance package.
                       </Typography>
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>e. Billing for AWS Hosting:</strong><br/>
                           AWS usage charges and server management fees will be billed by Deft Vision and may change depending on your actual usage or changes in AWS pricing.
                       </Typography>
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>f. Late or Missed Payments:</strong><br/>
                           If payments for hosting are late or missed, Deft Vision reserves the right to suspend the server, making the web application inaccessible until payment is made.
                       </Typography>
                       <Typography sx={{ textAlign: 'start'}}>
                           <strong>g. Code Ownership on AWS:</strong><br/>
                           If you choose to host on Deft Vision’s AWS infrastructure, you will still own your frontend code, but the code provided will not include any proprietary deployment scripts, keys, AWS API endpoints, or files required to run or deploy on AWS.
                       </Typography>
                   </Stack>
                </Box>
            ),
        },
        {
            title: 'Third-Party Services',
            content: (
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>a. Service Usage:</strong><br/>
                            Projects may require the use of third-party services such as GitHub (for code delivery) or other tools specific to your project.
                        </Typography>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>b. Separate Terms:</strong><br/>
                            All third-party services operate under their own terms of service and privacy policies.
                        </Typography>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>c. Customer Responsibility:</strong><br/>
                            Customers are responsible for managing their own accounts, settings, and security on any third-party service used in connection with their project.
                        </Typography>
                        <Typography sx={{ textAlign: 'start' }}>
                            <strong>d. No Liability:</strong><br/>
                            Deft Vision takes no responsibility or liability for the availability, performance, data handling, or policies of any third-party service.
                        </Typography>
                    </Stack>
                </Box>
            ),
        },
        {
            title: 'Account Access & Retention',
            content: (
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>a. Temporary Access:</strong><br/>
                            To deploy or manage your code, Deft Vision may require temporary access to your hosting, domain, or third-party service accounts during development.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>b. Credential Updates:</strong><br/>
                            After project completion, final payment, and handoff (such as via GitHub), all customer credentials must be changed by the customer.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>c. Ongoing Access (if needed):</strong><br/>
                            If ongoing access is required for maintenance or support, Deft Vision may be added as a collaborator on your repository or granted limited access to third-party services as needed. All such access will be subject to agreement and can be revoked by the customer at any time.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>d. No Long-Term Retention:</strong><br/>
                            Deft Vision will not retain customer credentials after project completion unless there is a written agreement for ongoing support or maintenance.
                        </Typography>
                    </Stack>
                </Box>
            ),
        },
        {
            title: 'Support & Compatibility',
            content: (
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>a. Response Times:</strong><br/>
                            Support requests will be responded to within 24–48 hours.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>b. Bug Fixes:</strong><br/>
                            Bug fixes are handled at no charge if the issue is directly related to the code delivered by Deft Vision.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>c. Non-Bug Support:</strong><br/>
                            For non-bug support—including help with updates, hosting changes, or troubleshooting unrelated to your original project—support is billed at $100/hour, with a 30-minute minimum charge.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>d. Support Retainer Option:</strong><br/>
                            Standard web application clients may optionally subscribe to a support retainer for $29.99/month. This includes priority support and discounted hourly billing for approved changes or assistance.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>e. Exclusions:</strong><br/>
                            Deft Vision does not support issues caused by third-party services, hosting providers, or future changes to frameworks, libraries, or browser behavior.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>f. Compatibility & Deprecation:</strong><br/>
                            Compatibility issues that arise due to deprecated tools or software updates may require billable code changes.
                        </Typography>
                    </Stack>
                </Box>
            )
        },
        {
            title: 'Refund Policy',
            content:
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>a. All Sales Final:</strong><br/>
                            No refunds will be issued once final payment is made and the code has been transferred to the customer.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>b. Project Cancellation:</strong><br/>
                            If the customer cancels the project during development, they will be billed at the standard hourly rate of $100 for all hours worked up to that point.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>c. Code Delivery:</strong><br/>
                            No code or project files will be delivered until the final payment is received in full.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>d. Post-Delivery Responsibility:</strong><br/>
                            Upon delivery, Deft Vision holds no responsibility or obligation regarding the delivered code, unless the customer has subscribed to an active maintenance package (currently priced at $29.99/month).
                        </Typography>
                    </Stack>
                </Box>
        },
        {
            title: 'Inactivity & Abandonment',
            content: (
                <Box>
                    <Stack direction='column' spacing={2}>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>a. Definition of Abandonment:</strong><br/>
                            If there is no communication from the client for 14 consecutive days at any point during the project, the work will be considered abandoned.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>b. Contact Attempts:</strong><br/>
                            Deft Vision will attempt to contact the client by email on day 5, day 10, and 2 days before project closure. All communication regarding inactivity must occur via email only.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>c. Project Closure:</strong><br/>
                            If no response is received by the stated deadline, the project will be closed.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>d. Charges:</strong><br/>
                            Charges will be applied based on the amount of work completed at the time of closure. No refunds will be issued under any circumstances.
                        </Typography>
                        <Typography sx={{ textAlign: 'start'}}>
                            <strong>e. Deletion of Materials:</strong><br/>
                            All project materials—including code, files, images, logos, or submitted content—will be permanently deleted from all drives, devices, and cloud services used during development. Recovery will not be possible after closure.
                        </Typography>
                    </Stack>

                </Box>
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
                       Please read the terms below before starting a project.<br/>
                       Terms effective: May 28, 2025
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
