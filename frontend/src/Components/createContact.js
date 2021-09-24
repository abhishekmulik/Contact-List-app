import React,{useState,useEffect} from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
import {RiPencilLine} from 'react-icons/ri'
import axios from 'axios'


function MyVerticallyCenteredModal(props) {

    const [input,setInput]=useState({
      name:'',
      contact:'',
      email:''
    })
    
    const handleChange=(event)=>{
      const {name,value}=event.target
      setInput(prevInput=>{
        return{
          ...prevInput,
          [name]:value
        }
      })
    }

    const handleClickEvent=(event)=>{
      event.preventDefault()
      const newUser={
        name:input.name,
        contact:input.contact,
        email:input.email
      }
      axios.post('http://localhost:8000/api/post-user',newUser)   
      setInput({
        name:'',
        email:'',
        contact:''
      })
      props.onHide()
    }

    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create New Contact
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Add Contact</h4>
          <Form>
         <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" value={input.name} onChange={handleChange} placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicContact">
            <Form.Label>Contact no:</Form.Label>
            <Form.Control type="contact" name="contact" value={input.contact} onChange={handleChange} placeholder="Enter Contact" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicMail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" value={input.email} onChange={handleChange} placeholder="Enter Email Address" />
        </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
          <Button onClick={handleClickEvent}>Submit</Button>
        </Modal.Footer>
        
      </Modal>
    );
  }
  
  function CreateContact() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
      <>
      <Button variant="primary" style={{marginTop: "20px",
            position: "absolute",
            left: "50%",
            msTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
            }} onClick={() => setModalShow(true)}>Create Contact</Button>
                    
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
  }

export default CreateContact
  