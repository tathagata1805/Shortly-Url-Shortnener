import React from 'react'
import { Container, Links, Social, FooterIcon } from '../../styles/components/footer'
import logo from '../../assets/logo.svg'
import facebookIcon from '../../assets/icon-facebook.svg'
import twitterIcon from '../../assets/icon-twitter.svg'
import pinterestIcon from '../../assets/icon-pinterest.svg'
import instagramIcon from '../../assets/icon-instagram.svg'
import Image from 'next/image';

const Footer = () => {
  return (
    <Container>
      <FooterIcon
        image={logo}
        alt=""
        style={{
          filter:
            'invert(99%) sepia(45%) saturate(0%) hue-rotate(162deg) brightness(113%) contrast(100%)'
        }}
      />
      <Links>
        <div>
          <h4>Features</h4>
          <a href="">Link Shortening</a>
          <a href="">Branded Links</a>
          <a href="">Analytics</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="">Blog</a>
          <a href="">Developers</a>
          <a href="">Support</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="">About</a>
          <a href="">Our Team</a>
          <a href="">Careers</a>
          <a href="">Contact</a>
        </div>
      </Links>
      <Social>
        <Image src={facebookIcon} alt="" />
        <Image src={twitterIcon} alt="" />
        <Image src={pinterestIcon} alt="" />
        <Image src={instagramIcon} alt="" />
      </Social>
    </Container>
  )
}

export default Footer
