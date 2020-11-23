import React from "react"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa"
import { animateScroll as scroll } from "react-scroll"
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements"

export default function Footer() {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            {/* <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems> */}
            {/* <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Investors</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems> */}
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/' onClick={toggleHome}>
              Marcos Velasco
            </SocialLogo>
            <WebsiteRights>
              Copyright © {new Date().getFullYear()} Marcos Velasco. All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='https://www.linkedin.com/in/marcos-velasco-1b07a7189/'
                target='_blank'
                arial-label='LinkedIn'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='https://github.com/devslife7' target='_blank' arial-label='GitHub'>
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='https://www.facebook.com/marcos.velasco.5/'
                target='_blank'
                arial-label='Facebook'
              >
                <FaFacebook />
              </SocialIconLink>
              {/* <SocialIconLink href='/' target='_blank' arial-label='Instagram'>
                <FaInstagram />
              </SocialIconLink> */}
              {/* <SocialIconLink href='/' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink> */}
              <SocialIconLink href='https://twitter.com/Markuz113' target='_blank' arial-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}
