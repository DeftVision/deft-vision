import Layout from '../layouts/Layout.jsx';
import BackToTop from '../layouts/BackToTop.jsx';
import ScrollToHash from '../components/ScrollToHash.jsx';
import Footer from '../components/Footer.jsx';

export default function FAQPage() {
    return (
        <Layout>
            <ScrollToHash />
            <Footer />
            <BackToTop />
        </Layout>
    );
}
