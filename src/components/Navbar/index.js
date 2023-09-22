import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav, NavbarContainer, NavLogo, MobileIcon,
    NavMenu, NavItem, NavLinks
} from "./NavbarElements"
import Logo from "./Logo_Final.png"
import { animateScroll as scroll } from "react-scroll";
import Announcement from '../Announcement';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
        
        <Nav scrollNav={scrollNav}>
            {/* <Announcement /> */}
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>
                    <img src={Logo} alt='logo' style={{width: 150}}/>
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        > About </NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="schedule"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >Schedule</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="problem-statements"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >Problem Statements</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="prizes"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >Prizes</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="sponsors"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >Sponsors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="speakers"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >Speakers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="faqs"
                            smooth="true"
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            activeClass="active"
                        >FAQs</NavLinks>
                    </NavItem>
                   
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
