import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Privacy from './legal/Privacy.jsx';
import Terms from './legal/Terms.jsx';
import BusinessReady from './pages/BusinessReady.jsx'

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/services/business-ready" element={<BusinessReady /> } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    );
}
