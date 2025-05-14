import Layout from '../layouts/Layout.jsx';
import ScrollToHash from '../components/ScrollToHash.jsx';
import Footer from '../components/Footer.jsx';
import BackToTop from '../layouts/BackToTop.jsx';

export default function Services() {
    return (
        <Layout>
            <ScrollToHash />
            <h1>Services</h1>
            <p>This is a placeholder. Cards and comparison table will go here.</p>
            <Footer />
            <BackToTop />
        </Layout>
    );
}
