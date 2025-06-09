import Layout from './layouts/Layout.jsx';
import BackToTop from './layouts/BackToTop.jsx';
import { Hero, Service, Portfolio, Contact, Footer } from './components/index';



function App() {
    return (
        <>
            <Hero />
            <Service />
            <Portfolio />
            <Contact />
            <Footer />
            <BackToTop />
        </>

    );
}

export default App;

