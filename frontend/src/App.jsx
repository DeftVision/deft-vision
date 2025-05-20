import Layout from './layouts/Layout.jsx';
import BackToTop from './layouts/BackToTop.jsx';
import { Hero, Service, Portfolio, Contact, Footer } from './components/index';
import ScrollToHash from './components/ScrollToHash';




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

