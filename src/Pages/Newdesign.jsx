import React from 'react'
import '../assets/responsive.css'
import '../assets/style.css'
import Layout from './Layout'
const Newdesign = () => {
  return (
    <Layout>
  <>
    
    <div class="first-c-carousel-dyn">
      <div class="first-c-slides-dyn">
        
        <div class="first-c-slide-dyn first-container-btns" id="slideD2">
          <img src="src/assets/images/ban2_v1.jpg" id="ban-2" alt=""/>
          <div class="fir-c-btn">
            <button class="fir-c-btn-1" onClick="openTab('https://appointments.naturals.in',true)">Book Appointment</button>
            <button class="fir-c-btn-2" onClick="openTab('./SALON_LOCATOR/index.html')">
              Salon Locator
              <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {/* <!-- <div class="first-c-slide-dyn" id="slideD3">
          <img src="./home_page_banner/ban1.jpg" id="ban-3" alt="">
        </div> -->
        <!-- <div class="first-c-slide-dyn" id="slideD4">
          <img src="./home_page_banner/ban2.jpg" id="ban-4" alt="">
        </div> -->
        <!-- <div class="first-c-slide-dyn" id="slideD5">
          <img src="./home_page_banner/ban2.jpg" id="ban-2" alt="">
        </div> -->
        <!-- <div class="first-c-slide-dyn" id="slideD6">
          <img src="./home_page_banner/ban2.jpg" id="ban-2" alt="">
        </div> --> */}
        <div class="fi-c-dots">
          <span class="fi-c-dot" data-slide="1"></span>
          <span class="fi-c-dot" data-slide="2"></span>
          <span class="fi-c-dot" data-slide="3"></span>
        </div>
      </div>
      <div class="first-c-dots-dyn" style={{visibility:'hidden'}}>
	       <span class="first-c-dot-dyn" data-slide="1"></span> 
	<span class="first-c-dot-dyn" data-slide="2"></span>
        {/* <!-- <span class="first-c-dot-dyn" data-slide="3"></span> --> */}
      </div>
    </div>
    <div class="second-container">
      <div class="second-container-main-wrapper">
        <div class="second-container-main high-resolution-fix">
          <div class="s-c-left">
            <div class="s-c-heading-mob">Why Choose US?</div>
            {/* <!-- <div class="s-c-box">
                            <div class="animated-text at-1">22 Years Experience</div>
                            <div class="animated-text at-2">Personalised Services</div>
                            <div class="animated-text at-3">Uncompromised Quality</div>
                            <div class="animated-text at-4">Experienced Stylist</div>
                            <div class="animated-text at-5">Easily Accessible</div>
                        </div> --> */}
            <div class="s-c-text-wrapper">
              <div class="text1 text class-1">25 Years Experience</div>
              <div class="text2 text class-2">800 Salons</div>
              <div class="text3 text class-3">Uncompromised Quality</div>
              <div class="text4 text class-4">Experienced Stylist</div>
              <div class="text5 text class-5">Easily Accessible</div>
            </div>
            <div class="s-c-btn">
              <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book A Service
                Today</button>
            </div>
          </div>
          <div class="s-c-common s-c-right slide-in-common">
            <div class="s-c-right-wrap">
              <div class="s-c-right-top">
                <h1>Why Choose US?</h1>
              </div>
              <div class="s-c-right-bottom">
                <p>
                  With 25 years of experience, Naturals offers the benefit of
                  over two decades of expertise in the beauty industry. Our
                  personalized services are tailored to meet your unique needs
                  and preferences, ensuring that you receive the care and
                  attention you deserve. We are committed not to compromised
                  quality, using only the highest quality premium products to
                  provide exceptional care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="third-container">
      <div class="third-container-main-wrapper high-resolution-fix">
        <div class="third-container-main">
          <div class="half left-half">
            <div class="image-container slide-in-common">
              <img id="men-image" class="category-image third-c-men" src="src/assets/images/services_men.png"
                alt="Men's Category Image" />
              <img id="women-image" class="category-image third-c-women active" src="src/assets/images/services_women_v2.png"
                alt="Women's Category Image" />
            </div>
          </div>
          <div class="half right-half-wrapper">
            <span class="right-half slide-in-common">
              <h2>Our Services</h2>
              <div class="tabs">
                <div id="men" class="tab" onClick="setActiveTab('men')">
                  Men
                </div>
                <div id="women" class="tab active" onClick="setActiveTab('women')">
                  Women
                </div>
              </div>

              <div id="men-subcategories" class="subcategories">
                <div id="men-subcategory1" class="subcategory" onClick="setActiveSubcategory('men-subcategory1')">
                  Pre - wedding & Bridal
                </div>
                <div id="men-subcategory2" class="subcategory" onClick="setActiveSubcategory('men-subcategory2')">
                  Body
                </div>
                <div id="men-subcategory3" class="subcategory" onClick="setActiveSubcategory('men-subcategory3')">
                  Skin
                </div>
                <div id="men-subcategory4" class="subcategory" onClick="setActiveSubcategory('men-subcategory4')">
                  Hair
                </div>
              </div>

              <div id="women-subcategories" class="subcategories active">
                <div id="women-subcategory1" class="subcategory active" onClick="setActiveSubcategory('women-subcategory1')">
                  Pre - wedding & Bridal
                </div>
                <div id="women-subcategory2" class="subcategory" onClick="setActiveSubcategory('women-subcategory2')">
                  Body
                </div>
                <div id="women-subcategory3" class="subcategory" onClick="setActiveSubcategory('women-subcategory3')">
                  Skin
                </div>
                <div id="women-subcategory4" class="subcategory" onClick="setActiveSubcategory('women-subcategory4')">
                  Hair
                </div>
              </div>

              {/* <!-- Content for subcategories --> */}
              <div id="men-subcategory1-content" class="content">
                <p>
                  Naturals offers exclusive wedding grooming services for grooms,
                  including tailored haircuts, skin treatments, facials, body polishing,
                  and relaxing massages.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://bridal.naturals.in/',true)">Book Now</button>
                </div>
              </div>
              <div id="men-subcategory2-content" class="content">
                <p>
                  Naturals offers a range of men's body care services,
                  including relaxing massages, body scrubs, exfoliation,
                  detox treatments, body polishing, and full-body pampering,
                  leaving you refreshed and revitalized
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book
                    Now</button>
                </div>
              </div>
              <div id="men-subcategory3-content" class="content">
                <p>
                  At Naturals, men's skincare is elevated with advanced treatments like deep cleansing,
                  hydrating facials, exfoliation, brightening, and anti-aging solutions,
                  ensuring total rejuvenation and care.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book
                    Now</button>
                </div>
              </div>
              <div id="men-subcategory4-content" class="content">
                <p>
                  Naturals offers premium men's grooming with expert barbering,
                  precise styling, fades, trims, relaxing treatments, hair coloring,
                  and luxurious pampering.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book
                    Now</button>
                </div>
              </div>
              <div id="women-subcategory1-content" class="content visible">
                <p>
                  Naturals specializes in bridal beauty with customized hair styling,
                  flawless makeup, skin treatments, and pampering services to ensure
                  you look and feel stunning on your special day.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://bridal.naturals.in/',true)">Book Now</button>
                </div>
              </div>
              <div id="women-subcategory2-content" class="content">
                <p>
                  Naturals provides women's body services including relaxing massages,
                  exfoliating scrubs, detoxifying treatments, body wraps,
                  and full-body pampering, ensuring a revitalized and refreshed experience.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book
                    Now</button>
                </div>
              </div>
              <div id="women-subcategory3-content" class="content">
                <p>
                  Naturals offers comprehensive women's skin services,
                  featuring rejuvenating facials, deep cleansing, hydration treatments,
                  exfoliation, and anti-aging solutions to achieve radiant, flawless skin.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book
                    Now</button>
                </div>
              </div>
              <div id="women-subcategory4-content" class="content">
                <p>
                  At Naturals, women's hair services include expert cuts,
                  vibrant coloring, luxurious conditioning, precise styling,
                  and smoothing treatments, all tailored to enhance your unique beauty.
                </p>
                <div class="t-c-btn">
                  <button onClick="openTab('https://wa.me/919092626262?text=Book%20Appointment%20',true)">Book
                    Now</button>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="fourth-container-wrp">
      <div class="fourth-container">
        <div class="fo-c-img">
          <img id="fourth-container-img-bg" src="src/assets/images/bridal_img_bg.jpg" alt="loading.." />
        </div>
        <div class="fo-c-content">
          <div class="fo-c-left slide-in-common">
            <div class="fo-c-heading">Exclusively Bridal</div>
            <p class="fo-c-desc">
              Make your wedding day unforgettable with our luxurious bridal
              services. At Naturals, we rely on premium products and uphold
              the highest hygiene standards to ensure a flawless, radiant
              look. Trust our expert team to provide you with exceptional care
              and beauty on your special day.
            </p>
            <div class="fo-c-btn">
              <button onClick="openTab('https://bridal.naturals.in/',true)">Book Now</button>
            </div>
          </div>
          <div class="fo-c-right slide-in-common">
            <img id="fourth-container-img" src="src/assets/images/bridal_img.png" alt="loading..." />
          </div>
        </div>
      </div>
    </div>
    <div class="fifth-container-wrp">
      <div class="fifth-container">
        <div class="fi-c-wrapper">
          <div class="fi-c-header">
            <div>Franchisee Opportunity with Naturals</div>
          </div>
          <div class="fi-c-carousel">
            <div class="fi-c-slides">
              <div class="fi-c-slide" id="slide1">
                <div>Womenpreneurs</div>
                <p>
                  Join a supportive community of women who are passionate about beauty
                  and empowered by entrepreneurship. Naturals is here to help you thrive!
                  Unlock your potential and turn your beauty dreams into a thriving business.
                  Connect, learn, and grow with like-minded women on this exciting journey.
                </p>
              </div>
              <div class="fi-c-slide" id="slide2">
                <div>Brand Value</div>
                <p>
                  Why fumble through the fog of obscurity when you can bask in the glow
                  of a stellar legacy? Naturals isn't just a name—it's a constellation
                  of trust lighting up the beauty skies of India.
                  Skip the awkward introductions and tedious explanations.
                  With Naturals, you're not just starting a business;
                  you're joining a galaxy of success
                </p>
              </div>
              <div class="fi-c-slide" id="slide3">
                <div>Proven Return On Investment</div>
                <p>
                  Starting a franchise with Naturals presents an opportunity to increase
                  your investment in a systematic and steady manner. Our tried-and-tested
                  business model minimizes risks while maximizing potential profits.
                  Experience a significant ROI within 36 - 48 months, thanks to our proven
                  business strategies.
                </p>
              </div>
            </div>
            <div class="fi-c-dots">
              <span class="fi-c-dot" data-slide="1"></span>
              <span class="fi-c-dot" data-slide="2"></span>
              <span class="fi-c-dot" data-slide="3"></span>
            </div>
          </div>
          <div class="fi-c-btn">
            <button onClick="openTab('./FRANCHISE/index.html')">Enquire Now</button>
          </div>
        </div>
        <div class="f-c-image-wrapper slide-in-common">
          <img id="Franchise-girl-img" src="src/assets/images/Franchise_girl.png" alt="loading..." />
        </div>
      </div>
    </div>

    <div class="sixth-container-wrp bg-white">
      <div class="sixth-container">
        <div class="si-c-left slide-in-common">
          <img id="academy-img" src="src/assets/images/academy_image.png" alt="loading..." />
        </div>
        <div class="si-c-right slide-in-common">
          <div class="si-c-heading">Naturals Beauty Academy</div>
          <div class="si-c-subhead">Learn with the International Experts</div>
          <p class="si-c-desc">
            Join Naturals Beauty Academy to gain top-tier beauty training from
            industry experts. Our programs provide hands-on experience and
            essential skills using premium products, preparing you for a
            successful career in the beauty industry.
          </p>
          <div class="si-c-btn">
            <button onClick="openTab('https://naturalsbeautyacademy.com/apply-now/',true)">Enroll now</button>
          </div>
        </div>
      </div>
    </div>

    <div class="seventh-container">
      <div class="sev-c-header">
        <span>What Our Valued Customers Say</span>
      </div>
      <div class="sev-c-timeline">
        <div class="timeline">
          <div class="timeline-line"></div>
          <div class="timeline-dot">
            <div class="t-d-circle-wrap t-d-c-wrap-top">
              <div class="t-d-circle t-d-c-1">
                <img src="./assets/val_cust_dummy.jpeg" alt="loading.." />
              </div>
            </div>
            <div class="dotted-line d-l-top d-l-1">
              <p class="d-l-p-1">
                I recently went for a haircut, and one of their senior
                staff attended to me. The whole experience was comfortable, and I absolutely
                love the result
              </p>
            </div>
          </div>
          <div class="timeline-dot">
            <div class="t-d-circle-wrap t-d-c-wrap-bottom">
              <div class="t-d-circle t-d-c-1">
                <img src="./assets/val_cust_dummy_1.jpeg" alt="loading.." />
              </div>
            </div>
            <div class="dotted-line d-l-bottom d-l-1">
              <p class="d-l-p-2">
                I had an amazing experience at Naturals! The staff was friendly and professional,
                and they took the time to understand exactly what I wanted.
              </p>
            </div>
          </div>
          <div class="timeline-dot">
            <div class="t-d-circle-wrap t-d-c-wrap-top">
              <div class="t-d-circle t-d-c-1">
                <img src="./assets/val_cust_dummy_2.jpeg" alt="loading.." />
              </div>
            </div>
            <div class="dotted-line d-l-top d-l-1">
              <p class="d-l-p-3">
                I had a wonderful experience at Naturals.
                The haircut was satisfying, and the hairdresser was hospitable.
                Overall, great service.
              </p>
            </div>
          </div>
          <div class="timeline-dot">
            <div class="t-d-circle-wrap t-d-c-wrap-bottom">
              <div class="t-d-circle t-d-c-1">
                <img src="./assets/val_cust_dummy_3.jpeg" alt="loading.." />
              </div>
            </div>
            <div class="dotted-line d-l-bottom d-l-1">
              <p class="d-l-p-4">
                I had a wonderful experience at Naturals. The haircut was satisfying,
                and the hairdresser was hospitable. Overall, great service.
              </p>
            </div>
          </div>
          <div class="timeline-dot">
            <div class="t-d-circle-wrap t-d-c-wrap-top">
              <div class="t-d-circle t-d-c-1">
                <img src="./assets/val_cust_dummy_4.jpeg" alt="loading.." />
              </div>
            </div>
            <div class="dotted-line d-l-top d-l-1">
              <p class="d-l-p-5">
                I got my haircut done at Naturals. It was an amazing job -
                very professional and kind. The ambience was so pleasant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <div class="eighth-container">
      <div class="ei-c-top">Latest News</div>
      <div class="ei-c-bottom">
        <div class="ei-c-card"
          onClick="openNewTab('https://timesofindia.indiatimes.com/city/chennai/naturals-salon-appoints-sanjay-enishetty-as-new-ceo/articleshow/111939616.cms')">
          <div class="ei-c-card-top">
            <img src="./assets/latest_news_2.jpeg" alt="loading..." />
          </div>
          <div class="ei-c-card-bottom">
            <div>Naturals Salon appoints Sanjay Enishetty as CEO</div>
            <p>
              Groom India Salon & Spa, better known as Naturals Salon,
              has appointed Sanjay Enishetty as its chief executive officer
              (CEO) effective immediately.
            </p>
          </div>
        </div>
        <div class="ei-c-card"
          onClick="openNewTab('https://www.news18.com/movies/sunny-leone-inaugurates-naturals-first-beauty-and-experience-outlet-in-bengaluru-8937642.html')">
          <div class="ei-c-card-top">
            <img src="./assets/latest_news_1.jpeg" alt="loading..." />
          </div>
          <div class="ei-c-card-bottom">
            <div>Sunny Leone Inaugurates Naturals' First Beauty And Experience Outlet In Bengaluru</div>
            <p>
              Actress Sunny Leone recently visited the city of Bengaluru to inaugurate
              the outlet of Naturals' Beauty and Experiences (BAE)
            </p>
          </div>
        </div>
        <div class="ei-c-card"
          onClick="openNewTab('https://sportsmintmedia.com/naturals-salon-enters-d2c-skincare-market-with-smriti-mandhana-as-brand-ambassador/')">
          <div class="ei-c-card-top">
            <img src="./assets/latest_news_3.jpeg" alt="loading..." />
          </div>
          <div class="ei-c-card-bottom">
            <div>Naturals Salon enters D2C with Smriti Mandhana as brand ambassador</div>
            <p>
              Naturals Salon, India's leading unisex salon chain owned by Groom India,
              has signed cricketer, Smriti Mandhana, as the brand ambassador for its
              upcoming D2C skincare product line
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="eighth-container-mobile">
      <div class="ei-c-m-top">Latest News</div>
      <button class="ei-c-m-arrow ei-c-m-left-arrow" onClick="prevCard()">
        &#9664;
      </button>
      <div class="ei-c-m-bottom">
        <div class="ei-c-m-cards">
          <div class="ei-c-m-card"
            onClick="openNewTab('https://timesofindia.indiatimes.com/city/chennai/naturals-salon-appoints-sanjay-enishetty-as-new-ceo/articleshow/111939616.cms')">
            <div class="ei-c-m-card-top">
              <img src="./assets/latest_news_2.jpeg" alt="loading..." />
            </div>
            <div class="ei-c-m-card-bottom">
              <div>Naturals Salon appoints Sanjay Enishetty as CEO</div>
              <p>
                Groom India Salon & Spa, better known as Naturals Salon,
                has appointed Sanjay Enishetty as its chief executive officer
                (CEO) effective immediately.
              </p>
            </div>
          </div>
          <div class="ei-c-m-card"
            onClick="openNewTab('https://www.news18.com/movies/sunny-leone-inaugurates-naturals-first-beauty-and-experience-outlet-in-bengaluru-8937642.html')">
            <div class="ei-c-m-card-top">
              <img src="./assets/latest_news_1.jpeg" alt="loading..." />
            </div>
            <div class="ei-c-m-card-bottom">
              <div>Sunny Leone Inaugurates Naturals' First Beauty And Experience Outlet In Bengaluru</div>
              <p>
                Actress Sunny Leone recently visited the city of Bengaluru to inaugurate
                the outlet of Naturals' Beauty and Experiences (BAE)
              </p>
            </div>
          </div>
          <div class="ei-c-m-card"
            onClick="openNewTab('https://sportsmintmedia.com/naturals-salon-enters-d2c-skincare-market-with-smriti-mandhana-as-brand-ambassador/')">
            <div class="ei-c-m-card-top">
              <img src="./assets/latest_news_3.jpeg" alt="loading..." />
            </div>
            <div class="ei-c-m-card-bottom">
              <div>Naturals Salon enters D2C with Smriti Mandhana as brand ambassador</div>
              <p>
                Naturals Salon, India's leading unisex salon chain owned by Groom India,
                has signed cricketer, Smriti Mandhana, as the brand ambassador for its
                upcoming D2C skincare product line
              </p>
            </div>
          </div>
        </div>
      </div>
      <button class="ei-c-m-arrow ei-c-m-right-arrow" onClick="nextCard()">
        &#9654;
      </button>
    </div> */}
    
  </>
  </Layout>
  )
}

export default Newdesign