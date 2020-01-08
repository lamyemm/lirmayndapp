import React from 'react'
import { useState, useEffect } from 'react'

import { connect } from 'unistore/react'

// Lib
import { api } from './../../../lib/api'

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

const SignIn = connect(
  ['user'],
  actions
)(({ user, setUser }) => {
  // Default values of inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Payload
  const [payload, setPayload] = useState(null)

  // Error auth

  const [errorAuth, setErrorAuth] = useState(false)

  // Handle change inside inputs
  const handleChangeEmail = event => {
    setEmail(event.target.value)
  }

  const handleChangePassword = event => {
    setPassword(event.target.value)
  }

  const handleSubmit = event => {
    setPayload({ email: email, password: password })
    event.preventDefault()
    setEmail('')
    setPassword('')
  }

  const [response, setResponse] = useState()

  useEffect(() => {
    const abortController = new AbortController()

    if (payload) {
      api('/users', payload).then(resp => setResponse(resp))
    }

    return () => {
      abortController.abort()
    }
  }, [payload])

  useEffect(() => {
    if (response && response.name === 'ValidationError') {
      setErrorAuth(true)
    } else if (response) {
      setUser(true)
    }

    return () => {
      setErrorAuth(false)
    }
  }, [response])

  return (
    <Container>
      <Form className="login-form" onSubmit={handleSubmit}>
        <h2 className="text-center">Sign in</h2>

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

        <Button
          className="btn-lg btn-dark btn-block"
          type="submit"
          value="submit"
        >
          Log in
          <span role="img" aria-label="kiwi">
            {' '}
            🥝
          </span>
        </Button>
      </Form>

      <Container>
        {errorAuth ? (
          <Alert color="warning text-center">Invalid email or password</Alert>
        ) : null}
      </Container>
    </Container>
  )
})

export default SignIn
