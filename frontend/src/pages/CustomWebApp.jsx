import Layout from '../layouts/Layout.jsx';
import {Box, Button, Container, Stack, Typography} from '@mui/material';
import {Footer} from '../components/index.js'
import BackToTop from '../layouts/BackToTop.jsx';
import {Helmet} from "react-helmet-async";


const CustomWebApp = () => {
    return (
        <>
            <Helmet>

            </Helmet>
         <Layout>

             <Footer/>
             <BackToTop/>
         </Layout>
        </>
    );
};

export default CustomWebApp;