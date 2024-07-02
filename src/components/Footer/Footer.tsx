import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="d-f jc-sb align-center">
        <nav>
          <ul className="footer-nav-list d-f">
            <li><Link to='/contact'>Contact</Link></li>
            <li><a href="">Terms of services</a></li>
            <li><a href="">Shippng and returns</a></li>
          </ul>
        </nav>
         <form action="" className="footer-newsletter d-f jc-sb">
            <input type="email" name="newsletterEmail" placeholder='Give an email, get the newsletter.'/>
            <button type="button"><img src="/images/arrow-right.svg" alt="arrow-right" /></button>
          </form> 
      </div>
      <div className="footer-info d-f jc-sb">
        <div className="footer-rights">&copy; 2021 Shelly. <a href="">Terms of use</a> and <a href="">privacy policy</a>.</div>
        <div className="footer-social d-f">
          <div><img src="/images/social/1.png" alt="social1" /></div>
          <div><img src="/images/social/2.png" alt="social2" /></div>
          <div><img src="/images/social/3.png" alt="social3" /></div>
          <div><img src="/images/social/4.png" alt="social4" /></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer