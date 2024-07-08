import React from 'react'
import './OrdersTable.css'
import { Link } from 'react-router-dom'

type OrdersTableProps = {
    ordersType?: number 
}

const OrdersTable = ({ordersType = 1}:OrdersTableProps) => {
  return (
    <table className='orders-tb'>
        <thead>
            <tr>
                <th>Order number</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>7643980998990</td>
                <td>October 8,2021</td>
                <td>Delivered</td>
                <td>$ 105</td>
                <td><Link to="/order">View Order</Link> {ordersType == 2 ? <> | <a href="">Download</a></> : null } </td>
            </tr>
            <tr>
                <td>943980998990</td>
                <td>October 8,2021</td>
                <td>Processing</td>
                <td>$ 100</td>
                <td><a href="">View Order</a> {ordersType == 2 ? <> | <a href="">Download</a></> : null } </td>
            </tr>
            <tr>
                <td>879980998990</td>
                <td>October 8,2021</td>
                <td>Delivered</td>
                <td>$ 65</td>
                <td><a href="">View Order</a> {ordersType == 2 ? <> | <a href="">Download</a></> : null } </td>
            </tr>
        </tbody>

    </table>
  )
}

export default OrdersTable