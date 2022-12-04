import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level1.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import {Link} from 'react-router-dom';

import L1_img from './L1_img.PNG';
import captcha_img from './captcha_img.PNG';
import login_icon from './login_icon.png';

import sbilogo from './sbi-logo.png';


export default function Level1() {
  return (
    <>
      <div id = "Level1">
        <section>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container>
              <Navbar.Brand href="#home">
                <img src={sbilogo} className="sbi-logo" alt="sbi" style={{ height: 40, marginRight: 7 }} />
                <b>BANK ONLINE</b></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
                <Nav className="mx-9 fw-bold">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <NavDropdown title="Language" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/">
                    <img src={login_icon} className="login_icon" alt="log-in" style={{ height: 30, marginRight: 7 }} />
                    <b> Login </b></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </section>

        <section style={{ marginTop: 60 }} >
          <ul className='nav-2' >

            <li>Login to your Account</li>
            <li id="redline">Dear Customer, Mandatory login and profile password change introduced for added security</li>
            <li>Welcome! User</li>

          </ul>

          {/* <p style={{textAlign : 'center' , fontSize : 20, marginTop : 10}}><b>WELCOME ! MEGHESH NANDKUMAR NAGPURE</b></p> */}
        </section>
        <section>
          <div class="row" style={{ alignContent: 'center' }}>
            <div class="column">
              <p id="redline">(CARE: Username and password are case sensitive.)</p>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username*</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password*</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCaptcha">
                  <Form.Label>Enter the text as shown in the image*</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" />
                  <img src={captcha_img} className="captcha_img" alt="img_captcha" style = {{marginTop : '10px'}} />
                </Form.Group>
                
                <Button variant="primary" type="submit" style = {{width:'100px', marginRight:'10px'}}>
                  Submit
                </Button>
                <Button variant="primary" type="reset" style = {{width:'100px', marginRight:'10px'}}>
                  Reset
                </Button>
                <p style = {{marginTop:'15px' , fontSize:'13px'}}>OTP based login is mandatory. Please do not share OTP / Password / User information with anyone.</p>
              </Form>
            </div>
            <div class="column">
              <img src={L1_img} className="L1_img" alt="img2" style={{ width: '90%'  }} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
