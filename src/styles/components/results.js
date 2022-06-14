import styled from 'styled-components'

export const Container = styled.div`
  background-color: red;
  position: relative;
  background-color: ${props => props.theme.colors.background.gray};

  padding: 70px 10rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 425px) {
    padding: 70px 1.5rem 0;
  }
`

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  width: 100%;
  padding: 12px 20px;
  border-radius: 10px;
  margin-top: 16px;

  .links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 16px;
    font-size: 14px;
  }

  .links .largeLink {
    color: ${props => props.theme.colors.neutral.darkBlue};
  }

  .links .shortLink {
    color: ${props => props.theme.colors.primary.cyan};
  }

  .copy {
    width: 100px;
  }

  input {
    outline: none;
    border: none;
    font: 500 14px Poppins, sans-serif;
  }

  button {
    background-color: ${props => props.theme.colors.primary.cyan};
    border: none;
    padding: 16px;

    color: ${props => props.theme.colors.primary.white};
    font-weight: 700;
    font-size: 1rem;
    outline: none;
    border-radius: 10px;
  }

  .active {
    background-color: ${props => props.theme.colors.neutral.darkBlue};
  }

  hr {
    display: none;
    width: 100%;
    border-top: 1px solid #ededed;
  }

  @media (max-width: 425px) {
    flex-direction: column;

    hr {
      display: block;
    }

    .links {
      flex-direction: column;
      font-size: 14px;
      align-items: flex-start;
      justify-content: center;
      margin-right: 0;

      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .links p,
    input {
      margin: 12px 0;
    }

    .copy {
      width: 100%;
    }
  }
`
