import React from 'react'
import './css/Shop.css'
import PriceSlider from '../components/PriceSlider/PriceSlider'
import ProductsList from '../components/ProductsList/ProductsList'
import ProductCard from '../components/ProductCard/ProductCard'

const Shop = () => {
    return (
        <>
            <div className="container">
                <div className="top-divider" style={{ marginTop: "17px" }}></div>
                <h1 className="shop-title">Shop The Latest</h1>
                <div className="shop-content d-f">
                    <aside>
                        <form action="" className='shop-search d-f jc-sb'>
                            <input type="text" name='shopSearchQuery' placeholder='Search...' />
                            <button type="button"><img src="/images/search.png" alt="search" /></button>
                        </form>
                        <form action="" className="shop-flters">
                            <div className="select-bl">
                                <select name="filterShop">
                                    <option value="0">Shop by</option>
                                </select>
                            </div>
                            <div className="select-bl">
                                <select name="filterShop">
                                    <option value="0">Shop by</option>
                                </select>
                            </div>
                            <div className="price-range">
                                <PriceSlider />
                            </div>
                            <div className="switch-bl d-f jc-sb align-center">
                                <div className="switch-bl-title">On sale</div>   
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                            <div className="switch-bl d-f jc-sb align-center">
                                <div className="switch-bl-title">In stock</div>   
                                <label className="switch">
                                    <input type="checkbox"/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </form>
                    </aside>
                    <div className="shop-box d-f">
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
                </div>
            </div>

        </>
    )
}

export default Shop