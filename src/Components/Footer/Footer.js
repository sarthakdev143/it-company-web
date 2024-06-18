import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const BackToTop = () => {
    document.body.scrollTo(0, 0);
  }

  return (
    <section id='footer' className='fdc'>
      <div id='part-1' className='flex gap'>
        <div id='article-con'>
          <article id='about' className='fdc m-gap relative'>
            <figure>
              <img id='logo' src={require('./Skyra_Tech_logo.png')} alt='Logo' />
            </figure>
            <p>
              Skyra Tech Solutions Pvt Ltd is a premier IT solutions provider, specializing in cutting-edge services like open source development, mobile app creation, and advanced technologies such as blockchain and IoT. Their seasoned professionals deliver high-quality, scalable solutions tailored to diverse client needs. With a focus on detail, rigorous quality assurance, and a dedication to customer satisfaction, Skyra ensures excellence in every project. Collaborate with them for innovative IT solutions that transform ideas into reality.
            </p>
          </article>
          <article id='address' className='relative'>
            <h1>Contact Information:</h1>
            <address>
              <p><strong>Skyra Tech Solution Pvt Ltd</strong>,</p>
              <p>703 Vijay Nagar<br />
                Indore, 452010<br />
                India</p>
              <p>Phone : <a href='tel:+919981560424'>+91-9981560424</a><br />
                Email : <a href="mailto:info@skyratech.in">info@skyratech.in</a><br />
                Website : <a href="http://www.skyratech.in" target="_blank">www.skyratech.in</a></p>
            </address>
          </article>
        </div>
        <div id='get-in-touch' className='fdc m-gap'>
          <h1>Get in Touch...</h1>
          <ul type='none' className='flex m-gap'>
            <a href='mailto:info@skyratech.in'>
              <li className='faic'>
                <i id='mail' class="ri-mail-line"></i>
                <span>Email Us</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='twitter' class="ri-twitter-x-line"></i>
                <span>X (Twitter)</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='fb' class="ri-facebook-fill"></i>
                <span>Facebook</span>
              </li>
            </a>
            <a href='https://www.linkedin.com/company/skyratech-solutions2023/?viewAsMember=true'>
              <li className='faic'>
                <i id='linkedin' class="ri-linkedin-line"></i>
                <span>LinkedIn</span>
              </li>
            </a>
            <a href='#'>
              <li className='faic'>
                <i id='ig' class="ri-instagram-line"></i>
                <span>Instagram</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div id='part-2' className='faic center1'>
        <div id='container' className='faic relative'>
          <ul type='none' className='faic'>
            <li className='relative'>Copyright © 2024 <a className='relative' href=''>Skyra Tech Solution Pvt Ltd.</a> All Rights Reserved</li>
            <li>|</li>
            {/* Privacy Policy */}
            <li className='relative'>
              <NavLink to='/privacy-policy'>
                Privacy Policy
              </NavLink>
            </li>
          </ul>
          <a href='#' onClick={BackToTop}>
            <span title='Back To Top' class="material-symbols-outlined">
              keyboard_arrow_up
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Footer