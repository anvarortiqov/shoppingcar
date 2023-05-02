import React from "react";
import logo from '../assets/logo.png'
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { BiMailSend } from "react-icons/bi";
import { AiFillYoutube, AiOutlineInstagram, AiFillFacebook } from "react-icons/ai";
function Header() {
  return (
    <header className="header">
      <div className="suphead">
        <div className="suphead-info">
          <BsFillTelephoneOutboundFill />
          <a href="#" className="social-tel sup-link">
           
              <span className="orange">Biz bilan bog`laning</span> <br></br>
              +998910000000
          
          </a>
        </div>
        <div className="logo">
          <img src={logo} alt="sup-logo" className="logo-brand" />
        </div>
        <div className="suphead-info">
          <BiMailSend />
          <a href="#" className="social-tel sup-link">
            <p className="sup-text">
              <span className="orange">Biz bilan bog`laning</span> <br></br>
              +998910000000
            </p>
          </a>
        </div>
      </div>
      <nav className="container row nav">
        <div className="brand">
          <img src={logo} alt="logo" className="logo-brand" />
          <span className="brand-name">Mersades</span>
        </div>
        <ul>
          <li>
            <a href="" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Cars
            </a>
          </li>
          <li>
            <a href="" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
        <div className="nav-socials">
          <a href="#" className="social-link">
            <AiFillFacebook/>
          </a>
          <a href="#" className="social-link">
           <AiOutlineInstagram/>
          </a>
          <a href="#" className="social-link">
            <AiFillYoutube/>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
