import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import {Privacy, Terms } from './legal/index';
import ScrollManager from './utils/ScrollManager'
import { BusinessWebApp } from './pages/index'


export default function AppRoutes() {
    return (
        <>
        <ScrollManager />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/services/standard-web-app" element={<BusinessWebApp /> } />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </>
    );
}
