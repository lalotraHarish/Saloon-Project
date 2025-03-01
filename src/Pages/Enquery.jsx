import React from 'react'
import '../assets/enquery.css'
import Layout from './Layout'
const Enquery = () => {
  return (
    <>
    <div class="franchise-page-wrapper">
      <Layout>

      <div class="banner-section p-relative">
        <div class="video-section">
          <video
            id="banner-video-franchise"
            playsinline=""
            loop="true"
            autoplay=""
            muted=""
            aria-label="Homepage Video banner"
          >
            <source
              src="./assets/Naturals_interior_new.mp4"
              type="video/mp4"
            />
            <source
              src="./assets/Naturals_interior_new.mp4"
              type="video/quicktime"
            />
          </video>
        </div>

        <div class="left-half">
          <div class="inner-content">
            <h1 class="f-forum m-0 f-56-20 text-white enable-desktop">
              Be a part of successful<br />
              Naturals Family
            </h1>
            <h1 class="f-forum m-0 f-56-20 text-white enable-mobile">
              Be a part of successful Naturals Family
            </h1>
            <p class="m-0 f-20-12 f-poppins text-white">
              Join the Legacy of India's No.1 Beauty Salon Chain
            </p>
            <button class="f-24-10 f-poppins" onclick="hoverToEnquiry()">
              Own a Naturals Franchise Today
            </button>
          </div>
        </div>
      </div>

      {/* <div class="are-you-next bg-white p-relative" >
        <div class="are-you-next-wrapper p-relative">
          <div class="are-you-next-wrapper-left">
            <h3 class="f-forum m-0 f-48-26 text-purple">
              <span class="f-34-24"
                >Over 400 Women Entrepreneurs Have Found Their Calling. Are You Next?</span
              >
              <br />
              
            </h3>
            <p class="m-0 f-poppins text-purple">
              Unlock the opportunity to become a part of the successful Naturals Salon franchise network. With over 400 women entrepreneurs already thriving, you too can transform your passion for beauty into a flourishing business. Our franchise model offers comprehensive support, training, and a proven business strategy to help you excel.
            </p>

            <div class="w-100 text-center">
              <button class="btn-primary purple" onclick="hoverToEnquiry()">Enquiry Now</button>
            </div>
          </div>
          <div class="are-you-next-wrapper-right">
            <img src="./assets/nextyou.png" class="img-responsive" />
          </div>
        </div>
      </div> */}



      



      {/* <div class="franchise-opportunities-wrapper">
        <h3 class="f-forum m-0 f-48-26 text-white">
          Franchise Opportunities With<br />
          the World Of Naturals
        </h3>
        <div class="cart-wrapper">
          <div class="img">
            <img
              src="./assets/fran_opp_1.png"
              style={{width: '100%', height: "auto"}}
            />
          </div>
          <div class="img">
            <img
              src="./assets/fran_opp_2.png"
              style={{width: '100%', height: "auto"}}
            />
          </div>
          <div class="img">
            <img
              src="./assets/fran_opp_3.png"
              style={{width: '100%', height: "auto"}}
            />
          </div>
        </div>
        <div class="cart-wrapper">
          <div class="img">
            <img
              src="./assets/fran_opp_4.png"
              style={{width: '100%', height: "auto"}}
            />
          </div>
          <div class="img">
            <img
              src="./assets/fran_opp_5.png"
              style={{width: '100%', height: "auto"}}
            />
          </div>
          <div class="img">
            <img
              src="./assets/fran_opp_6.png"
              style={{width: '100%', height: "auto"}}
            />
          </div>
        </div>
        <div class="btn-wrapper">
          <button class="btn-primary" onclick="hoverToEnquiry()">Enquire Now</button>
          <button class="btn-secondary">
            Know more&nbsp;&nbsp;
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </div>
      </div> */}

      {/* <div class="franchise-owners bg-white">
        <h3 class="f-forum m-0 f-48-26 text-purple">
          Hear From Our Franchisee Owners
        </h3>
        <div class="franchise-owners-wrp">
          <div class="owner-card">
            <div class="owner-img">
              <img src="./assets/franchise_owner_lavanya.JPG" class="img-responsive" />
            </div>
            <div class="owner-content">
              <h5 class="f-forum m-0 text-purple">Lawanya</h5>
              <h6 class="f-forum m-0 text-purple">
                Franchise Owner, Arani
              </h6>
              <p class="f-poppins m-0 text-purple">
                "I was a common girl with big dreams, and Naturals played a key role in shaping my journey. While there were some flaws, the overall experience has been amazing, and I'm grateful for the support."
                </p>
            </div>
          </div>
          <div class="owner-card">
            <div class="owner-img">
              <img src="./assets/franchise_owner_surya.JPG" class="img-responsive" />
            </div>
            <div class="owner-content">
              <h5 class="f-forum m-0 text-purple">Suraya Prabha</h5>
              <h6 class="f-forum m-0 text-purple">
                Franchise Owner, Saligramam, Theni, Palani, Dindigul
              </h6>
              <p class="f-poppins m-0 text-purple">
                "A common housewife becoming a successful entrepreneur is a dream come true. This happened because of the Naturals. The happiness and satisfaction of my clients make me proud and fulfilled. Naturals is truly a golden ticket to our dream world."
              </p>
            </div>
          </div>
          <div class="owner-card">
            <div class="owner-img">
              <img src="./assets/franchise_owner_ashwin.JPG" class="img-responsive" />
            </div>
            <div class="owner-content">
              <h5 class="f-forum m-0 text-purple">Ashwin</h5>
              <h6 class="f-forum m-0 text-purple">
                Franchise owner, (Mandaveli & Kottivakkam, Valasaravakkam)
              </h6>
              <p class="f-poppins m-0 text-purple">
                "I've been with Naturals for nearly a decade, and their brand value and visibility are unmatched. Despite new competitors, Naturals continues to lead in service quality and product range."
              </p>
            </div>
          </div>
          <div class="owner-card">
            <div class="owner-img">
              <img src="./assets/franchise_owner_xavier.JPG" class="img-responsive" />
            </div>
            <div class="owner-content">
              <h5 class="f-forum m-0 text-purple">Mr. & Mrs. Xavier Rajesh</h5>
              <h6 class="f-forum m-0 text-purple">
                Franchise owner, Kanyakumari
              </h6>
              <p class="f-poppins m-0 text-purple">
                "As new entrepreneurs, Naturals has been our guiding light, providing unwavering support from location selection to setup. We couldn't have asked for a better franchisor-thank you, Naturals, for being the backbone of our success."
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div class="franchise-owners-mobile">
        <h3 class="f-forum m-0 f-48-26 text-purple">
            Hear From Our Franchisee Owners
          </h3>
        <div class="franchise-owners-wrap-mobile">
            <div class="owner-card">
                <div class="owner-img">
                  <img src="./assets/franchise_owner_lavanya.JPG" class="img-responsive" />
                </div>
                <div class="owner-content">
                  <h5 class="f-forum m-0 text-purple">Lawanya</h5>
                  <h6 class="f-forum m-0 text-purple">
                    Franchise Owner, Arani
                  </h6>
                  <p class="f-poppins m-0 text-purple">
                    "I was a common girl with big dreams, and Naturals played a key role in shaping my journey. While there were some flaws, the overall experience has been amazing, and I'm grateful for the support."
                  </p>
                </div>
              </div>
              <div class="owner-card">
                <div class="owner-img">
                  <img src="./assets/franchise_owner_surya.JPG" class="img-responsive" />
                </div>
                <div class="owner-content">
                  <h5 class="f-forum m-0 text-purple">Suraya Prabha</h5>
                  <h6 class="f-forum m-0 text-purple">
                    Franchise Owner, Saligramam, Theni, Palani, Dindigul
                  </h6>
                  <p class="f-poppins m-0 text-purple">
                    "A common housewife becoming a successful entrepreneur is a dream come true. This happened because of the Naturals. The happiness and satisfaction of my clients make me proud and fulfilled. Naturals is truly a golden ticket to our dream world."
                  </p>
                </div>
              </div>
              <div class="owner-card">
                <div class="owner-img">
                  <img src="./assets/franchise_owner_ashwin.JPG" class="img-responsive" />
                </div>
                <div class="owner-content">
                  <h5 class="f-forum m-0 text-purple">Ashwin</h5>
                  <h6 class="f-forum m-0 text-purple">
                    Franchise owner, (Mandaveli & Kottivakkam, Valasaravakkam)
                  </h6>
                  <p class="f-poppins m-0 text-purple">
                    "I've been with Naturals for nearly a decade, and their brand value and visibility are unmatched. Despite new competitors, Naturals continues to lead in service quality and product range."
                  </p>
                </div>
              </div>
              <div class="owner-card">
                <div class="owner-img">
                  <img src="./assets/franchise_owner_xavier.JPG" class="img-responsive" />
                </div>
                <div class="owner-content">
                  <h5 class="f-forum m-0 text-purple">Mr. & Mrs. Xavier Rajesh</h5>
                  <h6 class="f-forum m-0 text-purple">
                    FRANCHISE OWNER, KANYAKUMARI
                  </h6>
                  <p class="f-poppins m-0 text-purple">
                    "As new entrepreneurs, Naturals has been our guiding light, providing unwavering support from location selection to setup. We couldn't have asked for a better franchisor-thank you, Naturals, for being the backbone of our success"
                  </p>
                </div>
              </div>
              
        </div>
      </div> */}

      {/* <!-- support & benefit --> */}

      {/* <div class="support-and-benefit">
        <div id="s-a-b-right-arrow" class="s-a-b-right-arrow"></div>
        <div id="s-a-b-left-arrow" class="s-a-b-left-arrow"></div>
        <h3 class="f-forum m-0 f-48-26 text-white">
          Franchise Support & Benefit
        </h3>
        <div class="support-and-benefit-wrapper">
          <div class="benefit-box">
            <div class="inner-box-c">
              <img src="./assets/earning.svg" />
              <h6 class="f-forum m-0 text-purple">Financial Support</h6>
              <p class="f-poppins m-0 text-purple">
                Business Loan Upto INR 40  lakhs
              </p>
            </div>
          </div>
          <div class="benefit-box">
            <div class="inner-box-c">
              <img src="./assets/Roi.svg" />
              <h6 class="f-forum m-0 text-purple">
                
                Proven return on investment
              </h6>
              <p class="f-poppins m-0 text-purple">
                Starting a franchise with Naturals presents an opportunity to increase your investment in a systematic and steady manner. ROI in 36 - 48 months
              </p>
            </div>
          </div>
          <div class="benefit-box">
            <div class="inner-box-c">
              <img src="./assets/gg.svg" />
              <h6 class="f-forum m-0 text-purple">
                Continues<br />
                Operations support
              </h6>
              <p class="f-poppins m-0 text-purple">
                We provide continuous operation support
              </p>
            </div>
          </div>

          <div class="benefit-box">
            <div class="inner-box-c">
              <img src="./assets/digital-marketing .svg" />
              <h6 class="f-forum m-0 text-purple">
                Marketing & Creative<br />
                Support
              </h6>
              <p class="f-poppins m-0 text-purple">
                We provide expert digital marketing support, PR assistance, and customized IT & POS billing software solutions tailored to your business needs
              </p>
            </div>
          </div>

          <div class="benefit-box">
            <div class="inner-box-c">
              <img src="./assets/special_training.svg" />
              <h6 class="f-forum m-0 text-purple">
                Brand Value
              </h6>
              <p class="f-poppins m-0 text-purple">
                Naturals Salon has grown from 1 salon to 800 salons by building its brand over the past 23 years. Now we are inviting you to be part of this success story
              </p>
            </div>
          </div>

          <div class="benefit-box">
            <div class="inner-box-c">
              <img src="./assets/training.svg" />
              <h6 class="f-forum m-0 text-purple">Expert Training</h6>
              <p class="f-poppins m-0 text-purple">
                Special training is offered to recruits from industry experts who are well-versed in Loreal and Wella product lines
              </p>
            </div>
          </div>
        </div>
      </div> */}

      {/* <!-- nation wide --> */}
      {/* <div class="nation-wide bg-white">
        <h3 class="f-forum m-0 f-48-26 text-purple">
          The Naturals Nationwide Wave
        </h3>
        <h4 id="nation-wide-heading" class="m-0 f-poppins text-purple text-upper f-40-20 f-w-400">
          23 years of experience
        </h4>
        <div class="carousel" id="nation-wide-carousal">
            <button class="ei-c-arrow ei-c-left-arrow" onclick="previousCard()">
                &#9664;
              </button>
            <img src="./assets/natW_1.png" data-id="1" id="nw-img-1" class="img-responsive" />
            <img src="./assets/natW_2.png" data-id="2" id="nw-img-2" class="img-responsive" />
            <img src="./assets/natW_3.png" style={{zIndex:'1001'}} data-id="3" id="nw-img-3" class="img-responsive" />
            <button class="ei-c-arrow ei-c-right-arrow" id="ei-c-right-btn" onclick="nextCard()">
                &#9654;
              </button>
        </div>
        
      </div> */}
      {/* <div class="eighth-container-mobile">
        <div class="ei-c-m-top">The Naturals Nationwide Wave</div>
        <div class="ei-c-m-top" id="eight-c-m-heading">7 Million Happy Customers</div>
        <button class="ei-c-m-arrow ei-c-m-left-arrow" onclick="prevCardMob()">
          &#9664;
        </button>
        <div class="ei-c-m-bottom">
          <div class="ei-c-m-cards">
            <div class="ei-c-m-card">
              <img src="./assets/natW_1.png" alt=""/>
            </div>
            <div class="ei-c-m-card"><img src="./assets/natW_2.png" alt=""/></div>
            <div class="ei-c-m-card"><img src="./assets/natW_3.png" alt=""/></div>
            <div class="ei-c-m-card"><img src="./assets/natW_4.png" alt=""/></div>
            <div class="ei-c-m-card"><img src="./assets/natW_5.png" alt=""/></div>
            
          </div>
        </div>
        <button class="ei-c-m-arrow ei-c-m-right-arrow" onclick="nextCardMob()">
          &#9654;
        </button>
      </div> */}


      {/* <div class="our-story">
        <h3 class="f-forum m-0 f-48-26 text-white text-center">
          Discover Our Store Experience
        </h3>
        <div class="our-story-wrapper">
          <div class="our-story-left">
            <div data-val="0" class="con-wrp active">
              <h4 class="f-forum m-0 f-48-26 text-white enable-desktop">
                Naturals Salon
              </h4>
              <p class="m-0 f-poppins text-white enable-desktop">
                Step into Beauty: Discover the Ultimate Salon Store Experience at Naturals Salon
              </p>
              <p class="m-0 f-poppins text-white enable-mobile">
                <span>Naturals Salon</span>
                  <br/>
                Step into Beauty: Discover the Ultimate Salon Store Experience at Naturals Salon
              </p>
              <div class="btn-wrapper enable-desktop">
                <button class="btn-primary" onclick="hoverToEnquiry()">Enquire Now</button>
              </div>
            </div>
            <div data-val="1" class="con-wrp">
                <h4 class="f-forum m-0 f-48-26 text-white enable-desktop">
                  Naturals Ayur
                </h4>
                <p class="m-0 f-poppins text-white enable-desktop">
                  Step into Serenity: Experience Holistic Wellness with Ayurvedic Treatments at Naturals Ayur.
  
                </p>
                <p class="m-0 f-poppins text-white enable-mobile">
                  <span>Naturals Ayur</span>
                  <br/>
                  Step into Serenity: Experience Holistic Wellness with Ayurvedic Treatments at Naturals Ayur.
                </p>
                <div class="btn-wrapper enable-desktop">
                  <button class="btn-primary" onclick="hoverToEnquiry()">Enquire Now</button>
                </div>
              </div>
              <div data-val="2" class="con-wrp">
                <h4 class="f-forum m-0 f-48-26 text-white enable-desktop">
                  Naturals BAE
                </h4>
                <p class="m-0 f-poppins text-white enable-desktop">
                  Step into Radiance: Explore Beauty and Experiences at BAE - Your Ultimate Retail Beauty Destination.
  
                </p>
                <p class="m-0 f-poppins text-white enable-mobile">
                  <span>Naturals BAE</span>
                  <br/>
                  Step into Radiance: Explore Beauty and Experiences at BAE - Your Ultimate Retail Beauty Destination.
                </p>
                <div class="btn-wrapper enable-desktop">
                  <button class="btn-primary" onclick="hoverToEnquiry()">Enquire Now</button>
                </div>
              </div>
              <div data-val="3" class="con-wrp">
                <h4 class="f-forum m-0 f-48-26 text-white enable-desktop">
                  Naturals Beauty Academy
                </h4>
                <p class="m-0 f-poppins text-white enable-desktop">
                  Step into Excellence: Unleash Your Potential at Naturals Beauty Academy
  
                </p>
                <p class="m-0 f-poppins text-white enable-mobile">
                  <span>Naturals Beauty Academy</span>
                  <br/>
                  Step into Excellence: Unleash Your Potential at Naturals Beauty Academy
                </p>
                <div class="btn-wrapper enable-desktop">
                  <button class="btn-primary" onclick="hoverToEnquiry()">Enquire Now</button>
                </div>
              </div>
              <div data-val="4" class="con-wrp">
                <h4 class="f-forum m-0 f-48-26 text-white enable-desktop">
                  Nails 'n Beyond
                </h4>
                <p class="m-0 f-poppins text-white enable-desktop">
                  Step into Elegance: Experience the Art of Nails at Nails 'n Beyond.
  
                </p>
                <p class="m-0 f-poppins text-white enable-mobile">
                  <span>Nails 'n Beyond</span>
                  <br/>
                  Step into Elegance: Experience the Art of Nails at Nails 'n Beyond.
                </p>
                <div class="btn-wrapper enable-desktop">
                  <button class="btn-primary" onclick="hoverToEnquiry()">Enquire Now</button>
                </div>
              </div>
          </div>
          <div class="our-story-right">
            <div class="our-story-vido-list">
                
              <div class="video-wrp">
                <div >
                    <iframe
                  src="https://www.youtube.com/embed/Gclq1qNb2AA?si=bTjqkcWsUzwREjeE"
                  style={{width:'100%',height:'100%'}}
                ></iframe>
                </div>
              </div>
              <div class="video-wrp active video-wrap-second">
                <button class="ei-c-m-arrow-video ei-c-m-left-arrow-video" onclick="prevStoreVideo()">
                    &#9664;
                  </button>
                <div >
                    <iframe
                  src="https://www.youtube.com/embed/HSAaxV-B7FA?si=Hd9nz8htmIKcpeJM"
                  style={{width:'100%',height:'100%'}}
                ></iframe>
                </div>
                <button class="ei-c-m-arrow-video ei-c-m-right-arrow-video" onclick="nextStoreVideo()">
                    &#9654;
                  </button>
              </div>
              <div class="video-wrp">
                <div >
                    <iframe
                  src="https://www.youtube.com/embed/HSAaxV-B7FA?si=Hd9nz8htmIKcpeJM"
                  style={{width:'100%',height:'100%'}}
                ></iframe>
                </div>
              </div>
              <div class="video-wrp hide-on-mobile-view" >
                <div >
                    <iframe
                  src="https://www.youtube.com/embed/oGOo9Q1E_fc?si=AgnM7N1LnKEQzeCs"
                  style={{width:'100%',height:'100%'}}
                ></iframe>
                </div>
              </div>
              
            </div>
          </div>
          <div class="btn-wrapper enable-mobile w-100 text-center">
            <button class="btn-primary" onclick="hoverToEnquiry()">Enquiry Now</button>
          </div>
        </div>
      </div> */}

      <div class="enqure-now bg-white" id="enquiry-now-container">
        <h2 class="f-forum m-0 f-60-26 text-purple">Enquire Now</h2>
        <div class="enqure-now-wrapper">
          <div
            class="enqure-form slide-in-common"
            id="zf_div_n8598MEqJG67sWcF1ybw6f0LTsR0Pba83uWM9ah4W6A"
          ></div>
          <div class="enqure-img slide-in-common">
            <img src="src/assets/images/enquire-img.png" class="img-responsive" />
          </div>
          <div></div>
        </div>
        <div style={{width:"0px",height:'0px',overflow: "hidden"}}>
		<a href="" id="hover-to-enquiry-form" style={{visibility:'hidden'}}></a>
      </div>
      </div>

      <div class="vision">
        <h3 class="f-forum m-0 f-48-26 text-white text-center">Vision 2029</h3>
        <div class="vision-wrapper slide-up-common">
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                Naturals 3.0
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                Naturals 3.0 aims to revolutionize the beauty industry by seamlessly integrating cutting-edge technology. We will leverage AI for personalized beauty solutions, enhance salon experiences with virtual consultations, and streamline operations with advanced tech tools, setting a new standard in beauty innovation.
              </p>
            </div>
          </div>
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                1000+ womenpreneur
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                Our vision includes empowering over 1000 women to become successful beauty entrepreneurs. By providing comprehensive training, mentorship, and support, we will create opportunities for women to launch and grow their own beauty businesses, fostering a thriving community of female leaders in the industry
              </p>
            </div>
          </div>
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                3000 Salons
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                We plan to expand our presence by opening 3000 new outlets by the end of 2029. This ambitious goal will be achieved through a scalable business model, strategic location investments, and strong partnerships, ensuring widespread access to our exceptional beauty services and products.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="vision-mobile-v">
        <h3 class="f-forum m-0 f-48-26 text-white text-center">Vision 2029</h3>
        <div class="vision-wrapper-mob">
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                Naturals 3.0
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                Naturals 3.0 aims to revolutionize the beauty industry by seamlessly integrating cutting-edge technology. We will leverage AI for personalized beauty solutions, enhance salon experiences with virtual consultations, and streamline operations with advanced tech tools, setting a new standard in beauty innovation.
              </p>
            </div>
          </div>
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                1000+ womenpreneur
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                Our vision includes empowering over 1000 women to become successful beauty entrepreneurs. By providing comprehensive training, mentorship, and support, we will create opportunities for women to launch and grow their own beauty businesses, fostering a thriving community of female leaders in the industry
              </p>
            </div>
          </div>
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                3000 Salons
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                We plan to expand our presence by opening 3000 new outlets by the end of 2029. This ambitious goal will be achieved through a scalable business model, strategic location investments, and strong partnerships, ensuring widespread access to our exceptional beauty services and products.
              </p>
            </div>
          </div>
          <div class="vision-card">
            <div class="vision-card-content">
              <h4 class="f-forum m-0 text-purple text-upper text-center">
                50,000 Jobs
              </h4>
              <p class="m-0 f-poppins text-purple text-upper text-center">
                By 2029, Naturals Salon envisions creating over 50,000 job opportunities, empowering individuals and transforming communities through the beauty and wellness industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </div>
   </>
  )
}

export default Enquery