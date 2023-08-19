import React from 'react'
import './footer.css'

const Newsletter = () => {
  return (
      <>
          <div className="newsletter">
              <div className="center">
                  <div className="center-span">
                  <span>NEWSLETTER</span><br/>
                      <p className='updates'>SIGNUP FOR LATEST UPDATES AND OFFERS</p>
                      </div>
                  <div className="input-1">
                      <input type="text" placeholder='Email Address' />
                      <button className='signup'>SUBSCRIBE</button>
              </div>
              </div>
    
          </div>
    </>
  )
}

export default Newsletter