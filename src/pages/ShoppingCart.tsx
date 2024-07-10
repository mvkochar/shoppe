import React from 'react'
import './css/ShoppingCart.css'
import ProductsList from '../components/ProductsList/ProductsList'
import { Link } from 'react-router-dom'

const ShoppingCart = () => {
  return (
    <>
      <h1 className="shopping-title">Shopping Cart</h1>
      <div className="shopping-content d-f jc-sb container">
        <aside>
          <div className="shopping-orders d-f">
            <div className="shopping-orders-item d-f">
              <div><img src={ProductsList[0].image} alt="product" width={136} height={136} /></div>
              <div className='orders-item-info'>
                <h3 className="orders-item-title">{ProductsList[0].title}</h3>
                <h5 className="orders-item-color">Black / Medium</h5>
                <h5 className="orders-item-price">{ProductsList[0].price}</h5>
              </div>
              <div className="orders-item-quantity d-f align-center">
                <button className="quantity-btn">-</button>
                <div className="quantity-count">1</div>
                <button className="quantity-btn">+</button>
              </div>
              <div className="orders-item-delete"><img src="/images/delete.svg" alt="delte" /></div>
            </div>
            <div className="shopping-orders-item d-f">
              <div><img src={ProductsList[1].image} alt="product" width={136} height={136} /></div>
              <div className='orders-item-info'>
                <h3 className="orders-item-title">{ProductsList[1].title}</h3>
                <h5 className="orders-item-color">Black / Medium</h5>
                <h5 className="orders-item-price">{ProductsList[1].price}</h5>
              </div>
              <div className="orders-item-quantity d-f align-center">
                <button className="quantity-btn">-</button>
                <div className="quantity-count">1</div>
                <button className="quantity-btn">+</button>
              </div>
              <div className="orders-item-delete"><img src="/images/delete.svg" alt="delete" /></div>
            </div>
            <div className="shopping-orders-item d-f">
              <div><img src={ProductsList[2].image} alt="product" width={136} height={136} /></div>
              <div className='orders-item-info'>
                <h3 className="orders-item-title">{ProductsList[2].title}</h3>
                <h5 className="orders-item-color">Black / Medium</h5>
                <h5 className="orders-item-price">{ProductsList[2].price}</h5>
              </div>
              <div className="orders-item-quantity d-f align-center">
                <button className="quantity-btn">-</button>
                <div className="quantity-count">1</div>
                <button className="quantity-btn">+</button>
              </div>
              <div className="orders-item-delete"><img src="/images/delete.svg" alt="delete" /></div>
            </div>
          </div>
          <button className='shopping-update'>Update cart</button>
          <form action="" className='shopping-coupon-fm'>
            <input type="text" name='couponCode' placeholder='Coupon Code' />
            <button type="button">Apply Coupon</button>
          </form>
        </aside>
        <div className='shipping-totals'>
          <div className="shippings-totals-title">Cart totals</div>
          <div className="shipping-totals-content d-f">
            <div className="shipping-totals-item d-f jc-sb">
              <h5 className="totals-item-title">Subtotal</h5>
              <div className="totals-item-desc">$ 65,00</div>
            </div>
            <div className="shipping-totals-item d-f jc-sb">
              <h5 className="totals-item-title">Shipping</h5>
              <div>
                <p className="totals-item-desc">Shipping costs will be calculated once you have provided address.</p>
                <div className="shipping-calculate">
                  <div className="shipping-calculate-caption d-f jc-sb">
                    <h5 className="shipping-calculate-title">Calculate shipping</h5>
                    <button className='shipping-calcualte-btn'><img src="/images/arrow-up.svg" alt="arrow-up" /></button>
                  </div> 
                  <form action="" className='shipping-calculate-fm d-f'>
                    <select name="shippingCountry">
                      <option value="0">Select a country</option>
                    </select>
                    <select name="shippingCity">
                      <option value="0">City</option>
                    </select>
                    <select name="shippingCode">
                      <option value="0">Post code / Zip</option>
                    </select>
                  </form>
                  <button className="shopping-totals-update">Update totals</button>
                </div>
              </div>
            </div>
          </div>
          <div className="shopping-totals-result d-f jc-sb">
            <div>Total</div>
            <div>$87.00</div>
          </div>
          <Link to="/checkout" className="shopping-totals-proceed">Proceed to checkout</Link>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart