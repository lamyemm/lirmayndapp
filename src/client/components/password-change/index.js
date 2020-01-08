import React from 'react'
import { useState } from 'react'

import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Style
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert
} from 'reactstrap'

const PasswordChange = connect(
  ['user'],
  actions
)(() => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  // Check if passwords match
  const [incorrectPassword, setIncorrectPassword] = useState(false)

  // Payload
  const [payload, setPayload] = useState(null)

  // Handle change inside inputs
  const handleChangePassword = event => {
    setNewPassword(event.target.value)
  }

  // TODO : verify is current password is correct

  const handleSubmit = event => {
    if (newPassword === passwordConfirmation) {
      setIncorrectPassword(false)
      setPayload({ password: newPassword })
      event.preventDefault()

      setNewPassword('')
      setPasswordConfirmation('')
    } else if (newPassword !== passwordConfirmation) {
      event.preventDefault()
      setIncorrectPassword(true)
      setNewPassword('')
      setPasswordConfirmation('')
    }
  }

  return (
    <Container>
      <h2 className="text-center">Change password</h2>

      <Form className="login-form" onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Current password</Label>
          <Input
            required
            type="password"
            placeholder="Current password"
            name="password"
            value={currentPassword}
            onChange={e => setCurrentPassword(e.target.value)}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>New password</Label>
          <Input
            required
            type="password"
            placeholder="New password"
            name="password"
            value={newPassword}
            onChange={handleChangePassword}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label>Confirm password</Label>
          <Input
            required
            type="password"
            placeholder="Confirm password"
            name="password"
            value={passwordConfirmation}
            onChange={e => setPasswordConfirmation(e.target.value)}
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

      <Container>
        {incorrectPassword ? (
          <Alert color="warning text-center">The passwords don't match</Alert>
        ) : null}
      </Container>
    </Container>
  )
})

export default PasswordChange
