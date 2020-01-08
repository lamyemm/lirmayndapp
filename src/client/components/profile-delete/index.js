import React from 'react'
import { useState } from 'react'

import { connect } from 'unistore/react'

// Store
import { actions } from '../../../store'

// Style
import {
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from 'reactstrap'

const ProfileDelete = connect(
  [],
  actions
)(() => {
  const [modal, setModal] = useState(false)

  const toggle = () => setModal(!modal)

  return (
    <Container>
      <Row>
        <Col className="col-md-4 offset-md-7">
          <Button color="secondary" onClick={toggle}>
            Delete account
          </Button>
          <Modal isOpen={modal} toggle={toggle} className="modal-account">
            <ModalHeader toggle={toggle}>Delete your account</ModalHeader>
            <ModalBody>
              If you delete your account, you will not be able to regain access
              to your account again. All your information will be permanently
              deleted.
            </ModalBody>
            <ModalFooter>
              <Button color="danger" onClick={toggle}>
                Confirm
              </Button>
              <Button color="secondary" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        </Col>
      </Row>
    </Container>
  )
})

export default ProfileDelete
