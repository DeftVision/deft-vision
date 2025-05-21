import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Privacy from './legal/Privacy.jsx';
import Terms from './legal/Terms.jsx';
import BusinessWebApp from './pages/BusinessWebApp.jsx'
import DeftGuide from './pages/DeftGuide.jsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/services/business-web-app" element={<BusinessWebApp /> } />
            <Route path="/services/deft-guide" element={<DeftGuide /> } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    );
}
