// import React from "react";
// import { useSelector } from "react-redux";

// import { Link } from "react-router-dom";

// const AddToCart = () => {
//   const { cartItem, totalAmount } = useSelector((state) => state.Cart);
//   
// };

// export default AddToCart;
import { useState } from "react";
import { Modal, Group, Button } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { showModalBtn } from "../feature/services/cartSlice";
import CartItem from "./CartItem";


const AddToCartModal=()=> {
  const { cartItem, totalAmount,showModal } = useSelector((state) => state.Cart);
  const dispatch=useDispatch();

  return (
    <>
      <Modal.Root
        size={"70vw"}
        opened={showModal}
        onClose={() => dispatch(showModalBtn(false))}
        transitionProps={{ transition: "rotate-left" }}
      >
        <Modal.Overlay />
        <Modal.Content className=" bg-gray-200">
          <Modal.Header className="d-flex justify-between shadow">
            <Modal.Title className="text-3xl">Your Carts</Modal.Title>
            <Modal.CloseButton size={"2rem"} />
          </Modal.Header>
          <Modal.Body>
            <>
              {cartItem.length === 0 ? (
                <div className="flex items-center justify-center my-20 flex-col">
                  <h1 className="text-xl lg:text-4xl mb-5">Your Cart is empty!</h1>
                  <button
                    onClick={() => {
                      dispatch(showModalBtn(false));
                    }}
                    className="rounded hover:bg-orange-500 bg-orange-300 text-gray-600 hover:text-black shadow-md py-2 px-4"
                  >
                    fill it!
                  </button>
                </div>
              ) : (
                <div>
                  <CartItem />
                </div>
              )}
            </>
          </Modal.Body>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
export default AddToCartModal;