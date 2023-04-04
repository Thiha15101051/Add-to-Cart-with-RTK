import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  showModal:false,
  totalAmount: 0,
  quantity: 0,
  cartItem: [],
  search:'',
};
export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isExisted = state.cartItem.find((item) => item.id === payload.id);
      if (isExisted) {
        isExisted.quantity++;
      } else {
        state.cartItem = [...state.cartItem, { ...payload, quantity: 1 }];
      }
      state.quantity++;
      state.totalAmount += payload.price;
    },
    removeCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== payload.id);
      state.quantity -= payload.quantity;
      state.totalAmount -= payload.price * payload.quantity;
      return state;
    },
    incrementItem: (state, { payload }) => {
      const ItemQty = state.cartItem.find((item) => item.id === payload.id);
      ItemQty.quantity++;
      state.quantity +=1;
      state.totalAmount += payload.price;
    },
    decrementItem: (state, { payload }) => {
      const ItemQty = state.cartItem.find((item) => item.id === payload.id);
      if (payload.quantity === 1) {
        return;
      }
      ItemQty.quantity--;
      state.quantity -=1;
      state.totalAmount -= payload.price;
      
    },
    showModalBtn:(state,{payload})=>{
      state.showModal=payload;
      return;
    },
    search:(state,{payload})=>{
      state.search=payload;
      return;
    }
  },
});

export const { addToCart, removeCart, incrementItem,decrementItem,showModalBtn,search } = CartSlice.actions;
export default CartSlice.reducer;
