import React from 'react'
import './css/MyAccount.css'
import { Link } from 'react-router-dom'



const MyAccount = () => {
    const [swich, setSwich] = React.useState(1)

    return (
        <>
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="account-title">My account</h1>
            <div className="account-swich d-f">
                <button
                    className={swich === 1 ? "account-swich-btn swich-btn__active" : "account-swich-btn"}
                    onClick={() => setSwich(1)}
                >
                    Sign in
                </button>
                <button
                    className={swich === 2 ? "account-swich-btn swich-btn__active" : "account-swich-btn"}
                    onClick={() => setSwich(2)}
                >
                    Register
                </button>
            </div>
            <form action="" className="account-fm">
                <div className="input-box d-f">
                    {
                        swich === 2 ?
                            <input type="text" name='signLogin' placeholder='Login' />
                            : null
                    }
                    <input type="email" name="signEmail" placeholder='Email' />
                    <input type="password" name='signPassword' placeholder='Password' />
                    {
                        swich === 2 ?
                            <input type="password" name='repeatPassword' placeholder='Repeat Password' />
                            : null
                    }
                </div>
                <div className="check-bl d-f align-center">
                    <input type="checkbox" name="signRemember" id="signRemenmber" />
                    <label htmlFor="signRemember">Remember me</label>
                </div>
                <button type="button"> {swich === 1 ? "Sign in" : "Register"}</button>
                {
                    swich === 1 ?
                        <Link to="/reset-password" className="account-forgotten-link">Have you forgotten your password?</Link>
                        : null
                }
            </form>

        </>
    )
}

export default MyAccount