import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements";
import {animateScroll as scroll} from "react-scroll";
import Logo from "../Logo";

const Footer = () => {
    
    return (
        <>
        <div className='mt-14'>
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={scroll.scrollToTop}><Logo size={40}/></SocialLogo>
                        <WebsiteRights>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</WebsiteRights>

                        <SocialIcons>
                            <SocialIconLink href="https://www.facebook.com/infinitaorg" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="ttps://instagram.com/infinitaorg" target="_blank" aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="https://www.linkedin.com/company/infinitaorg/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
        </div>
       
        </>
    )
}

export default Footer
