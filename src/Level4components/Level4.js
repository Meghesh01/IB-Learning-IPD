import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Level4.css";
import sbilogo from "./sbi-logo.png";
import logoutlogo from "./logout.png";
import rupeeblack from "../images/rupeeblack.png";

export default function Transfer() {
  return (
    <>
    <div id="TRANSFER">
      <div>
      <section>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src={sbilogo}
                className="sbi-logo"
                alt="sbi"
                style={{ height: 48, marginRight: 7 }}
              />
              <b>BANK ONLINE</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="mx-5 justify-content-end"
            >
              <Nav className="mx-9 fw-bold">
                <Nav.Link href="#home">Home</Nav.Link>
                <NavDropdown title="Language" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Hindi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">
                    English
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Levelspage">
                  <img
                    src={logoutlogo}
                    className="logout-logo"
                    alt="log-out"
                    style={{ height: 30, marginRight: 7 }}
                  />
                  <b> Logout </b>
                </Nav.Link>
                {/* <Link to="/Levelspage">
            
              <img src={logoutlogo} className="logout-logo" alt="log-out" style={{height : 30 , marginRight: 7}}/>
               <b>Logout</b>
            
            </Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </section>
      <section className="nav-2" style={{ marginTop: 60 }}>
        <ul>
          <li>
            <b>ADD BENEFICIARY</b>
          </li>
        </ul>
      </section>
      <section className="max-width">
        <div className="list41">
          <ul>
            <li>
              <b>Account Number</b>
            </li>
            <li>
              <b>Account type</b>
            </li>
            <li>
              <b>Branch</b>
            </li>
            <li>
              <b>Balance</b>
            </li>
          </ul>
          <hr className="hr"></hr>
        </div>
        <div className="list42">
          <ul>
            <li>
              <input
                type="radio"
                className="inp41"
                name="fav_language"
                value="HTML"
              />{" "}
              60003200019
            </li>
            <li>Saving Account</li>
            <li>Vile Parle</li>
            <li>
              <img className="rupeeblack" src={rupeeblack} />
              10000
            </li>
          </ul>
        </div>
        <div className="list43">
          <ul>
            <li>
              <b>Selected Acccount Number :</b>
            </li>
            <li>60003200019</li>
          </ul>
          <div className="list44">
            <ul>
              <li>
                <b>Amount:</b>
                <input type="text" className="inp2" />
              </li>
            </ul>
          </div>

          <div className="row">
            <div style={{ width: "230px" }} className="col-md-3">
              <li style={{ listStyle: "none", marginLeft: "30px" }}>
                <b>Purpose :</b>
              </li>
            </div>
            <div style={{ width: "275px" }} className="col-4">
              <select
                class="form-select form-select-sm mb-3"
                aria-label=".form-select-sm example"
              >
                <option selected>--Select--</option>
                <option value="1">FEES</option>
                <option value="2">BILLS</option>
                <option value="3">RENT</option>
                <option value="4">OTHERS</option>
              </select>
            </div>
          </div>
        </div>
        <table>
          <tr>
            <th class="th1">
              <b>Account no</b>
            </th>
            <th>
              <b>Beneficary name</b>
            </th>
            <th>
              <b>Branch</b>
            </th>
            <th>
              <b>Bank</b>
            </th>
            <th>
              <b>Limit</b>
            </th>
          </tr>
          <tr>
            <td class="th1">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              ></input>{" "}
              <b>09876543</b>
            </td>
            <td>
              <b>Harish Sir</b>
            </td>
            <td>
              <b>KALYAN</b>
            </td>
            <td>
              <b>ICICI BANK LIMITED</b>
            </td>
            <td>
              <b>10,000.00</b>
            </td>
          </tr>
          <tr>
            <td class="th2">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              ></input>{" "}
              <b>60003000</b>
            </td>
            <td>
              <b>Meghesh Sir</b>
            </td>
            <td>
              <b>VIRAR</b>
            </td>
            <td>
              <b>SBI BANK LIMITED</b>
            </td>
            <td>
              <b>8,000.00</b>
            </td>
          </tr>
          <tr>
            <td class="th3">
              <input
                type="radio"
                id="html"
                name="fav_language"
                value="HTML"
              ></input>{" "}
              <b>60003200</b>
            </td>
            <td>
              <b>Rahul Sir</b>
            </td>
            <td>
              <b>BORIVALI</b>
            </td>
            <td>
              <b>ICICI BANK LIMITED</b>
            </td>
            <td>
              <b>9,000.00</b>
            </td>
          </tr>
        </table>
        <div className="list7">
          <ul>
            <li>
              <input type="checkbox" />
            </li>
            <li>I accept the terms and conditions</li>
          </ul>
        </div>
        <div className="list8">
          <ul>
            {/* <li><button className='button-87'><b>Submit</b></button></li> */}
            <li>
              <button
                className="button-87"
                style={{ width: "100px", marginRight: "10px" }}
              >
                Submit
              </button>
            </li>
            <li>
              <button className="button-87">
                <b>Cancel</b>
              </button>
            </li>
          </ul>
        </div>
      </section>
      </div>
    </div>
    </>
  );
}
