import React, { useState } from 'react'
import '../styles/Contact.css'
import fb from '../assets/Group 1000004395.svg'
import insta from '../assets/Group 1000004397.svg'
import name from '../assets/ri_user-4-fill.svg'
import email from '../assets/ic_round-alternate-email.svg'
import phone from '../assets/fluent_phone-20-filled.svg'
import { FaLinkedin } from "react-icons/fa";
import hand from '../assets/Image COntact.png'


const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    senderEmail: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  async function onSubmit(event) {
    event.preventDefault();
  //   const { data, error } = await sendEmail(formData);
  
  }

  return (
    <div className='contact-page mt-[68px] '>
      <div class="blob blob-orange"></div>
      <div class="blob blob-blue"></div>

      <div className='contact-container'>

        <div className='contact-form'>
          <div className='contact-header'>
              <div>Let's talk</div>
              <p>Reachout to us for something awesome together</p>
          </div>

          <form onSubmit={onSubmit}>

            <div className='form-component'>
              <img src={name} alt="" />
              <input type="text" placeholder='Your Name' name='name' value={formData.name} onChange={handleChange}/>
            </div>
            <div className='form-component'>
              <img src={email} alt="" />
              <input type="email" placeholder='Your Email' name='senderEmail' value={formData.senderEmail} onChange={handleChange}/>
            </div>
            <div className='form-component'>
              <img src={phone} alt="" />
              <input type="text" placeholder='Your phone number' name='phoneNumber'  value={formData.phoneNumber} onChange={handleChange}/>
            </div>

            <div className='form-component message'>
              <img src={phone} alt="" className='hid'/>
              <input type="text" placeholder='Message ' name='message'  value={formData.message} onChange={handleChange}/>
            </div>

            <div className='form-component form-btn'>
              <img src={phone} alt="" className='hid'/>
              <button className='form-button' type='submit'>Send Message</button>
            </div>

          </form>
        </div>

        <div className='contact-socials'>
          <div className='socials-container'>
            <a href="">
              <img src={fb} alt="" className='social-img'/>
            </a>
            <a href="https://www.linkedin.com/company/qriocity/">
            <FaLinkedin  className='social-img'/>
            </a>
            <a href="https://www.instagram.com/qriocity_in/">
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