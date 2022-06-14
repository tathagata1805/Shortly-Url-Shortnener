import React, { useState } from 'react'
import { Container, Popup } from '../../styles/components/menu'
import menuIcon from '../../assets/menu.svg'

const Menu = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <Container>
      <img src={menuIcon} alt="" onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <Popup>
          <a>Features</a>
          <a>Pricing</a>
          <a>Resources</a>
          <hr />
          <a>Resources</a>
          <button>Sign Up</button>
        </Popup>
      )}
    </Container>
  )
}

export default Menu
