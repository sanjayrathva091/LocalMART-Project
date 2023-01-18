import React, { useState } from 'react'
import "./cartPage.css";
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from './products';

const Cart = () => {

  const [item, useItem] = useState(products)

  return (
    <>
      <header>
        <div className='continue-shopping'>
          <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
          <h3>Continue Shopping</h3>
        </div>
        <div className='cart-icon'>
          <img src="./images/cart.png" alt="cart" />
          <p>0</p>
        </div>
      </header>
      <section className='main-cart-section'>
        <h1>Shopping Cart</h1>
        <p className='total-items'>You have <span className='total-items-count'> 0 </span> items in shoppong cart</p>
        <div className='cart-items'>
          <div className='cart-items-container'>
            <Scrollbars>

              {
                item.map((curItem) => {
                  return  <Items key={curItem.id} {...curItem} />
                })
              }

             
            </Scrollbars>
          </div>
        </div>
        <div className='card-total'>
          <h3>Card Total : <span>000rs</span></h3>
          <button>Checkout</button>
        </div>
      </section>
    </>
  )
}

export default Cart;