import React from 'react'
import './Home.css'
import { Col, Container, Row } from 'react-bootstrap'

function Home() {
  return (
    <Container fluid className='homeContainer'>
      <Row>
        <Col sm='12'>Home</Col>
      </Row>
    </Container>
  )
}

export default Home