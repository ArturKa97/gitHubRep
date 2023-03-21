import * as React from 'react';
import AppFooter from './pageLayout/AppFooter';
import AppHeader from './pageLayout/AppHeader';
import withRoot from "./theme/withRoot";
import PageRouting from "./routing/PageRouting";


const Home = () => {
    return (
        <>
            <AppHeader />
            <PageRouting/>
            <AppFooter />
        </>
    );
}

export default withRoot(Home);