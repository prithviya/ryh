import React from 'react';
import Image from '../../constants/asset';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Header.css';
import { Link } from "react-scroll";


function Header() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand}>
          <Container fluid>
            <Navbar.Brand href="#">
              <img src={ Image.BANNER_LOGO } alt="" style={{maxWidth: "150px", marginLeft: '20px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} style={{border:'none'}}>
              <img src={ Image.MENU_ICON}/>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={ Image.BANNER_LOGO } alt="" style={{maxWidth: "250px"}}/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="">
                    <li className="">
                      <Link to="about">About</Link>
                    </li>  
                  </Nav.Link>
                  <Nav.Link href="">
                    <li className="">
                      <Link to="service">
                        Services
                      </Link>
                    </li>  
                  </Nav.Link>
                  <Nav.Link href="">
                    <li className="">
                      <Link to="team">
                        Team
                      </Link>
                    </li> 
                  </Nav.Link>
                  <Nav.Link href="http://showcase.rankuhigher.in/">
                    Projects
                  </Nav.Link>
                  <Nav.Link>
                    <li className="">
                      <Link to="contact">
                        Contact
                      </Link>
                    </li>
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header