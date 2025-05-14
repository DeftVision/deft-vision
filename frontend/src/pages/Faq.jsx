import Layout from '../layouts/Layout.jsx';
import BackToTop from '../layouts/BackToTop.jsx';
import ScrollToHash from '../components/ScrollToHash.jsx';
import Footer from '../components/Footer.jsx';
import FAQQuickDeployment from '../components/FAQQuickDeployment.jsx';
import FAQCustomWebApp from '../components/FAQCustomWebApp.jsx';

export default function FAQPage() {
    return (
        <Layout>
            <ScrollToHash />
            <FAQQuickDeployment />
            <FAQCustomWebApp />
            <Footer />
            <BackToTop />
        </Layout>
    );
}
