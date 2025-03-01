import React from 'react'
import '../assets/pricing.css'
import Layout from './Layout'

const Pricing = () => {
  return (
    <>
        <Layout>
         
          <div class="s-p-w-banner">
            <h1>Women's Services - Pricing</h1>
          </div>
          <div class="s-p-w-s-c">
            <h1>*Price of service may vary between Cities/ States</h1>
            <h1>*Certain services are available only in selected salons</h1>
          </div>
          <div class="pdf-viewer-wrapper">
            {/* <div id="loader">
              <div class="loader"></div>
            </div> */}
            <div id="pdf-viewer"></div>
          </div>
         
    </Layout>
   
    </>
  )
}

export default Pricing