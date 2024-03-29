import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './QuickTransfer.scss';
import { Link} from 'react-router-dom';
import sbilogo from './sbi-logo.png';
import logoutlogo from './logout.png';
import rupeeblack from '../images/rupeeblack.png'
import Modal from 'react-bootstrap/Modal';
import L2_completedaudio from "./L2_completed_audio.mp3";
import partyPopper from './party-popper.png';
import coins from '../images/coins.png'
import Button from 'react-bootstrap/Button';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton style={{ color: 'white', backgroundColor: 'black' }}>
        <Modal.Title id="contained-modal-title-vcenter" style={{ fontStyle: 'italic', marginLeft: '62px' }}>
          <img src={partyPopper} className="party_popper" alt="partypop" style={{ height: 40, marginRight: 10, marginBottom: 10 }} />
          CONGRATULATIONS
          <img src={partyPopper} className="party_popper" alt="partypop" style={{ height: 40, marginLeft: 10, marginBottom: 10 }} />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: 'lightGreen', textAlign: 'center' }}>
        <h4 style={{ color: 'darkGreen', fontSize: '30px' }}>Level 2 Completed !!!</h4>
        <p style={{ fontSize: '20px' }} >
          Heartily Congratulations for your first victory. You have successfully learnt to perform quick transfer.
        </p>
        <p style={{ fontSize: '20px', textAlign: 'center' }} className="fw-bold">Coins Earned: <img src={coins} className="coins" alt="coin" style={{ height: '40px' }} /> 20 pts</p>
      </Modal.Body>
      <Modal.Footer>
        {/* <Button onClick={props.onHide}>Close</Button> */}
        <Link to="/LevelsPage">
          <button type="button" class="btn btn-danger mx-2">Close</button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
export default function QuickTransfer() {

  const audio5 = new Audio(L2_completedaudio);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div id="QuickTransfer">
      <section>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
        <img src={sbilogo} className="sbi-logo" alt="sbi" style={{height : 40 , marginRight: 7}}/>
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
            <li><b>QUICK TRANSFER</b></li>
            </ul>
    </section>
    <section className='max-width'>
      <div className='list1'>
        <ul>
          <li><b>Account Number</b></li>
          <li><b>Account type</b></li>
          <li><b>Branch</b></li>
          <li><b>Balance</b></li>
        </ul>
        <hr className='hr'></hr>
      </div>
      <div className='list2'>
        <ul>
          <li ><input type="radio" id="html" name="fav_language" value="HTML"/> 60003200024</li>
          <li>Savings</li>
          <li>Vile parle</li>
          <li><img className="rupeeblack" src={rupeeblack}/>54000</li>
        </ul>
      </div>
      <div className='list3'>
        <ul>
          <li><b>Selected account number :</b></li>
          <li>60003200024</li>
        </ul>
      </div>
      <div className='list4'>
        <ul>
          <li><b>Beneficary Name </b>:<input type="text" className='inp1'/></li>
          <li><b>Beneficary Account Number</b> :<input type="text" className='inp2'/></li>
          <li><b>Re-enter Beneficary Account Number</b> :<input type="text" className='inp3'/> </li>
        </ul>
      </div>
      <div className='list5'>
        <ul>
          <li><b>Amount</b> : <input type="text" className='inp4'/></li>
        </ul>
      </div>
      <div className='list6'>
        <ul>
          <li><b>Purpose </b>: </li>
            <li><select className='dropdown'>
             
              <option>Select Purpose</option>
              <option>Fees</option>
              <option>Rent</option>
              <option>Bills</option>

              </select>
              </li> 
        </ul>
      </div>
      <div className='list7'>
        <ul>
          <li><input type="checkbox"/></li>
          <li>I accept the terms and conditions</li>
        </ul>
      </div>
      <div className="list8">
        <ul>
          {/* <li><button className='button-87'><b>Submit</b></button></li> */}
          <li><Button className='button-87' style={{ width: '100px', marginRight: '10px' }} onClick={(e) => { e.preventDefault(); setModalShow(true) ; audio5.loop = false; audio5.play();} } >
                  Submit
                </Button>
                <MyVerticallyCenteredModal
                  show={modalShow}
                  // onHide={() => setModalShow(false)}
                /></li>
          <li><button className='button-87'><b>Cancel</b></button></li>
        </ul>
      </div>
</section>
   </div>
  
  )
}
