import React from 'react'
import logo from '../assets/logo.svg';

import fb from '../assets/Group 1000004395.svg'
import yt from '../assets/Group 1000004401.svg'
import twitter from '../assets/Group 1000004403.svg'
import linkedin from '../assets/Group 1000004400.svg'
import quora from '../assets/Vector.svg'
import insta from '../assets/Group 1000004397.svg'

import pin from '../assets/geo-alt-fill.svg'
import phone from '../assets/telephone-fill.svg'
import '../styles/Footer.css'

export const Footer = () => {
  return (
  <>
    <footer className='footer'>
      
      <div className='footer-section'>
        <img src={logo} alt="" className='footer-logo pl-8'/>
        <div className='footer-description md:w-[250px] pl-8'>Qriocity as a training institution for IT Graduates assisting them to scale up the IT industry</div>

        <div className='footer-item address pl-8 ' >
          <img src={pin} alt="" style={{ fill: 'red' }} />
          <div className='md:w-[250px] '   >No:29, Vallalar Nagar, Salamedu, Villupuram, Pincode-605401</div>
          
        </div>
        <div className='footer-item address pl-8 '>
          <img src={phone} alt="" className='icon'/>
          <div>9955878589</div>
        </div>
      </div>

      <div className='footer-section'>
        <div className='section-heading'>Our Courses</div>
        <div className='footer-item-container'>
          <a className='footer-item' href="/">Machine Learning</a>
          <a className='footer-item' href="/">Python</a>
          <a className='footer-item' href="/">Data Science</a>
          <a className='footer-item' href="/">Artificial Intelagence</a>
          <a className='footer-item' href="/">Full Stack Development</a>
          <a className='footer-item' href="/">Automation Testing</a>
        </div>
      </div>

      <div className='footer-section pl-8'>
        <div className='section-heading'>Resources</div>
        <div className='footer-item-container '>
          <a className='footer-item' href="/">Blog</a>
          <a className='footer-item' href="/">About Us</a>
          <a className='footer-item' href="/">Contact Us</a>
          <a className='footer-item' href="/">Careers</a>
          <a className='footer-item' href="/">Review</a>
          <a className='footer-item' href="/">Privacy Poacy</a>
        </div>
      </div>

      <div className='footer-section'>
        <div className='section-heading'>Follow us on</div>
        <div className='footer-item-container'>
          <a className='footer-item' href="/"> 
            <img src={yt}></img>
            <div>Youtube</div>
          </a>
          <a className='footer-item' href="/"> 
            <img src={linkedin}></img>
            <div>Linkedin</div>
          </a>
          <a className='footer-item' href="/"> 
            <img src={fb}></img>
            <div>Facebook</div>
          </a>
          <a className='footer-item' href="/"> 
            <img src={twitter}></img>
            <div>Twitter</div>
          </a>
          <a className='footer-item' href="/"> 
            <img src={insta}></img>
            <div>Instagram</div>
          </a>
          <a className='footer-item' href="/"> 
            <img src={quora}></img>
            <div>Review on Quora</div>
          </a>
          
        </div>
      </div>

    </footer>

    <div className='footer-bottom'>
      © 2023 Qriocity. All rights reserved.
    </div>
  </>
  )
}
