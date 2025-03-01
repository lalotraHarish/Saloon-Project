import React, { useState } from 'react'

const InfoPage = () => {
  const [tab,settab]=useState('women')
  return (<>
    <footer>
      <div class="footer-wrapper">
        <div class="foot-1 foot">
          <div>Quick Links</div>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
            <li><a href="">Franchise Opportunities</a></li>
            <li><a href="">Blogs</a></li>
            <li><a href="">Privacy Policy</a></li>
          </ul>
        </div>
        <div class="foot-2 foot">
          <div>Our Services</div>
          <ul>
            <li><a href="">Hair Care</a></li>
            <li><a href="">Skin Care</a></li>
            <li><a href="">Body Care</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Locate us</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
        <div class="foot-3 foot">
          <div>Contact Us</div>
          <ul>
            <li><a href="">Groom India Salon & Spa Pvt. Ltd</a></li>
            <li><a href="">No. 123 & 124, 3rd Floor, Ispahani Centre,</a></li>
            <li><a href="">Nungambakkam High Rd,</a></li>
            <li><a href="">Thousand Lights, Chennai,</a></li>
            <li><a href="">Tamil Nadu 600034</a></li>
            <li>
              <a href="">Store Locator</a>
              <ul style={{marginLeft:'20px',opacity: '0.85'}}>
                  <li style={{cursor:'pointer'}} onClick="openTabNEW('https://salons.naturals.in/')">Naturals Salon Locator</li>
                  <li style={{cursor:'pointer'}} onClick="openTabNEW('https://signature.naturals.in/')">Naturals Signature Salon Locator</li>
              </ul>
          </li>
          </ul>
        </div>
        <div class="foot-4 foot">
          <div>Get in Touch</div>
          <ul>
            <li><a href="">+91 90926 26262</a></li>
            <li><a href="">care@naturals.in</a></li>
          </ul>
        </div>
      </div>
    </footer>
   </>
  )
}

export default InfoPage