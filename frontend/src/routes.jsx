import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import {Privacy, Terms } from './legal/index';
import { Login, ManageBlog, ManageFaq} from './developer/index'
import ScrollManager from './utils/ScrollManager'
import {WebApp, Blog, Faq, MentalHealth} from './pages/index'
import PrivateRoute from "./utils/PrivateRoute.jsx";





export default function AppRoutes() {
    return (
        <>
        <ScrollManager />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/services/web-app" element={<WebApp /> } />
                <Route path="/login" element={<Login /> } />
                <Route path='/manage-blog' element={ <PrivateRoute> <ManageBlog /> </PrivateRoute> } />
                <Route path='/manage-faq' element={ <PrivateRoute> <ManageFaq /> </PrivateRoute> } />
                <Route path="/blog" element={<Blog /> } />
                <Route path="/faq" element={<Faq /> } />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/mentalhealth" element={<MentalHealth />} />
                <Route path="/terms" element={<Terms />} />
            </Routes>
        </>
    );
}
