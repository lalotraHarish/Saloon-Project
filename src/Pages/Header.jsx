import React from "react";
import { Link } from "react-router-dom";
import '../assets/style.css'
import '../assets/responsive.css'
const Header = () => {
  return (
    <>
    <header>
      <div class="left">
        <img src="src/assets/images/naturals_header_logo.png" width="300" height="150" alt="logo.png" />
      </div>
      <div class="right">
        <ul>
          <li class="sub-menu-pricing">
            <a href="" >Our Services</a>
            <ul>
              <li><a href="./services/Hair/">Haircare</a></li>
              <li><a href="./services/skin/">Skincare</a></li>
              <li><a href="./services/Body/">Bodycare</a></li>
            </ul>
          </li>
          <li><a href="./SALON_LOCATOR/index.html">Salon Locator</a></li>
          <li class="sub-menu-pricing">
            <a href="">Pricing</a>
            <ul>
              <li><a href="/pricing">Service For Women</a></li>
              <li><a href="/pricing">Service For Men</a></li>
            </ul>
          </li>
          <li><a href="https://bridal.naturals.in/" target="_blank">Bridal</a></li>
          <li><a href="./FRANCHISE/index.html">Franchise</a></li>
          <li><a href="./media/">Media</a></li>
          <li><a href="./ABOUT/index.html">About us</a></li>
          <li><a href="./blogs/">Blogs</a></li>
        </ul>
      </div>
    </header>
    <div class="header-mob">
      <div class="menu-container">
        <button class="menu-toggle" aria-label="Open Menu">&#9776;</button>
        <div>
          <img src="./assets/mobile/naturals_logo.png" alt="loading..." />
        </div>
      </div>
      <nav class="side-menu">
        <button class="close-btn" aria-label="Close Menu">&times;</button>
        <ul>
          <li><a href="">Home</a></li>
          <li>
            <a href="" >Our Services</a>
            <ul class="sub-menu-pricing-mobile">
              <li><a href="./services/Hair/">Haircare</a></li>
              <li><a href="./services/skin/">Skincare</a></li>
              <li><a href="./services/Body/">Bodycare</a></li>
            </ul>
          </li>
          <li><a href="./SALON_LOCATOR/index.html">Salon Locator</a></li>
          <li>
            <a href="">Pricing</a>
            <ul class="sub-menu-pricing-mobile">
              <li><a href="./PRICING_WOMEN/index.html">Services for Women</a></li>
              <li> <a href="./PRICING_MEN/index.html">Services for Men</a></li>
            </ul>
          </li>
          <li><a href="https://bridal.naturals.in/" target="_blank">Bridal</a></li>
          <li><a href="./FRANCHISE/index.html">Franchise</a></li>
          <li><a href="./media/">Media</a></li>
          <li><a href="./ABOUT/index.html">About us</a></li>
          <li><a href="./blogs/">Blogs</a></li>
        </ul>
      </nav>
    </div></>
  );
};

export default Header;
