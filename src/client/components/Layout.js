import React from 'react'

import { Container } from 'reactstrap'

const Layout = props => (
  <Container className="main-container">{props.children}</Container>
)

export default Layout
