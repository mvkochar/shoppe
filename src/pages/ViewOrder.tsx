import React from 'react'
import './css/ViewOrder.css'

const ViewOrder = () => {
    return (
        <div className="order-content d-f jc-sb container">
            <div className="order-details">
                <h2 className="order-title">Order Details</h2>
                <div className="order-details-box d-f">
                    <div>
                        <h5 className="order-details-title">Order number</h5>
                        <p className="order-details-desc">1879605573994</p>
                    </div>
                    <div>
                        <h5 className="order-details-title">Delivery options</h5>
                        <p className="order-details-desc">Standard delivery</p>
                    </div>
                    <div>
                        <h5 className="order-details-title">Email</h5>
                        <p className="order-details-desc">Vitathemes@gmail.com</p>
                    </div>
                    <div>
                        <h5 className="order-details-title">Delivery address</h5>
                        <p className="order-details-desc">
                            Kristian holst 34 <br /> old street W1F <br /> 7NU london <br /> United Kingdom
                        </p>
                    </div>
                    <div style={{ marginTop: "-68px" }}>
                        <h5 className="order-details-title">Payment method</h5>
                        <p className="order-details-desc">Mastercard*************7865</p>
                    </div>
                    <div>
                        <h5 className="order-details-title">Contact number </h5>
                        <p className="order-details-desc">+44 8749790988</p>
                    </div>
                    <div style={{ marginTop: "-68px" }}>
                        <h5 className="order-details-title">Order date</h5>
                        <p className="order-details-desc">October 8,2020</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="order-title">Order Summary</h2>
                <table className='order-summary-tb'>
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
            </div>
        </div>
    )
}

export default ViewOrder