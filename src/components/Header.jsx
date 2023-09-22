import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
<Navbar expand="lg" className="bg-body-tertiary fw-bold fixed-top ">
        <Container>
          <Navbar.Brand  href="/"><h3><span><i class="bi bi-headset"></i></span>SkullCandy</h3></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
               <Nav.Link  href="/">Home</Nav.Link>
               <Nav.Link  href="/Products">Products</Nav.Link>
               <Nav.Link  href="/Login">SignIn</Nav.Link> 
               <Nav.Link  href="/Signup">SignUp</Nav.Link> 
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header