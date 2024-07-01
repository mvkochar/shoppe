import React from 'react'
import './ProductCard.css'
import { Link } from 'react-router-dom'

type ProductCardProps = {
    id: number
    image: string
    title: string
    price: string
    sale: string
    isSale: boolean
    soldOut: boolean
}

const ProductCard = ({ id, image, title, price, sale, isSale, soldOut}: ProductCardProps) => {
    return (
        <div>
            <div className="product-card-main pos-r">
                <div> <Link to={`/product/${id}`}><img src={image} alt="product" /></Link> </div>
                <button className='product-card-add'>Add to cart</button>
                <div className={soldOut ? "product-card-about" : "d-n"}>Sold out</div>
                <div className={isSale ? "product-card-about" : "d-n"}>- %{sale}</div>
            </div>
            <div className="product-card-title">{title}</div>
            <div className="product-card-price">${price}</div>
        </div>
    )
}

export default ProductCard