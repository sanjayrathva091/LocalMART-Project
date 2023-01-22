import React, { createContext, useReducer, useEffect} from 'react';
import {state,useState} from 'react';
import "./cartPage.css";
import ContextCart from './ContextCart';
import  products  from './products';
import { reducer } from "./reducer";


export const CartContext = createContext();

const initialState = {
  item: [],
  totalAmount: 0,
  totalItem: 0,
};
const Cart = () => {
  const [product, setProduct] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const clearCart = () => {
    return dispatch({ type: "CLEAR_CART" });
  };

 const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };  

  // useEffect(() => {
  //   dispatch({ type: "GET_TOTAL" });
  
  // }, [state.item]);
  const getproduct = async()=>{
    try {
      let res = await fetch('https://dull-lime-drill-veil.cyclic.app/products')
      // dispatch({
      //   type: "Product",
      //   payload: res
      // })
      state.item=res
     } catch (error) {
       console.log(error);
     }
  }

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    
    getproduct()

  }, []);

  return (
    <CartContext.Provider value={{ ...state, removeItem, clearCart, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
  )
}

export default Cart;