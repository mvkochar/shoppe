import React from 'react'
import './BlogItem.css'
import { Link } from 'react-router-dom'

type BlogItemProps = {
    id: number
    image: string
    category: string
    date: string
    title: string
    description: string
}

const BlogItem = ({ id, image, category, date, title, description }: BlogItemProps) => {
    return (
        <div>
            <div><img src={image} alt="blog-item" /></div>
            <div className="blog-item-about">{category} - {date}</div>
            <h3 className="blog-item-title">{title}</h3>
            <p className="blog-item-desc">{description}</p>
            <Link to={`/single-blog/${id}`} className="blog-item-more">Read more</Link>
        </div>
    )
}

export default BlogItem