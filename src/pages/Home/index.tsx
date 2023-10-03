import React from 'react';
import Banner from './Banner';
import AboutMe from './AboutMe';
import * as S from './style';
import Certifications from './Certifications';

export default function Home() {
    return (
        <>
            <Banner />
            <AboutMe />
            <Certifications/>
        </>
    )
}