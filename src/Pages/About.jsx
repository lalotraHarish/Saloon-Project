import React from 'react'
import '../assets/about.css'
const About = () => {
  return (
    <>
     <div class="abt-page-wrapper">
        <header>
            <div class="left">
                <img src="src/assets/images/naturals_header_logo.png" width="300" height="150" alt="logo.png" onClick="openTab('../index.html')"/>
            </div>
            <div class="right">
                <ul>
                    <li class="sub-menu-pricing">
                        <a href="">Our Services</a>
                        <ul>
                            <li><a href="../services/Hair/">Haircare</a></li>
                            <li><a href="../services/skin/">Skincare</a></li>
                            <li><a href="../services/Body/">Bodycare</a></li>
                        </ul>
                    </li>
                    <li><a href="../SALON_LOCATOR/index.html">Salon Locator</a></li>
                    <li class="sub-menu-pricing">
                      <a href="">Pricing</a>
                      <ul>
                        <li><a href="../PRICING_WOMEN/index.html">Service For Women</a></li>
                        <li><a href="../PRICING_MEN/index.html">Service For Men</a></li>
                      </ul>
                    </li>
                    <li><a href="https://bridal.naturals.in/" target="_blank">Bridal</a></li>
                    <li><a href="../FRANCHISE/index.html">Franchise</a></li>
                    <li><a href="../media/">Media</a></li>
                    <li id="about-us-head"><a href="/about-us">About us</a></li>
                    <li><a href="../blogs/">Blogs</a></li>
                  </ul>
            </div>
        </header>
        <div class="header-mob">
            <div class="menu-container">
                <button class="menu-toggle" aria-label="Open Menu">&#9776;</button>
                <div>
                    <img src="./assets/mobile/naturals_logo.png" alt="loading..." onClick="openTab('../index.html')"/>
                </div>
            </div>
            <nav class="side-menu">
                <button class="close-btn" aria-label="Close Menu">&times;</button>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li>
                        <a href="">Our Services</a>
                        <ul class="sub-menu-pricing-mobile">
                            <li><a href="../services/Hair/">Haircare</a></li>
                            <li><a href="../services/skin/">Skincare</a></li>
                            <li><a href="../services/Body/">Bodycare</a></li>
                          </ul>
                    </li>
                    <li><a href="../SALON_LOCATOR/index.html">Salon Locator</a></li>
                    <li>
                      <a href="">Pricing</a>
                      <ul class="sub-menu-pricing-mobile">
                        <li><a href="../PRICING_WOMEN/index.html">Services for Women</a></li>
                        <li> <a href="../PRICING_MEN/index.html">Services for Men</a></li>
                      </ul>
                    </li>
                    <li><a href="https://bridal.naturals.in/" target="_blank" >Bridal</a></li>
                    <li><a href="../FRANCHISE/index.html">Franchise</a></li>
                    <li><a href="../media/">Media</a></li>
                    <li><a href="../ABOUT/index.html">About us</a></li>
                    <li><a href="../blogs/">Blogs</a></li>
                  </ul>
            </nav>
        </div>
        <div class="abt-f-c">
            <div class="a-f-c-overlay">
                <div>
                    <h1>About Us</h1>
                    <h3>Naturals - Creating Experiences With Businesses</h3>
                </div>
            </div>
            <img id="abt-banner" src="src/assets/images/abt_banner.jpg" alt="loading..."/>
        </div>
        <div class="abt-s-c">
            <div class="abt-s-c-top">
                <h1>Creating A Beautiful World</h1>
            </div>
            <div class="abt-s-c-bottom">
                <div class="abt-s-c-t-left slide-in-common">
                    <div>
                        <img id="create-bw" src="src/assets/images/create_bw.jpg" alt=""/>
                    </div>
                </div>
                <div class="abt-s-c-t-right slide-in-common">
                    <p>
                        Naturals was conceived with the idea of the modern Indian. Founded by K. Veena, 
			whose knowledge of the international beauty industry pioneered a new era in the hair
                        and beauty care industry in India, Naturals has made a path-breaking change in the
                        way the beauty industry has been perceived.
                    </p>
                    <p>
                        So in the early 2000s, she made that dream a reality by setting up her first salon in Chennai.
                        It took her only a while to understand the market potential and the ever-increasing demand for
                        professional grooming. In 2004 her husband co-founder & CEO, CK Kumaravel joined and ever since
                        then, the Naturals team has been able to meet every challenge in this competitive industry.
                    </p>
                    <p>
                        Today, Naturals is India's most prominent chain of hair and beauty salons. Thanks to our
                        world-class
                        service, courteous staff and loyal support from our patrons, Naturals now has 750+ salons across
                        the sub-continent and aims to expand to 3000 salons by 2029.
                    </p>
                </div>
            </div>
        </div>
        
        <div class="abt-fo-c">
            <div class="abt-fo-c-top">
                <h1>The World Of Naturals</h1>
            </div>
            <div class="abt-fo-c-bottom">
                <div class="abt-fo-c-bottom-fh slide-in-common">
                    <img class="abt-fo-c-bottom-fh-img slide-up-common" id="fran-opp-1" src="src/assets/images/fran_opp_1.png" alt="Loading..."/>
                    <img class="abt-fo-c-bottom-fh-img slide-up-common" id="fran-opp-2" src="src/assets/images/fran_opp_2.png" alt="Loading..."/>
                    <img class="abt-fo-c-bottom-fh-img slide-up-common" id="fran-opp-3" src="src/assets/images/fran_opp_3.png" alt="Loading..."/>
                    <img class="abt-fo-c-bottom-fh-img slide-up-common" id="fran-opp-4" src="src/assets/images/fran_opp_4.png" alt="Loading..."/>
                    <img class="abt-fo-c-bottom-fh-img slide-up-common" id="fran-opp-5" src="src/assets/images/fran_opp_5.png" alt="Loading..."/>
                    <img class="abt-fo-c-bottom-fh-img slide-up-common" id="fran-opp-6" src="src/assets/images/fran_opp_6.png" alt="Loading..."/>
                </div>
                <div class="abt-fo-c-bottom-btns">
                    <button class="abt-fo-c-bottom-btn-1" onClick="openTab('../FRANCHISE/index.html')">Enquire Now</button>
                    <button class="abt-fo-c-bottom-btn-2">
                        Know More
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                </div>
            </div>
        </div>
          {/* <div class="abt-fi-c">
            <div  class="abt-fi-c-head"><h1>Awards</h1></div>
            <div class="abt-fi-c-body">
                <div class="abt-fi-c-main">
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2024 - The Rise - Global award of excellence</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2019 - BCN Award</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2019 - Woman on a Mission Award</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2019 - Retail Icons of India</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2018 - Inspirational Business Icon</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2017 - Promising Retail Brand 2017</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2016 - Gold Trophy, Best Small Scale Private Org Award</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2015 - Images Retail Award for Most Admired Retailer of the Yea</h1>
                        </div>
                    </div>
                    <div class="abt-dot">
                        <div class="abt-dot-content">
                            <img src="./assets/award_1.svg" alt=""/>
                            <h1>2013 - Images Retail Awards for the Most Admired Salon</h1>
                        </div>
                    </div>
                </div>
            </div>
          </div> */}
          <div class="abt-si-c">
            <div class="abt-si-c-top">
                <h1>The Naturals Nationwide Wave</h1>
            </div>
            <div class="abt-si-c-bottom slide-in-common slide-up-common">
                <div class="abt-si-c-bottom-box">
                    <img id="nat-wave-1" src="src/assets/images/nat_wave_1.png" alt=""/>
                    <h3>800</h3>
                    <h3>SALON</h3>
                </div>
                <div class="abt-si-c-bottom-box">
                    <img id="nat-wave-2" src="src/assets/images/nat_wave_2.png" alt=""/>
                    <h3>24</h3>
                    <h3>YEARS</h3>
                </div>
                <div class="abt-si-c-bottom-box">
                    <img id="nat-wave-3" src="src/assets/images/nat_wave_3.png" alt=""/>
                    <h3>20+</h3>
                    <h3>STATE</h3>
                </div>
                <div class="abt-si-c-bottom-box">
                    <img id="nat-wave-4" src="src/assets/images/nat_wave_4.png" alt=""/>
                    <h3>7000000</h3>
                    <h3>HAPPY CUSTOMERS</h3>
                </div>
                <div class="abt-si-c-bottom-box">
                    <img id="nat-wave-5" src="src/assets/images/nat_wave_5.png" alt=""/>
                    <h3>WOMENPRENEURS</h3>
                </div>
            </div>
          </div>
          <div class="abt-sev-c">
            <div class="abt-sev-c-top">
                <h1>Vision 2029</h1>
            </div>
            <div  class="abt-sev-c-bottom">
                <div class="abt-sev-c-bottom-box slide-up-common">
                    <h1>Naturals 3.0</h1>
                    <p>
                        Naturals 3.0 aims to revolutionize the beauty industry by seamlessly integrating cutting-edge technology. We will leverage AI for personalized beauty solutions, enhance salon experiences with virtual consultations, and streamline operations with advanced tech tools, setting a new standard in beauty innovation.
                    </p>
                    
                </div>
                <div class="abt-sev-c-bottom-box slide-up-common">
                    <h1>1000+ Women Entrepreneurs</h1>
                    <p>
                        Our vision includes empowering over 1000 women to become successful beauty entrepreneurs. By providing comprehensive training, mentorship, and support, we will create opportunities for women to launch and grow their own beauty businesses, fostering a thriving community of female leaders in the industry
                    </p>
                </div>
                <div class="abt-sev-c-bottom-box slide-up-common">
                    <h1>3000 Salons</h1>
                    <p>
                        We plan to expand our presence by opening 3000 new outlets by the end of 2029. This ambitious goal will be achieved through a scalable business model, strategic location investments, and strong partnerships, ensuring widespread access to our exceptional beauty services and products
                    </p>
                </div>
            </div>
          </div>
          <div class="eighth-container-mobile">
            <div class="ei-c-m-top">Vision 2029</div>

            <div class="ei-c-m-bottom">
              <div class="ei-c-m-cards">
                <div class="ei-c-m-card">
                  <div class="ei-c-m-card-bottom">
                    <h1>Naturals 3.0</h1>
                    <p>
                        Naturals 3.0 aims to revolutionize the beauty industry by seamlessly integrating cutting-edge technology. We will leverage AI for personalized beauty solutions, enhance salon experiences with virtual consultations, and streamline operations with advanced tech tools, setting a new standard in beauty innovation.
                    </p>
                    
                  </div>
                </div>
                <div class="ei-c-m-card">
                  <div class="ei-c-m-card-bottom">
                    <h1>1000+ Women Entrepreneurs</h1>
                    <p>
                        Our vision includes empowering over 1000 women to become successful beauty entrepreneurs. By providing comprehensive training, mentorship, and support, we will create opportunities for women to launch and grow their own beauty businesses, fostering a thriving community of female leaders in the industry
                    </p>
                  </div>
                </div>
                <div class="ei-c-m-card">
                  <div class="ei-c-m-card-bottom">
                    <h1>3000 Salons</h1>
                    <p>
                        We plan to expand our presence by opening 3000 new outlets by the end of 2029. This ambitious goal will be achieved through a scalable business model, strategic location investments, and strong partnerships, ensuring widespread access to our exceptional beauty services and products
                    </p>
                    
                  </div>
                </div>
                <div class="ei-c-m-card">
                    <div class="ei-c-m-card-bottom">
                      <h1>50,000 Jobs</h1>
                      <p>
                        By 2029, Naturals Salon envisions creating over 50,000 job opportunities, empowering individuals and transforming communities through the beauty and wellness industry.
                      </p>
                    </div>
                  </div>
              </div>
            </div>
            
          </div>
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
    </div>
   
   </>
  )
}

export default About