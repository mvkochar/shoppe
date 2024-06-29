import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer container'>
      <div className="d-f jc-sb align-center">
        <nav>
          <ul className="footer-nav-list d-f">
            <li><a href="">Contact</a></li>
            <li><a href="">Terms of services</a></li>
            <li><a href="">Shippng and returns</a></li>
          </ul>
        </nav>
         <form action="" className="footer-newsletter d-f jc-sb">
            <input type="email" name="newsletterEmail" placeholder='Give an email, get the newsletter.'/>
            <button type="button"><img src="/images/arrow-right.svg" alt="arrow-right" /></button>
          </form> 
      </div>
    </footer>
  )
}

export default Footer