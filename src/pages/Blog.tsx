import React from 'react'
import './css/Blog.css'
import PostsList from '../components/PostsList/PostsList'
import BlogItem from '../components/BlogItem/BlogItem'

const Blog = () => {
  return (
    <div className="container">
      <h1 className="blog-title">Blog</h1>
      <div className="blog-content d-f">
        <aside>
          <form action="" className='blog-search d-f jc-sb'>
            <input type="text" name='blogSearchQuery' placeholder='Search...' />
            <button type="button"><img src="/images/search.png" alt="search" /></button>
          </form>
          <div className="blog-categories">
            <h4 className="blog-categories-title">Categories</h4>
            <div className="blog-categories-box d-f">
              <button className="blog-categories-btn">Fashion</button>
              <button className="blog-categories-btn">Style</button>
              <button className="blog-categories-btn">Accessories</button>
              <button className="blog-categories-btn">Season</button>
            </div>
          </div>
        </aside>
        <div>
          <div className='blog-box d-f'>
            {
              PostsList.map((post) => {
                return (
                  <BlogItem
                    id={post.id}
                    image={post.image}
                    category={post.category}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                  />
                )
              })
            }
          </div>
          <div className="blog-pagination d-f">
            <button className='blog-pagination-btn pagination-btn__active'>1</button>
            <button className='blog-pagination-btn'>2</button>
            <button className='blog-pagination-btn'>
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.0739384 0.960613C0.0266174 0.913679 0 0.84979 0 0.78314C0 0.716491 0.0266174 0.652602 0.0739384 0.605667L0.603858 0.0757478C0.649218 0.0274165 0.712548 0 0.778831 0C0.845114 0 0.908445 0.0274165 0.953805 0.0757478L5.54811 4.67005C5.61844 4.7403 5.658 4.8356 5.65809 4.93501V5.06499C5.658 5.1644 5.61844 5.2597 5.54811 5.32995L0.953805 9.92425C0.908445 9.97258 0.845114 10 0.778831 10C0.712548 10 0.649218 9.97258 0.603858 9.92425L0.0739384 9.39433C0.0266174 9.3474 0 9.28351 0 9.21686C0 9.15021 0.0266174 9.08632 0.0739384 9.03939L4.11333 5L0.0739384 0.960613Z" fill="black" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog