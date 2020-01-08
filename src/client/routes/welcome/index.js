// Dependencies
import React, { useState } from 'react'
import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Components
import WhyApp from './../../components/why-app'
import SignIn from './../../components/sign-in'
import Register from './../../components/register'
import RegisterConfirmation from './../../components/register-confirmation'

// Style
import { Container, Button, Row, Col } from 'reactstrap'
import PasswordForgotten from '../../components/password-forgotten'

const Welcome = connect(
  ['user', 'avatar', 'registered'],
  actions
)(({ registered }) => {
  const [login, setLogin] = useState(true)

  const handleRegister = () => {
    setLogin(!login)
  }

  const [passwordForgotten, setPasswordForgotten] = useState(false)

  const handlePasswordForgotten = () => {
    setPasswordForgotten(!passwordForgotten)
  }

  return (
    <Container className="welcome-component">
      {passwordForgotten ? (
        <React.Fragment>
          <Button onClick={() => handlePasswordForgotten()}>
            <i className="fas fa-arrow-left"></i>
          </Button>

          <PasswordForgotten />
        </React.Fragment>
      ) : login ? (
        <React.Fragment>
          <WhyApp />
          <SignIn />
          <Row>
            <Col className="col-md-4 offset-md-6">
              <Button color="link" onClick={() => handlePasswordForgotten()}>
                Forgot password ?
              </Button>
            </Col>
          </Row>

          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => handleRegister()}
            >
              Register
            </button>
          </div>
        </React.Fragment>
      ) : !registered ? (
        <React.Fragment>
          <WhyApp />
          <Register />
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => handleRegister()}
            >
              Sign in
            </button>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <RegisterConfirmation />
          <div className="text-center">
            <button
              type="button"
              className="btn btn-outline-light"
              onClick={() => handleRegister()}
            >
              Sign in
            </button>
          </div>
        </React.Fragment>
      )}
    </Container>
  )
})

export default Welcome
