import * as React from 'react';
import AppFooter from './modules/views/AppFooter';
import ProductHero from './modules/views/ProductHero';
import AppAppBar from './modules/views/AppAppBar';
import withRoot from "./modules/withRoot";
import PageRouting from "./Routing/PageRouting";


const Home = () => {
    return (
        <>
            <AppAppBar />
            <PageRouting/>
            <AppFooter />
        </>
    );
}

export default withRoot(Home);