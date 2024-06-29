import React from 'react'
import './css/Home.css'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductCard from '../components/ProductCard/ProductCard'

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
        <a href="" className="home-latest-all">View All</a>
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