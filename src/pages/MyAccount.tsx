import React from 'react'
import './css/MyAccount.css'
import { Link } from 'react-router-dom'



const MyAccount = () => {
    const [swich, setSwich] = React.useState(3)
    const [account, setAccount] = React.useState(1)

    return (
        <>
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="account-title">My Account</h1>
            {
                swich !== 3 ?
                    <>
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
                            <button type="button" onClick={() => setSwich(3)}> {swich === 1 ? "Sign in" : "Register"} </button>
                            {
                                swich === 1 ?
                                    <Link to="/reset-password" className="account-forgotten-link">Have you forgotten your password?</Link>
                                    : null
                            }
                        </form>

                    </>
                    :
                    <>
                        <div className="account-menu container d-f">
                            <button
                                className={account === 1 ? "account-menu-btn menu-btn__active" : "account-menu-btn"}
                                onClick={() => setAccount(1)}
                            >
                                Dashboard
                            </button>
                            <button
                                className={account === 2 ? "account-menu-btn menu-btn__active" : "account-menu-btn"}
                                onClick={() => setAccount(2)}
                            >
                                Orders
                            </button>
                            <button
                                className={account === 3 ? "account-menu-btn menu-btn__active" : "account-menu-btn"}
                                onClick={() => setAccount(3)}
                            >
                                Downloads
                            </button>
                            <button
                                className={account === 4 ? "account-menu-btn menu-btn__active" : "account-menu-btn"}
                                onClick={() => setAccount(4)}
                            >
                                Addresses
                            </button>
                            <button
                                className={account === 5 ? "account-menu-btn menu-btn__active" : "account-menu-btn"}
                                onClick={() => setAccount(5)}
                            >
                                Account details
                            </button>
                            <button className="account-menu-btn" onClick={() => { setSwich(1); setAccount(1) }}>Logout</button>
                        </div>
                        <div className={account === 1 ? "account-dashboard container" : "d-n"}>
                            <p className="account-dashboard-desc">
                                Hello Vitatheme (not Vitatheme? <span onClick={() => setSwich(1)}>Log out</span> )
                            </p>
                            <p className="account-dashboard-desc">
                                From your account dashboard you can view your <span>recent orders</span>, manage your <span>shipping
                                    and billing addresses</span>, and edit your <span>password and account details</span>.
                            </p>
                        </div>
                        <div className={account === 2 ? "account-orders container" : "d-n"}>
                            <div className="orders-item d-f jc-sb align-center">
                                <h5 className="orders-item-title">No order has been made yet.</h5>
                                <Link to="/shop">Browse product</Link>
                            </div>
                        </div>
                        <div className={account === 3 ? "account-downloads container" : "d-n"}>
                            <div className="downloads-item d-f jc-sb align-center">
                                <h5 className="downloads-item-title">No downloads available yet.</h5>
                                <Link to="/shop">Browse product</Link>
                            </div>
                        </div>
                        <div className={account === 4 ? "account-addresses container" : "d-n"}>
                            <h5 className="account-addresses-about">
                                The following addresses will be used on the checkout page by default.
                            </h5>
                            <table className='account-addresses-tb'>
                                <thead>
                                    <tr>
                                        <th>Billing address</th>
                                        <th>Shipping address</th>
                                    </tr>
                                </thead>
                                <tfoot>
                                    <tr>
                                        <td><button>Add</button></td>
                                        <td><button>Add</button></td>
                                    </tr>
                                    <tr>
                                        <td>You have not set up this type of address yet.</td>
                                        <td>You have not set up this type of address yet.</td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <form action="" className={account === 5 ? "account-details" : "d-n"}>
                            <div className="input-box d-f">
                                <input type="text" name='accountFname' placeholder='First name*' />
                                <input type="text" name='accountLname' placeholder='Last name*' />
                                <div>
                                    <input type="text" name='accountDname' placeholder='Display name*' />
                                    <p className="account-details-note">
                                        This will be how your name will be displayed in the account section and in reviews.
                                    </p>
                                </div>
                                <input type="email" name="accountEmail" placeholder='Email address*' />
                            </div>
                            <div className="account-details-title">Password change</div>
                            <div className="input-box d-f">
                                <input type="password" name="accountPassword" placeholder='Current password (leave blank to leave unchanged)' />
                                <input type="password" name="accountRepeatPassword" placeholder='New password (leave blank to leave unchanged)' />
                                <input type="password" name="accountConfirmPassword" placeholder='Confirm new password' />
                            </div>
                            <button type="button">Save changes</button>
                        </form>
                    </>
            }
        </>
    )
}

export default MyAccount