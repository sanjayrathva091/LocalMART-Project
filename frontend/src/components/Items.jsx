import React, { useContext }  from 'react';
import { CartContext } from './Cart';

const Items = ({ id, title, Color, img, price, quantity}) => {
   const {removeItem, increment, decrement} = useContext(CartContext)
   
    return (
        <>
            <div className='items-info'>
                <div className='product-img'>
                    <img src={img} alt="image" />
                </div>
                <div className='title'>
                    <h2>{title}</h2>
                    <p>{Color}</p>
                </div>
                <div className='add-minus-quantity'>
                    <i className="fa-solid fa-minus" onClick={() => decrement(id)}></i>
                    <input type="text" placeholder={quantity}  />
                    <i className="fa-solid fa-plus" onClick={() => increment(id)}></i>
                </div>
                <div className='price'>
                    <h3>{price}</h3>
                </div>
                <div className='remove-item'>
                    <i className="fas fa-trash-alt remove" 
                    onClick={()=>removeItem(id)}></i>
                </div>
            </div>
            <hr /> 
        </>
    );
};

export default Items;