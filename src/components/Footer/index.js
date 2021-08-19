import React from 'react'
import { 
    FaFacebook,
    FaInstagram,
    FaLinkedin, 
    FaYoutube 
} from 'react-icons/fa'

import {
    FooterContainer, 
    FooterWrap, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements'

const Footer = () => {
return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo>Pizza</SocialLogo>
                    <SocialIcons>
                        <SocialIconLink href="/" target ="_blank" aria-label="Facebook" rel="noopener noreferrer">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target ="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target ="_blank" aria-label="Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target ="_blank" aria-label="Twitter">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
)
}

export default Footer