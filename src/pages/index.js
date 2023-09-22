import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Schedule from '../components/Schedule';
import ProblemStatements from "../components/ProblemStatements";
import Prizes from "../components/Prizes";
import Footer from '../components/Footer';

import { homeObjOne } from '../components/InfoSection/Data';
import Sponsors from '../components/Sponsors';
import Judges from '../components/Judges';
import FAQs from '../components/FAQs';
import ContactCards from '../components/ContactCards/ContactCards';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <Schedule />
            <ProblemStatements />
            <Prizes />
            <Judges />
            <FAQs />
            <Footer />
        </>
    )
}

export default Home
