import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDiscord } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import Logo from "./Logo.png";

const Footer = () => {

    return (
        <>
            <div className='mt-14'>
                <FooterContainer>
                    <FooterWrap>
                        <SocialMedia>
                            <SocialMediaWrap>
                                <SocialLogo to="/" onClick={scroll.scrollToTop}><img src={Logo} style={{ width: 200, marginBottom: 20 }} alt='logo' /></SocialLogo>
                                <WebsiteRights>Copyright © 2023</WebsiteRights>

                                <SocialIcons>
                                    <SocialIconLink href="https://www.facebook.com/infinitaorg" target="_blank" aria-label="Facebook">
                                        <FaFacebook />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://discord.gg/yfJVS3PG7u" target="_blank" aria-label="Discord">
                                        <FaDiscord />
                                    </SocialIconLink>
                                    <SocialIconLink href="https://instagram.com/infinitaorg" target="_blank" aria-label="Instagram">
                                        <FaInstagram />
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
    );
};

export default Footer;
