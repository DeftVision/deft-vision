import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Privacy from './legal/Privacy.jsx';
import Terms from './legal/Terms.jsx';
import Faq from './pages/Faq.jsx';
import QuickDeploy from '../src/pages/QuickDeploy'
import CustomSpa from '../src/pages/CustomSpa'
import Seo from './pages/Seo.jsx';
import Services from './pages/Services.jsx';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/services/quick-deploy" element={<QuickDeploy /> } />
            <Route path="/services/custom-spa" element={<CustomSpa /> } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/seo" element={<Seo />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
}
