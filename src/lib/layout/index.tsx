'use client';

import {Box} from '@chakra-ui/react';
import type {ReactNode} from 'react';

import {Footer} from './Footer';
import {Header} from './Header';

type LayoutProps = {
    children: ReactNode;
};

function Layout({children}: LayoutProps) {

    return (
        <Box w={"100%"} bg={"whiteAlpha.50"} minH={"100vh"} >
            <Header/>
            <Box as="main" >
                {children}
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;