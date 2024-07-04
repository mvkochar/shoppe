import React from 'react'
import './css/SingleBlog.css'
import { useParams } from 'react-router-dom'
import PostsList from '../components/PostsList/PostsList'

const SingleBlog = () => {
    const { id } = useParams<string>()
    let a = id ? id : '0'
    let index = parseInt(a)
    const currentPost = PostsList[index]

    return (
        <>
            <div className="top-divider container" style={{ marginTop: "17px" }}></div>
            <h1 className="single-blog-title">{currentPost.title}</h1>
            <h5 className="single-blog-subtitle">by <span>{currentPost.author}</span> - {currentPost.date}</h5>
            <div className="container"><img src={currentPost.image} alt="post-main" width={1248} height={646} /></div>
            <div className="single-blog-middle">
                <p className="single-blog-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                    sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                    consequat sed eu felis. Nunc sed porta augue.
                </p>
                <p className="single-blog-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
                    sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
                    consequat sed eu felis. Nunc sed porta augue.
                </p>
                <div><img src={currentPost.image} alt="post-min" width={670} height={300} /></div>
                <div className="single-blog-trends">
                    <h2 className="trends-title">Top trends</h2>
                    <p className="single-blog-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue 
                        a <br /> volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero.
                    </p>
                    <ul className="trends-list">
                        <li>consectetur adipiscing elit. Aliquam placerat</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>sapien tortor faucibus augue</li>
                        <li>a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SingleBlog