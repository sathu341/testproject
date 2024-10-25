import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import axios from 'axios'
function App() {
  const [todolist,setTodolist]=useState({});

  const changeValue=(e)=>{
    setTodolist({...todolist,[e.target.name]:e.target.value})

  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const api="http://localhost:9000/userrouter/create"//api from backend 
    axios.post(api,todolist)
    .then((res)=>{
      alert(res.data)
    })  
    
  }
  return (
    <>
    <Container>
      <Row className='mt-3 p-3   justify-content-center'>
        <Col lg={6} className=' p-3 border shadow'>
         <Form>
          <Form.Label>
            Title
          </Form.Label>
         <Form.Control onChange={(e)=>{changeValue(e)}} type="text" name="subtitle"></Form.Control>
         <Button className='mt-3' variant='success' onClick={handleSubmit}>Submit</Button>

         </Form>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App
