import React from 'react'
import './css/ResetPassword.css'

const ResetPassword = () => {
    return (
        <>
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="reset-title">Have you Forgotten Your Password ?</h1>
            <h3 className="reset-subtitle">
                If you've forgotten your password, enter your e-mail address and we'll send you an e-mail 
            </h3>
            <form action="" className='reset-fm'>
                <input type="email" name="resetEmail" placeholder='Email'/>
                <button type="button">Reset password</button>
            </form>
        </>
    )
}

export default ResetPassword