import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import {Privacy, Terms } from './legal/index';
import { Login, ManageBlog, ManageFaq} from './developer/index'
import ScrollManager from './utils/ScrollManager'
import { WebApp, Blog, Faq } from './pages/index'





export default function AppRoutes() {
    return (
        <>
        <ScrollManager />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/services/web-app" element={<WebApp /> } />
                <Route path="/login" element={<Login /> } />
                <Route path='/manage-blog' element={<ManageBlog /> } />
                <Route path='/manage-faq' element={<ManageFaq /> } />
                <Route path="/blog" element={<Blog /> } />
                <Route path="/faq" element={<Faq /> } />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </>
    );
}
