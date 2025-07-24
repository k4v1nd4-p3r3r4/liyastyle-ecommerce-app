import React from "react";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import Logo from '../../assets/image/logo-b.png';

export const Home = () => {
  return (
    <>
      <header className="shadow">
        <div className="bg-dark text-center">
          <span className="text-white ">Your Fashion Partner</span>
        </div>
        <div className="container">
          <Navbar expand="lg" className="">
            <Container fluid>
              <Navbar.Brand href="#">
              <img src={Logo} alt="" width={100} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="ms-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Woman</Nav.Link>
                  <Nav.Link href="#action2">Men</Nav.Link>
                  <Nav.Link href="#action2">Kids</Nav.Link>
                </Nav>
                
               
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </header>
    </>
  );
};
