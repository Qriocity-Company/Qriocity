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
import { Link } from "react-router-dom";

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
          <div className="section-heading">Quick Links</div>
          <div className="footer-item-container">
            <Link className="footer-item" to="/courses">
              Our Courses
            </Link>
            <Link className="footer-item" to="/projects">
              Projects
            </Link>
            <Link className="footer-item" to="/about">
              About Us
            </Link>
            <Link className="footer-item" to="/consultations">
              Free Consultations
            </Link>
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
            <a className="footer-item" href="https://www.google.com/search?q=qriocity+chennai+&sca_esv=589592780&sxsrf=AM9HkKnOB6dfca6ogOLa8XjFdi26X6Dqpg%3A1702230430157&ei=nvl1Ze-WCZnf2roPlIWR6AE&ved=0ahUKEwjv3fXAtoWDAxWZr1YBHZRCBB0Q4dUDCBA&uact=5&oq=qriocity+chennai+&gs_lp=Egxnd3Mtd2l6LXNlcnAiEXFyaW9jaXR5IGNoZW5uYWkgMgQQIxgnMgIQJkinBVDMA1jMA3ABeAGQAQCYAW6gAW6qAQMwLjG4AQPIAQD4AQHCAgoQABhHGNYEGLADwgINEAAYRxjWBBjJAxiwA-IDBBgAIEGIBgGQBgg&sclient=gws-wiz-serp">
              <FaGoogle  className="w-[22px] h-[22px] md:w-[18px] md:h-[18px]"  />
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
