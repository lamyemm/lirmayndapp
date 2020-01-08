import React from 'react'
import { useState } from 'react'

import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Style
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'

const PasswordForgotten = connect(
  ['user'],
  actions
)(() => {
  const [email, setEmail] = useState('')

  // Payload
  const [payload, setPayload] = useState(null)

  // Handle change inside inputs
  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }

  const handleSubmit = event => {
    setPayload({ email: email })
    event.preventDefault()
  }

  return (
    <Container>
      <h2 className="text-center">Forgot password</h2>
      <p className="text-center">
        Please enter your email address and we'll send you instructions on how
        to reset your password
      </p>
      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Input
            required
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Email"
            name="email"
          ></Input>
        </FormGroup>

        <Button
          className="btn-lg btn-dark btn-block"
          type="submit"
          value="submit"
        >
          Submit
        </Button>
      </Form>
    </Container>
  )
})

export default PasswordForgotten
