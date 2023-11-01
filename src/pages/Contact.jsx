import React from 'react'
import { Navbar } from '../components/Navbar'
import '../styles/Contact.css'
import fb from '../assets/Group 1000004395.svg'
import twitter from '../assets/Group 1000004403.svg'
import insta from '../assets/Group 1000004397.svg'

import name from '../assets/ri_user-4-fill.svg'
import email from '../assets/ic_round-alternate-email.svg'
import phone from '../assets/fluent_phone-20-filled.svg'

import hand from '../assets/Image COntact.png'

const Contact = () => {
  return (
    <div className='contact-page'>
      <div class="blob blob-orange"></div>
      <div class="blob blob-blue"></div>

      <div className='contact-container'>

        <div className='contact-form'>
          <div className='contact-header'>
              <div>Let's talk</div>
              <p>Reachout to us for something awesome together</p>
          </div>

          <form action="">

            <div className='form-component'>
              <img src={name} alt="" />
              <input type="text" placeholder='Your Name'/>
            </div>
            <div className='form-component'>
              <img src={email} alt="" />
              <input type="email" placeholder='Your Email'/>
            </div>
            <div className='form-component'>
              <img src={phone} alt="" />
              <input type="text" placeholder='Your phone number'/>
            </div>

            <div className='form-component message'>
              <img src={phone} alt="" className='hid'/>
              <input type="text" placeholder='Message'/>
            </div>

            <div className='form-component form-btn'>
              <img src={phone} alt="" className='hid'/>
              <button className='form-button'>Send Message</button>
            </div>

          </form>
        </div>

        <div className='contact-socials'>
          <div className='socials-container'>
            <a href="">
              <img src={fb} alt="" className='social-img'/>
            </a>
            <a href="">
              <img src={twitter} alt="" className='social-img'/>
            </a>
            <a href="">
              <img src={insta} alt="" className='social-img'/>
            </a>
          </div>
        </div>

        <img src={hand} alt="" id='hand-img'/>
        
      </div>


    </div>
  )
}

export default Contact