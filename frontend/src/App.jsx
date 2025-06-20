import BackToTop from './layouts/BackToTop.jsx';
import {Hero, Service, Contact, Footer} from './components/index';

import { Helmet } from 'react-helmet-async';




function App() {
    return (
        <>
            <Helmet>
                <title>Custom Web Apps for Small Business | Deft Vision</title>
                <meta name="description" content="Web apps built for small businesses, solo founders, and service providers. You own the code." />
                <meta property="og:title" content="Deft Vision – Professional Web Applications" />
                <meta property="og:description" content="Fast, lead-focused websites and apps. No subscriptions. You keep the code." />
                <meta property="og:image" content="https://deftvision.io/og-cover.png" />
                <meta property="og:url" content="https://deftvision.io" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Deft Vision – Web Apps Without the BS" />
                <meta name="twitter:description" content="Small business websites done right. You own your code." />
                <meta name="twitter:image" content="https://deftvision.io/og-cover.png" />
            </Helmet>
            <Hero />
            <Service />
            <Contact />
            <Footer />
            <BackToTop />
        </>

    );
}

export default App;

