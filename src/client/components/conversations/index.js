// Dependencies
import React, { useState, useEffect } from 'react'

import { connect } from 'unistore/react'
import { Link } from 'react-router-dom'

// Store
import { actions } from '../../../store'

// Style
import { Container, Row, Col } from 'reactstrap'

import pingu from './img/pingu.jpeg'

const Conversations = connect(
  ['avatar'],
  actions
)(({ id, name, messages, avatar }) => {
  const [newSrc, setNewSrc] = useState(null)

  // Test with avatar
  useEffect(() => {
    avatar ? setNewSrc(window.URL.createObjectURL(avatar)) : setNewSrc(pingu)

    return () => {
      setNewSrc(null)
    }
  }, [avatar])

  return (
    <Container className="conv-list">
      <Link
        to={{
          pathname: `/chat/${id}`
        }}
      >
        <Row className="conv-element">
          <Col className="col-4">
            {newSrc ? (
              <img className="avatar" src={newSrc} alt={'profile'} />
            ) : null}
          </Col>
          <Col>
            <Row>{name}</Row>
            <Row>
              <Col>{messages[messages.length - 1].content}</Col>
              <Col>{messages[messages.length - 1].time}</Col>
            </Row>
          </Col>
        </Row>
      </Link>
    </Container>
  )
})

export default Conversations
