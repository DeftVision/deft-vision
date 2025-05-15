import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import AppRoutes from './routes.jsx'
import ThemeContextProvider from './context/ThemeContext';
import '@fontsource/poppins/600.css'; // Semi-bold

import { BrowserRouter as Router } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ThemeContextProvider>
            <Router>
                <AppRoutes />
            </Router>
        </ThemeContextProvider>
    </StrictMode>,
)
