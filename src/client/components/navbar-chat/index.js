// Dependencies
import React, { useState } from 'react'

import { NavLink as RRNavLink } from 'react-router-dom'

// Style
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from 'reactstrap'

const NavBarChat = ({ name }) => {
  // Nav
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const toggle = () => setDropdownOpen(!dropdownOpen)

  return (
    <Nav tabs className="d-flex justify-content-between">
      <NavItem className="test">
        <NavLink tag={RRNavLink} to="/messageslist/">
          <i className="fas fa-arrow-left"></i>
        </NavLink>
      </NavItem>
      <NavItem className="test">{name}</NavItem>
      <Dropdown className="test" nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav>
          <i className="fas fa-ellipsis-v"></i>
        </DropdownToggle>

        <DropdownMenu>
          <DropdownItem>Delete conversation</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Report {name}</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </Nav>
  )
}

export default NavBarChat
