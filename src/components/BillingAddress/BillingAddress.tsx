import React from 'react'
import './BillingAddress.css'

const BillingAddress = () => {
    return (
        <form action="" className="address-fm">
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
            <button type='button'>Save address</button>
        </form>
    )
}

export default BillingAddress