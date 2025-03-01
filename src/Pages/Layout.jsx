import React from 'react'
import Header from './Header'
import Hero from './Hero'
import InfoPage from './InfoPage'

const Layout = ({children}) => {
  return (
    <div className='home-page-wrapper'>
        <Header/>
          {children}
          <InfoPage/>
          {/* <div class="loader-overlay">
    <img id="loader-overlay-img" src="./assets/mobile/nat_logo_svg.svg" alt="Loading..." />
  </div> */}
        </div>
  )
}

export default Layout