import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import {ThemeContextProvider} from './context/ThemeContext';
import '@fontsource/poppins/600.css'; // Semi-bold
import {HelmetProvider} from 'react-helmet-async';
import {BrowserRouter as Router} from 'react-router-dom'
import {AuthProvider} from "./context/AuthContext.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextProvider>
            <HelmetProvider>
                <AuthProvider>
                    <Router>
                        <AppRoutes/>
                    </Router>
                </AuthProvider>
            </HelmetProvider>
        </ThemeContextProvider>
    </StrictMode>
)
