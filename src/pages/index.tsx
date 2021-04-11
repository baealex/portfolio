import React from 'react'; 

import Intro from '@components/intro';
import Social from '@components/social';
import Prodcut from '@components/product';
import Contact from '@components/contact';

export default function Index() {
    return (
        <>
            <Intro/>
            <Social/>
            <Prodcut/>
            <Contact/>
        </>
    )
}