import React,{useState,useEffect} from 'react'
import {Accordion,Form,Button, Col, Row} from 'react-bootstrap'


function Forms() {
    
    const [user,setUser]=useState({
        name:'',
        email:'',
        password:''
    })

    const nameHandler=(e)=>{
        setUser({
            ...user,
            name:e.target.value
        })
    }

    const emailHandler=(e)=>{
        setUser({
            ...user,
            email:e.target.value
        })
    }

    const passwordHandler=(e)=>{
        setUser({
            ...user,
            password:e.target.value
        })
    }


    const displayUser=()=>{
        setUser({
            ...user,
            user
        })
        console.log(user)
    }

    return (
        <div>
            <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Log In</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                   Log In
                                </Button>
                                </Form>
                            </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Sign Up</Accordion.Header>
                            <Accordion.Body>
                            <Form>
                            <Form.Group className='mb-3' controlId="formBasicText">
                            <Row>
                            <Col type='sm' xs={2}>
                                <Form.Label>Enter Full Name</Form.Label>
                            </Col>
                            <Col>   
                                <Form.Control type="text" value={user.name} onChange={nameHandler} placeholder="Enter Full Name"/>
                                </Col> 
                                </Row>
                            </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" value={user.email} onChange={emailHandler} placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={user.password} onChange={passwordHandler}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Confirm Password</Form.Label>
                                    <Form.Control type="password" />
                                </Form.Group>
                                <Button variant="primary" onClick={displayUser} >
                                Sign Up
                                </Button>
                                </Form>
                                
                            </Accordion.Body>
                    </Accordion.Item>
               </Accordion>
        </div>
    )
}

export default Forms
