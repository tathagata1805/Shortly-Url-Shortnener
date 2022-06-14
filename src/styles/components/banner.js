import styled from 'styled-components'
import background from '../../assets/bg-boost-desktop.svg'


export const Container = styled.div`
  width: 100%;
  height: 200px;
  padding: 0 10rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  background: url(${background}) no-repeat
    ${props => props.theme.colors.primary.violet};
  background-position-y: bottom;

  h2 {
    color: ${props => props.theme.colors.primary.white};
    margin-bottom: 8px;
  }

  button {
    background-color: ${props => props.theme.colors.primary.cyan};
    border: none;
    border-radius: 30px;
    width: 150px;
    padding: 16px;

    color: ${props => props.theme.colors.primary.white};
    font-weight: 700;
    font-size: 1rem;
  }

  @media (max-width: 425px) {
    padding: 0 1.5rem;
  }
`
