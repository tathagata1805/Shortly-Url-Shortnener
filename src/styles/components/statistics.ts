import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 0 10rem;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.background.gray};

  @media (max-width: 425px) {
    padding: 140px 1.5rem 0;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  max-width: 540px;

  h2 {
    color: ${props => props.theme.colors.neutral.darkBlue};
    margin-bottom: 8px;
  }
  p {
    color: ${props => props.theme.colors.neutral.grayishViolet};
    font-size: 16px;
  }
`
export const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  hr {
    border: 3px solid ${props => props.theme.colors.primary.cyan};
    position: absolute;
    top: 50;
    left: 0;
    width: 100%;
    z-index: 0;
  }

  @media (max-width: 425px) {
    margin: 6rem 0;
    flex-direction: column;

    hr {
      top: 0;
      left: 50%;
      right: 50%;
      height: 100%;
      width: 0;
    }
  }
`
export const Card = styled.div`
  border-radius: 10px;

  padding: 0 36px 36px;
  background-color: ${props => props.theme.colors.primary.white};
  z-index: 1;

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &:nth-child(1) {
    margin-bottom: 120px;
  }
  &:nth-child(3) {
    margin-top: 120px;
  }

  h3 {
    color: ${props => props.theme.colors.neutral.darkBlue};
    margin-bottom: 16px;
  }

  p {
    font-size: 14px;
  }

  @media (max-width: 425px) {
    text-align: center;
    &:not(:first-child) {
      margin-left: 0;
    }

    &:nth-child(1) {
      margin-bottom: 100px;
    }

    &:nth-child(3) {
      margin-top: 100px;
    }
  }
`
export const IconContainer = styled.div`
  margin-top: -40px;
  margin-bottom: 20px;
  background-color: ${props => props.theme.colors.primary.violet};
  width: 80px;
  height: 80px;
  border-radius: 50%;

  top: -40px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 425px) {
    margin: -40px auto 20px;
  }
`

export const StatisticsCardIcon = styled.div`
background-image: url(${(props) => props.image.src});
  display: flex;
  align-items: center;
  justify-content: space-around
  background-color: black;
  height: 3rem;
  width: 3rem;
  border-radius: 5rem;
`;