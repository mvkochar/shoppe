import React from 'react'
import './css/Checkout.css'
import { Link } from 'react-router-dom'

const Checkout = () => {
    return (
        <>
            <h1 className="checkout-title">Checkout</h1>
            <div className="container">
                <p className="checkout-about">
                    Returning customer? <Link to="/account">Click here to login</Link> <br />
                    Have a coupon? <label htmlFor="checkoutCoupon">Click here to enter your code</label>
                </p>
                <div className="checkout-coupon">
                    <h5 className="checkout-coupon-note">If you have a coupon code, please apply it below.</h5>
                    <form action="" className='checkout-coupon-fm'>
                        <input type="text" name='checkoutCoupon' id='checkoutCoupon' placeholder='Coupon Code' />
                        <button type="button">Apply coupon</button>
                    </form>
                </div>
                <div className="checkount-content d-f jc-sb">
                    <div>
                        <h2 className="checkout-bl-title">Billing Details</h2>
                        <form action="" className="checkout-details-fm">
                            <div className="input-box d-f">
                                <div className="input-bl d-f">
                                    <input type="text" name='addressFname' placeholder='First name *' />
                                    <input type="text" name='addressLname' placeholder='Last name *' />
                                </div>
                                <input type="text" name='addressCompany' placeholder='Company Name' />
                                <input type="text" name='addressCountry' placeholder='Country *' />
                                <input type="text" name='addressStreet' placeholder='Street Address *' />
                                <input type="text" name='addressPostcode' placeholder='Postcode / ZIP *' />
                                <input type="text" name='addressCity' placeholder='Town / City *' />
                                <input type="tel" name="addressPhone" placeholder='Phone *' />
                                <input type="email" name="addressEmail" placeholder='Email *' />
                            </div>
                            <div className="check-box d-f">
                                <div className="check-bl d-f align-center">
                                    <input type="checkbox" name="createAccount" id="createAccount" />
                                    <label htmlFor="createAccount">Create an acoount?</label>
                                </div>
                                <div className="check-bl d-f align-center">
                                    <input type="checkbox" name="differentAddress" id="differentAddress" />
                                    <label htmlFor="differentAddress">Ship to a different address?</label>
                                </div>
                            </div>
                            <input type="text" name='orderNotes' placeholder='Order notes' />
                        </form>
                    </div>
                    <div>
                        <h2 className="checkout-bl-title">Your order</h2>
                        <div className="checkout-order">
                            <table className='checkout-order-tb'>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Lira Earrings</td>
                                        <td>$64</td>
                                    </tr>
                                    <tr>
                                        <td>Ollie Earrings</td>
                                        <td>$10</td>
                                    </tr>
                                    <tr>
                                        <td>Kaede Hair Pin</td>
                                        <td>$10</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$85</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping</td>
                                        <td>Free shipping</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>$85</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <form action="" className="checkout-order-fm">
                                <div className="radio-bl d-f align-center">
                                    <input type="radio" name="orderPayments" id="direct" />
                                    <label htmlFor="direct">Direct bank transfer</label>
                                </div>
                                <p className="checkout-order-note">
                                    Make your payment directly into our bank account. 
                                    Please use your Order ID as the payment reference. 
                                    Your order will not be shipped until the funds have cleared in our account
                                </p>
                                <div className="radio-bl d-f align-center">
                                    <input type="radio" name="orderPayments" id="checkPayments" />
                                    <label htmlFor="checkPayments">Check payments</label>
                                </div>
                                <div className="radio-bl d-f align-center">
                                    <input type="radio" name="orderPayments" id="cash" />
                                    <label htmlFor="cash">Cash on delivery</label>
                                </div>
                                <div className="radio-bl d-f align-center">
                                    <input type="radio" name="orderPayments" id="payPal" />
                                    <label htmlFor="payPal">PayPal</label>
                                </div>
                            </form>
                            <Link to='/order-confirm' className='checkout-order-place'>Place order</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout