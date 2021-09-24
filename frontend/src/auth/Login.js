import React from 'react'
import {Accordion,Form,Button, Col, Row, Alert} from 'react-bootstrap'


function Login (props) {
    
    const {email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailErr,passwordErr}=props

    return (
        <div>
        <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Log In</Accordion.Header>
                            <Accordion.Body>
                                <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={email} onChange={e=>{setEmail(e.target.value)}} placeholder="Enter email" />
                                    </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" value={password} onChange={e=>{setPassword(e.target.value)}}/>
                                </Form.Group>
                                <p>{passwordErr}</p>
                                {
                                    hasAccount?(
                                        <>
                                        <Button variant="primary" onClick={handleLogin}>Log In</Button>
                                        <p>Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                                        </>
                                    ):(
                                        <>
                                        <Button variant="primary" onClick={handleSignUp}>Sign Up</Button>
                                        <p>Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Log In</span></p>
                                        </> 
                                    )
                                }
                                
                                </Form>
                            </Accordion.Body>
                    </Accordion.Item>

                    
               </Accordion>
            
        </div>
    )
}

export default Login
