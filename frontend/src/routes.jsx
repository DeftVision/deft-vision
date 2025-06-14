import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import {Privacy, Terms } from './legal/index';
import ScrollManager from './utils/ScrollManager'
import { WebApp } from './pages/index'
import Blog from "./components/Blog";




export default function AppRoutes() {
    return (
        <>
        <ScrollManager />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/services/web-app" element={<WebApp /> } />
                <Route path="/blog" element={<Blog /> } />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </>
    );
}
