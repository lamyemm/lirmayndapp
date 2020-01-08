import React from 'react'

import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Style
import { Container } from 'reactstrap'

const RegisterConfirmation = connect(
  ['user'],
  actions
)(() => {
  return (
    <Container>
      <h2 className="text-center">Welcome to the community !</h2>
      <h2 className="text-center">
        We have sent an email with a confirmation link to your email address. In
        order to complete the sign-up process, please click the confirmation
        link.
      </h2>
    </Container>
  )
})

export default RegisterConfirmation
