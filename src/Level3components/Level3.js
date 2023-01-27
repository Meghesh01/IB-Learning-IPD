import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Level3.scss';
import { Link} from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'

export default function Level3() {
  return (
    <div id="Level3">
    <div>
        <section>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
        <img src={sbilogo} className="sbi-logo" alt="sbi" style={{height : 48 , marginRight: 7}}/>
              <b>BANK ONLINE</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav" className="mx-5 justify-content-end">
          <Nav className="mx-9 fw-bold">
          <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Levelspage">
            <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
            <b> Logout </b></Nav.Link>
            {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </section>
    <section className='nav-2' style={{ marginTop: 60 }} >
        <ul >
            <li><b>ADD BENEFICIARY</b></li>
            </ul>
    </section>
    <section className='max-width'>
      <div className='list1'>
        <ul>
          <li><b>ADD</b></li>
          <li><b>MODIFY</b></li>
          <li><b>DELETE</b></li>
          <li><b>VIEW</b></li>
        </ul>
        <hr className='hr'></hr>
      </div>
      <div className='list4'>
        <ul>
          <li><b> Name </b>:<input type="text" className='inp1'/></li>
          <li><b>Account Number</b> :<input type="text" className='inp2'/></li>
          <li><b>Confirm Account Number</b> :<input type="text" className='inp3'/> </li>
          <li><b>Adress1</b> :<input type="text" className='inp4'/> </li>
          <li><b>Adress2</b> :<input type="text" className='inp5'/> </li>
          <li><b>Adress3</b> :<input type="text" className='inp6'/></li>
          <li><b>Transfer Limit</b> :<input type="text" className='inp7'/> </li>
        </ul>
      </div>
      
      
      <div className='list7'>
        <ul>
          <li><input type="checkbox"/></li>
          <li>I accept the terms and conditions</li>
        </ul>
      </div>
      {/* <div className="list8">
        <ul>
          <li><button className='button-87'><b>Submit</b></button></li>
          <li><button className='button-87'><b>Cancel</b></button></li>
        </ul>
      </div> */}
</section>


    </div>
    </div>
  )
}
