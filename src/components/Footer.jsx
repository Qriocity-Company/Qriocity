import React from "react";
import logo from "../assets/logo.svg";

import fb from "../assets/Group 1000004395.svg";
import yt from "../assets/Group 1000004401.svg";
import { FaGoogle } from "react-icons/fa";
import linkedin from "../assets/Group 1000004400.svg";
import quora from "../assets/Vector.svg";
import insta from "../assets/Group 1000004397.svg";

import pin from "../assets/geo-alt-fill.svg";
import phone from "../assets/telephone-fill.svg";
import "../styles/Footer.css";

export const Footer = () => {
  return (
    <>
     <div className="footer-main w-full">
     <footer className="footer flex md:flex-row flex-col w-5/6 mx-auto">
        <div className="footer-section">
          <img src={logo} alt="" className="footer-logo pl-8" />
          <div className="footer-description md:w-[250px] pl-8">
            Qriocity as a training institution for IT Graduates assisting them
            to scale up the IT industry
          </div>

          <div className="footer-item address pl-8 ">
            <img src={pin} alt="" style={{ fill: "red" }} className="icon" />
            <div className="md:w-[250px] ">
              No:29, Vallalar Nagar, Salamedu, Villupuram, Pincode-605401
            </div>
          </div>
          <div className="footer-item address pl-8 ">
            <img src={phone} alt="" className="icon" />
            <div>9944878589</div>
          </div>
        </div>

        <div className="footer-section courses">
          <div className="section-heading">Our Courses</div>
          <div className="footer-item-container">
            <a className="footer-item" href="/courses">
              Machine Learning
            </a>
            <a className="footer-item" href="/courses">
              Python
            </a>
            <a className="footer-item" href="/courses">
              Data Science
            </a>
            <a className="footer-item" href="/courses">
              Artificial Intelligence
            </a>
            <a className="footer-item" href="/courses">
              Full Stack Development
            </a>
            <a className="footer-item" href="/courses">
              Data Structures And Algorithms
            </a>
          </div>
        </div>

        {/* <div className="footer-section pl-8 courses">
          <div className="section-heading">Resources</div>
          <div className="footer-item-container ">
            <a className="footer-item" href="/">
              Blog
            </a>
            <a className="footer-item" href="/about">
              About Us
            </a>
            <a className="footer-item" href="/contact">
              Contact Us
            </a>
            <a className="footer-item" href="/">
              Careers
            </a>
            <a className="footer-item" href="/">
              Review
            </a>
            <a className="footer-item" href="/">
              Privacy Policy
            </a>
          </div>
        </div> */}

        <div className="footer-section ">
          <div className="section-heading">Follow us on</div>
          <div className="footer-item-container socials">
            <a className="footer-item" href="/">
              <img src={yt}></img>
              <div className="social-name">Youtube</div>
            </a>
            <a className="footer-item" href="https://www.linkedin.com/company/qriocity/">
              <img src={linkedin}></img>
              <div className="social-name">Linkedin</div>
            </a>
            <a className="footer-item" href="/">
              <img src={fb}></img>
              <div className="social-name">Facebook</div>
            </a>
            <a className="footer-item" href="https://www.instagram.com/qriocity_in/">
              <img src={insta}></img>
              <div className="social-name">Instagram</div>
            </a>
            <a className="footer-item" href="/">
              <FaGoogle  className="w-[32px] h-[32px] md:w-[18px] md:h-[18px]"  />
              <div className="social-name">Google Reviews</div>
            </a>
          </div>
        </div>
      </footer>
     </div>

      <div className="footer-bottom flex flex-col md:flex-row text-[14px]">
        <p> © 2023 Qriocity Ventures Privte Limited. </p>
        <p> All rights reserved.</p>
      </div>
    </>
  );
};
