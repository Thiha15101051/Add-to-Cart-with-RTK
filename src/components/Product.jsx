import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../feature/services/cartSlice';

const Product = (props) => {
    const {id,title,price,description,category,image}=props;
    const dispatch=useDispatch();
    const {quantity}=useSelector(state=>(state.Cart));
  return (
    <div className="w-[250px] max-h-[400px] hover:scale-105 hover:transition-transform p-3 shadow-lg flex flex-col justify-evenly rounded-md">
      <img src={image} className="p-3 productImg" alt="" />
      <h1 className="w-full truncate">{title}</h1>
      <button
        onClick={() => {
          dispatch(addToCart(props));
        }}
        className="bg-orange-200 hover:bg-orange-400 hover:text-slate-700 rounded shadow-md p-2"
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product