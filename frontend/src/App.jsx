import Layout from './layouts/Layout.jsx';
import BackToTop from './layouts/BackToTop.jsx';
import { Hero, Service, Portfolio, Contact, ProductComparison, Footer } from './components/index';
import ScrollToHash from './components/ScrollToHash'; // ✅ Make sure this file exists




function App() {
    return (
        <Layout>
            <ScrollToHash />
            <Hero />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
            <BackToTop />
        </Layout>
    );
}

export default App;

