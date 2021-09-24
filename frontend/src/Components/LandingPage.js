import React,{useState,useEffect} from 'react'
import {Container,ListGroup,Accordion} from 'react-bootstrap'
import {FaPencilAlt} from 'react-icons/fa'
import {RiDeleteBin6Line,RiPencilLine} from 'react-icons/ri'
import {AiOutlinePhone,AiOutlineMail} from 'react-icons/ai'
import CreateContact from './createContact'
import axios from 'axios'

function LandingPage() {
    const [user,setUser]=useState([{
        name:'',
        contact:'',
        email:''
    }])
    const handleUpdate=(id)=>{
        const newUser={
            name:prompt('enter Name'),
            email:prompt('enter email'),
            contact:prompt('enter contact')
        }
        axios.put(`http://localhost:8000/api/update-user/${id}`,newUser)
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost:8000/api/delete-user/${id}`)
    }
    useEffect(async ()=>{
        await fetch('http://localhost:8000/api/get-user').then(res=>{
            if(res.ok){
                return res.json()
            }
        }).then(jsonRes=>setUser(jsonRes))
    },[user])

   
    return (
        <div>
            <Container>
            <p className='font-link' style={{color:"purple",textAlign:'center',paddingBottom:'20px',paddingTop:'40px',fontWeight:'bolder',fontSize:'larger'}}><h1>Contact List</h1></p>
                
                {
                    user.map((u)=><Accordion>
                    <Accordion.Item eventKey={user.indexOf(u)}>
                        <Accordion.Header variant="info">{u.name}
                        <span style={{paddingLeft:'80%',position:'absolute'}}><FaPencilAlt onClick={()=>{
                            handleUpdate(u._id)
                        }}/>{' '}
                        <RiDeleteBin6Line onClick={()=>{
                            handleDelete(u._id)}}/></span>
                        </Accordion.Header>
                        <Accordion.Body>
                        <AiOutlinePhone/> {u.contact}
                        <br/>
                        <AiOutlineMail/>  {u.email}
                        </Accordion.Body>
                    </Accordion.Item>
                    </Accordion>
                    )}
                <br/>
            </Container>
            <CreateContact/>
        </div>
    )
}

export default LandingPage