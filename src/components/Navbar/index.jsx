import React from 'react'
import { Nav, NavIcon, NavMenu, NavItem, NavLinks } from '../../styles/components/navbar'
import logo from "../../assets/logo.svg";
import Menu from '../Menu'

const Navbar = () => {
  return (
    <Nav>
          <NavIcon image={logo} />
          <NavMenu>
            <NavItem>
              <NavLinks>Features</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Pricing</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks>Resources</NavLinks>
            </NavItem>
          </NavMenu>
        </Nav>
  )
}

export default Navbar
