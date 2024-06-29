import React from 'react'
import './ProductCard.css'

type ProductCardProps = {
    id: number
    image: string
    title: string
    price: string
}

const ProductCard = ({ id, image, title, price }: ProductCardProps) => {
    return (
        <div>
            <div className="product-card-main pos-r">
                <div><img src={image} alt="product" /></div>
                <button className='product-card-add'>Add to cart</button>
            </div>
            <div className="product-card-title">{title}</div>
            <div className="product-card-price">${price}</div>
        </div>
    )
}

export default ProductCard