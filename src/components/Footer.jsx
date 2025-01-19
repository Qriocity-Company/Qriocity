import React from "react";
import logo from "../assets/logo.svg";

import fb from "../assets/Group 1000004395.svg";
import yt from "../assets/Group 1000004401.svg";
import { FaYoutube } from "react-icons/fa";
import linkedin from "../assets/Group 1000004400.svg";
import quora from "../assets/Vector.svg";
import insta from "../assets/Group 1000004397.svg";

import pin from "../assets/geo-alt-fill.svg";
import phone from "../assets/telephone-fill.svg";
import "../styles/Footer.css";
import { Link } from "react-router-dom";
import { IoIosMail } from "react-icons/io";
export const Footer = () => {
  return (
    <>
      <div className="footer-main w-full">
        <footer className="footer flex md:flex-row flex-col w-5/6 mx-auto">
          <div className="footer-section">
            <img src={logo} alt="" className="footer-logo pl-8" />
            <div className="footer-description md:w-[350px] pl-8">
              Qriocity is a training institution for IT Graduates assisting them
              to scale up the IT industry.
            </div>

            <div className="footer-item address pl-8 ">
              <img src={pin} alt="" style={{ fill: "red" }} className="icon" />
              <div className="md:w-[250px] ">
                20, Elango Adigal St, Avvai Nagar, Choolaimedu, Chennai, Tamil
                Nadu 600094
              </div>
            </div>
            <div className="footer-item address pl-8 ">
              <img src={phone} alt="" className="icon" />
              <div>+91 8754381419</div>
            </div>
            <div className="footer-item mail pl-8 ">
              <IoIosMail size={22} />
              <div>contact@qriocity.in</div>
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
              <a
                className="footer-item"
                href="https://www.linkedin.com/company/qriocity/"
              >
                <img src={linkedin}></img>
                <div className="social-name">Linkedin</div>
              </a>

              <a
                className="footer-item"
                href="https://www.instagram.com/qriocity.in/"
              >
                <img src={insta}></img>
                <div className="social-name">Instagram</div>
              </a>
              <a
                className="footer-item"
                href="https://youtube.com/@qriocity.projects?si=J0DTFrmNszWKH6P1"
              >
                <FaYoutube className="w-[22px] h-[22px] md:w-[18px] md:h-[18px]" />
                <div className="social-name">Youtube</div>
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="flex justify-center items-center text-gray-400 mt-3 flex-col md:flex-row text-[14px] gap-8">
        <a
          className="hover:underline hover:underline-offset-4 "
          href="/privacy-policy"
        >
          Privacy Policy
        </a>
        <a className="hover:underline hover:underline-offset-4 " href="/terms">
          Terms and Conditions
        </a>
        <a className="hover:underline hover:underline-offset-4 " href="/refund">
          Refund & Cancellation policy
        </a>
      </div>
      <div className="items-center justify-center text-gray-400 mt-4 flex flex-col md:flex-row text-[14px]">
        <p> © 2024 Qriocity Ventures Privte Limited. </p>
        <p> All rights reserved.</p>
        <br />
      </div>
    </>
  );
};
