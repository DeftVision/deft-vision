import { Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import {Privacy, Terms } from './legal/index';

import {
    BusinessWebApp,
    DeftGuide,
    WhatYouNeedToGetOnline,
    LaunchingSmart,
    UnderstandingYourBuild,
    CodeOwnershipAndDelivery,
    FutureProofing,
} from './pages/index'


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/services/business-web-app" element={<BusinessWebApp /> } />
            <Route path="/services/deft-guide" element={<DeftGuide /> } />
            <Route path="/guide/what-you-need-to-get-online" element={<WhatYouNeedToGetOnline />} />
            <Route path="/guide/launching-smart" element={<LaunchingSmart />} />
            <Route path="/guide/understanding-your-build" element={<UnderstandingYourBuild />} />
            <Route path="/guide/code-ownership-and-delivery" element={<CodeOwnershipAndDelivery />} />
            <Route path="/guide/future-proofing" element={<FutureProofing />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
        </Routes>
    );
}
