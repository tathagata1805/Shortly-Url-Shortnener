import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.neutral.darkViolet};

  img {
    fill: white;
  }

  @media (max-width: 425px) {
    height: auto;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 3rem 1.5rem;
  }
`

export const FooterIcon = styled.div`
  height: 2rem;
  background-image: url(${(props) => props.image.src});
  display: flex;
  margin-left: 5rem;
  width: 8rem;
  margin-top: 1rem;
  background-repeat: no-repeat;
`;

export const Links = styled.div`
  display: flex;
  align-items: flex-start;

  font-size: 14px;

  div {
    display: flex;
    flex-direction: column;
    margin: 0 36px;
  }

  a {
    color: ${props => props.theme.colors.neutral.grayishViolet};
    text-decoration: none;
    margin: 4px 0;
  }

  a:hover {
    color: ${props => props.theme.colors.primary.cyan};
  }

  h4 {
    color: ${props => props.theme.colors.primary.white};
    margin-bottom: 12px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 1rem 0;

    div {
      margin: 16px 0;
      align-items: center;
    }
  }
`

export const Social = styled.div`
  display: flex;
  align-items: center;

  * {
    margin: 0 12px;
  }

  img {
    cursor: pointer;
  }
`
