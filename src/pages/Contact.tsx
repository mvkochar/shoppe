import React from 'react'
import './css/Contact.css'

const Contact = () => {
    return (
        <> 
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="contact-title">Contact Us</h1>
            <h3 className="contact-subtitle">
                Say Hello send us your thoughts about our products or share
                your ideas with our Team!
            </h3>
            <form action="" className="contact-fm">
                <div className="input-bl d-f">
                    <input type="text" name='contactFName' placeholder='First name' />
                    <input type="text" name='contactLName' placeholder='Last name' />
                </div>
                <div className="input-bl d-f">
                    <input type="email" name="contactEmail" placeholder='Email' />
                    <input type="text" name='contactSubject' placeholder='Subject'/>
                </div>
                <textarea name="contactMsg" placeholder='Message'></textarea>
                <button type="button">Send</button>
            </form>
        </>
    )
}

export default Contact