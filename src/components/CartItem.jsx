import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { decrementItem, incrementItem, removeCart } from "../feature/services/cartSlice";

const AddToCart = ( ) => {
  const { cartItem, totalAmount } = useSelector((state) => state.Cart);
  const dispatch=useDispatch();

  return (
    <div>
      {cartItem.map((cart) => {
        const oneItemPrice = cart.price * cart.quantity;
        return (
          <div key={cart.id} className="  my-10">
            <div className="flex flex-col relative mb-10 bg-white justify-center lg:flex-row items-center lg:w-3/4 w-11/12 lg:justify-between p-2 lg:p-2 rounded-md mx-auto shadow-md">
              <div className=" flex flex-col lg:flex-row justify-center items-center">
                <img src={cart.image} className="w-20 mr-5" alt="" />
                <div className="flex flex-col justify-between">
                  <h1 className="text-center lg:text-left shadow lg:shadow-none p-1 rounded my-2 lg:my-0">{cart.title}</h1>
                  <p className=" text-center lg:text-left my-2 lg:my-0">$ {oneItemPrice.toFixed(2)}</p>
                </div>
              </div>
              <div className="flex items-center select-none">
                <span className="mx-2">
                  <MdKeyboardArrowLeft
                    onClick={() => {
                      dispatch(decrementItem(cart));
                    }}
                    className="text-2xl cursor-pointer"
                  />
                </span>
                {cart.quantity}
                <span className="mx-2">
                  <MdKeyboardArrowRight
                    onClick={() => {
                      dispatch(incrementItem(cart));
                    }}
                    className="text-2xl cursor-pointer"
                  />
                </span>
              </div>
              <span
                onClick={() => {
                  dispatch(removeCart(cart));
                }}
                className=" select-none cursor-pointer hover:bg-red-600 hover:text-white absolute top-[-20px] px-2 rounded right-[-20px] bg-red-200"
              >
                X
              </span>
            </div>
          </div>
        );
      })}
      <hr className=" border-2 border-b-slate-400 my-5 w-3/4 mx-auto" />
      <div className=" w-3/4 mx-auto mb-10 flex justify-between px-5">
        <h1 className=" text-2xl font-bold">Total</h1>
        <h1 className=" text-2xl font-bold">$ {totalAmount.toFixed(2)}</h1>
      </div>
    </div>
  );
};

export default AddToCart;
