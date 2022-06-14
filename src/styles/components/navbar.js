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