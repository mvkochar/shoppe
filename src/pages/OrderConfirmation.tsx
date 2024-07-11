import React from 'react'
import './css/OrderConfirmation.css'

const OrderConfirmation = () => {
  return (
    <div className="container">
      <div className="order-confirm-info">We've received your order</div>
      <div className="order-confirm-content d-f jc-sb">
        <div>
          <h2 className="confirm-bl-title">Order Details</h2>
          <div className="order-confirm-details d-f jc-sb">
            <div>
              <h5 className="confirm-details-title">Order number</h5>
              <h5 className="confirm-details-desc">1879605573994</h5>
            </div>
            <div>
              <h5 className="confirm-details-title">Delivery options</h5>
              <h5 className="confirm-details-desc">Standard delivery</h5>
            </div>
            <div>
              <h5 className="confirm-details-title">Email</h5>
              <h5 className="confirm-details-desc">Vitathemes@gmail.com</h5>
            </div>
            <div>
              <h5 className="confirm-details-title">Delivery address</h5>
              <h5 className="confirm-details-desc">
                Kristian holst 34 <br /> old street W1F <br /> 7NU london <br /> United Kingdom
              </h5>
            </div>
            <div>
              <h5 className="confirm-details-title">Payment method</h5>
              <h5 className="confirm-details-desc">
                Mastercard*************7865
              </h5>
            </div>
            <div>
              <h5 className="confirm-details-title">Contact number</h5>
              <h5 className="confirm-details-desc">+44 8749790988</h5>
            </div>
            <div>
              <h5 className="confirm-details-title">Order date</h5>
              <h5 className="confirm-details-desc">October 8,2020</h5>
            </div>
          </div>
        </div>
        <div>
          <h2 className="confirm-bl-title">Order Summary</h2>
          <table className='order-confirm-tb'>
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
    </div>
  )
}

export default OrderConfirmation