import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { NavLink as RRNavLink } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand tag={Link} to="/">
          <span role="img" aria-label="strawberry">
            🍓
          </span>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem onClick={toggle}>
              <NavLink tag={RRNavLink} to="/messageslist">
                Messages
              </NavLink>
            </NavItem>
            <NavItem onClick={toggle}>
              <NavLink tag={RRNavLink} to="/community/">
                Community
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Profile
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>
                  <NavLink tag={RRNavLink} to="/profile/" onClick={toggle}>
                    Account
                  </NavLink>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Log out</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
