import React from 'react'
import { useState, useEffect } from 'react'
import { api } from './../../../lib/api'

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

const Register = connect(
  [],
  actions
)(({ setUser, setRegistered }) => {
  // Default values of inputs
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  // Payload
  const [payload, setPayload] = useState(null)

  // Handle change inside inputs
  const handleChangeUsername = event => {
    setUsername(event.target.value)
  }

  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  // Check if passwords match
  const [incorrectPassword, setIncorrectPassword] = useState(false)

  const [uniqueUser, setUniqueUser] = useState(false)

  // When user submits the form, fill payload with the information
  const handleSubmit = event => {
    setUniqueUser(false)
    if (password === passwordConfirmation) {
      setIncorrectPassword(false)
      setPayload({ email: email, password: password, username: username })
      event.preventDefault()
      setUsername('')
      setEmail('')
      setPassword('')
      setPasswordConfirmation('')
    } else if (password !== passwordConfirmation) {
      event.preventDefault()
      setIncorrectPassword(true)
      setPassword('')
      setPasswordConfirmation('')
    }
  }

  const [response, setResponse] = useState()

  useEffect(() => {
    const abortController = new AbortController()

    if (payload) {
      api('/users', payload).then(resp => {
        console.log(resp)
        setResponse(resp)
      })
    }

    return () => {
      abortController.abort()
    }
  }, [payload])

  useEffect(() => {
    if (response && response.code === 11000) {
      setUniqueUser(true)
      console.log(response)
    } else if (response) {
      setRegistered(true)
      setUser(true)
    }

    return () => {
      setUniqueUser(false)
    }
  }, [response])

  return (
    <Container>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center">Register</h2>{' '}
        <FormGroup>
          <Label>Username</Label>
          <Input
            required
            type="text"
            value={username}
            onChange={handleChangeUsername}
            placeholder="Username"
            name="username"
          ></Input>
        </FormGroup>
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
        <FormGroup>
          <Label>Password</Label>
          <Input
            required
            type="password"
            placeholder="Password"
            name="password"
            value={password}
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
          Register{' '}
          <span role="img" aria-label="strawberry">
            🍓
          </span>
        </Button>
      </Form>
      <Container>
        {incorrectPassword ? (
          <Alert color="warning text-center">The passwords don't match</Alert>
        ) : null}
      </Container>
      <Container>
        {uniqueUser ? (
          <Alert color="warning text-center">
            This username/email address isn't available
          </Alert>
        ) : null}
      </Container>
    </Container>
  )
})

export default Register
