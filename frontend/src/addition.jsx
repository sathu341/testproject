
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useState } from 'react'
import axios from 'axios'
export default function Addition() {
    const [number,setNumber]=useState({})
    const handleChange=(e)=>{
        setNumber({...number,[e.target.name]:e.target.value})
    }
    const handleButton=(e)=>{
         const api="http://localhost:9000/userrouter/addition"
         axios.post(api,number)
         .then((res)=>{
            alert(res.data)
         })
         .catch(err=>console.log(err))
    }
  return (
    <>
    <Container>
        <Row className="justify-content-center mt-3">
            <Col lg={6} className="border shadow rounded p-2">
              <Form.Group className="mt-2 p-3">
                <Form.Label>Enter first Number</Form.Label>
                <Form.Control onChange={handleChange} type="text" name="no1"/>
              </Form.Group>
              <Form.Group className="mt-2 p-3">
                <Form.Label>Enter second Number</Form.Label>
                <Form.Control onChange={handleChange}  type="text" name="no2"/>
              </Form.Group>
              <Form.Group align="center">
                <Button variant='danger' onClick={handleButton}>
                    Addition
                </Button>
              </Form.Group>
            </Col>
        </Row>
    </Container>
    </>
  )
}
