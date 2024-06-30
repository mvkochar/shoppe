import React from 'react'
import './css/Home.css'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductCard from '../components/ProductCard/ProductCard'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
    <main className='home-main container'>
      <div className="home-main-title">Gold big hoops</div>
      <div className="home-main-price">$ 68,00</div>
      <a href="" className="home-main-view">View Product</a>
      <div className="home-main-slider d-f align-center">
         <div className="slider-item__active"></div>
         <div className="slider-item"></div>
         <div className="slider-item"></div>
         <div className="slider-item"></div>
      </div>
    </main>
    <section className='home-latest container'>
      <div className="d-f jc-sb">
        <h2 className="home-latest-title">Shop The Latest</h2>
        <Link to='/shop' className="home-latest-all">View All</Link>
      </div>
      <div className="home-latest-box d-f jc-sb">
        {
          ProductsList.map((product) => {
            return (
              <ProductCard
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                sale={product.sale}
                isSale={product.isSale}
                soldOut={product.soldOut}
              />
            )
          })
        }
      </div>
    </section>
   </>
  )
}

export default Home