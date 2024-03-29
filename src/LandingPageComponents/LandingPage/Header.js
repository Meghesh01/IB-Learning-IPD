import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import '../Styles/style1.scss'
import logo from '../images/Landing Page images/logo.png'
import { useState } from "react";

import { Link } from 'react-router-dom';
// function loadgoogletranslate(){
//   new google.translate.TranslateElement("landing-page")
// }
export default function Header() {
  useEffect(() => {
    AOS.init({
        // Global settings:
        duration : 2500,
        delay : 200
    });
    AOS.refresh();
  }, []);


  // useEffect(() => {
  //   const script = document.createElement("script")

  //   script.src = 
  //   "http://translate.google.com/translate_a/element.js?cb=loadgoogletranslate";
  // }, [])
  

  return (
    <>
        <header id="header" className="header fixed-top">
          <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="#hero" className="logo d-flex align-items-center">
              {/* <img src="assets/img/logo.png" alt=""/> */}
              <img src={logo} alt=""/>
              <span className='translateHindi'>IB Learning</span>
            </a>

            <nav id="navbar" className="navbar">
              <ul>
                <li><a className="translateHindi nav-link scrollto active" to="#hero">Home</a></li>
                <li><a className="translateHindi nav-link scrollto" href="#about">About</a></li>
                <li><a className="translateHindi nav-link scrollto" href="#features">Features</a></li>
                <li><a className="translateHindi nav-link scrollto" href="#team">Team</a></li>
                <li><a className="translateHindi nav-link scrollto" href="#contact">Contact</a></li>
                <li className=" dropdown"><a href="/"><span className='translateHindi'>Language</span> <i className="bi bi-chevron-down"></i></a>
                  <ul>
                    <li><a className='translateHindi' href="#hero">English</a></li>
                    <li><a onClick={translate} className='translateHindi' href="#hero">Hindi</a></li>
                  </ul>
                </li>
                <li><Link to="/Login" className="translateHindi getstarted scrollto">Login / Register</Link></li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle"></i>
            </nav>

          </div>
        </header>
    </>
  )
}
