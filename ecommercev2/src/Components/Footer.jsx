import React from 'react'
import './Footer.css'
import Instagram from '../images/instagram.png'
import Tiktok from '../images/tik-tok.png'
import Pinterest from '../images/pinterest.png'

function Footer() {
  return (
    <div>
      <footer>
        <div class="icons">
            <a href="/"><img src={Instagram} alt="instagram" /></a>
            <a href="/"><img src={Tiktok} alt="tiktok" /></a>
            <a href="/"><img src={Pinterest} alt="pinterest" /></a>
        </div>
        <h4> © 2024 Sunset || All rights reserved. </h4>
        <div class="notice">
            <a href="/">Legal & Privacy</a>
            <a href="/">Terms & Service</a>
            <a href="/">Refund Policy</a>
            <a href="/">Cookie Setting</a>
            <a href="/">Cookie Notice</a>
        </div>
    </footer>
    </div>
  )
}

export default Footer
