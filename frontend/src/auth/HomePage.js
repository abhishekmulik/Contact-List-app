import React from 'react'
import {Button, Nav} from "react-bootstrap"
function HomePage({handleLogout}) {
    return (
        <div>
            <h2>welcome</h2>
            <Nav fill variant="tabs">
            <Nav.Item>
                 <Button onClick={handleLogout}>Logout</Button>
            </Nav.Item> 
            </Nav>
        </div>
    )
}

export default HomePage
