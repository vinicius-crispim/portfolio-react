import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import Certifications from './Certifications';
import Projects from './Projects/index';
import Skills from './Skills';

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Projects/>
            <Skills/>
            <Certifications/>
        </>
    )
}