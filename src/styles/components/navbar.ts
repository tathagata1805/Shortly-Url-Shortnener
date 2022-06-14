import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  background: white;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

export const NavIcon = styled.div`
  background-image: url(${(props) => props.image.src});
  height: 3rem;
  width: 10rem;
  margin-left: 5rem;
  margin-top: 1rem;
  background-repeat: no-repeat;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    opacity: 1;
    background: white;
  }
`;

export const NavItem = styled.div`
  display: flex;
  height: 80px;
  @media screen and (max-width: 960px) {
    width: 100%;
    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled.a`
  color: black;
  display: flex;
  cursor: pointer;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;


// import styled from 'styled-components';

// export const NavIcon = styled.div`
//   background-image: url(${(props) => props.image.src});
//   height: 3rem;
//   width: 10rem;
//   margin-left: 5rem;
//   margin-top: 1rem;
//   background-repeat: no-repeat;
// `;

// export const Container = styled.div`
//   width: 100%;
//   height: 80px;
//   padding: 0 10rem;
//   position: fixed;
//   z-index: 2;

//   background-color: ${props => props.theme.colors.primary.white};

//   display: flex;
//   align-items: center;
//   justify-content: space-between;

//   .links,
//   .sign {
//     height: 100%;

//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     font-size: 14px;
//   }

//   .menu {
//     display: none;
//   }

//   .links a,
//   .sign a {
//     text-decoration: none;
//     color: ${props => props.theme.colors.neutral.grayishViolet};
//   }

//   .links a:hover,
//   .sign a:hover {
//     color: ${props => props.theme.colors.neutral.darkBlue};
//   }

//   .links > *:not(:last-child),
//   .sign > *:not(:last-child) {
//     margin-right: 1.5rem;
//   }

//   .sign button {
//     background-color: ${props => props.theme.colors.primary.cyan};
//     border: none;
//     border-radius: 30px;
//     width: 96px;
//     padding: 10px;

//     color: ${props => props.theme.colors.primary.white};
//     font-weight: 700;
//     font-size: 0.8rem;
//   }

//   @media (max-width: 425px) {
//     padding: 0 1.5rem;

//     .links a,
//     .sign {
//       display: none;
//     }

//     .menu {
//       display: block;
//     }
//   }
// `
