/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { ShowcaseSection, ShowcaseBtn, ShowcaseImage, ShowcaseHeading, ShowcaseText, ShowcaseLeft, ShowcaseRight,  } from '../../styles/components/header'
import showcase from "../../assets/illustration-working.svg";

const Header = () => {
  return (
    <ShowcaseSection>
        <ShowcaseLeft>
          <ShowcaseHeading>More than just shorter links</ShowcaseHeading>
          <ShowcaseText>
            Build your brands recognition and get detailed insights on how your
            links are performing
          </ShowcaseText>
          <ShowcaseBtn>Get started</ShowcaseBtn>
        </ShowcaseLeft>
        <ShowcaseRight>
          <ShowcaseImage image={showcase} />
        </ShowcaseRight>
      </ShowcaseSection>
  )
}

export default Header
