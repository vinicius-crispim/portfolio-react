import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Certifications from './Certifications';
import Projects from './Projects/index';

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Certifications/>
            <Projects/>
        </>
    )
}