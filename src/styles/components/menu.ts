import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
`
export const Popup = styled.div`
  position: absolute;
  top: 80px;
  left: 1.5rem;
  right: 1.5rem;
  height: auto;
  padding: 16px 36px;

  background-color: ${props => props.theme.colors.primary.violet};
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;

  a,
  button {
    margin: 12px 0;
  }

  hr {
    width: 100%;
    margin: 12px 0;
    border: none;
    border-bottom: 0.1rem solid rgba(196, 196, 196, 0.25);
  }

  button {
    background-color: ${props => props.theme.colors.primary.cyan};
    border: none;
    border-radius: 20px;
    width: 100%;
    padding: 16px;
    font-size: 1rem;

    color: ${props => props.theme.colors.primary.white};
    font-weight: 700;
  }
`
