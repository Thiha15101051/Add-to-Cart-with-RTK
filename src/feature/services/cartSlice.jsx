import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const initialState = {
  showModal:false,
  totalAmount: 0,
  quantity: 0,
  cartItem: [],
  search:'',
};

const COOKIE_KEY='cartItem';
const storedItems=Cookies.get(COOKIE_KEY)

if (storedItems) {
  initialState.cartItem=JSON.parse(storedItems)
  initialState.totalAmount=calcTotalAmount(initialState.cartItem)
  initialState.quantity=calcTotalQty(initialState.cartItem)
}
function calcTotalAmount(items){
  return items.reduce((prevAmount,currentAmount)=>prevAmount+(currentAmount.price*currentAmount.quantity),0)
}
function calcTotalQty(items){
  return items.reduce((prevQty,currentQty)=>prevQty+currentQty.quantity,0)
}

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
      state.quantity=calcTotalQty(state.cartItem);
      state.totalAmount =calcTotalAmount(state.cartItem);
      Cookies.set(COOKIE_KEY,JSON.stringify(state.cartItem));
    },
    removeCart: (state, { payload }) => {
      state.cartItem = state.cartItem.filter((item) => item.id !== payload.id);
      state.quantity -= payload.quantity;
      state.totalAmount -= payload.price * payload.quantity;
      Cookies.remove(COOKIE_KEY);
      Cookies.set(COOKIE_KEY, JSON.stringify(state.cartItem));
      return state;
    },
    incrementItem: (state, { payload }) => {
      const ItemQty = state.cartItem.find((item) => item.id === payload.id);
      ItemQty.quantity++;
      state.quantity +=1;
      state.totalAmount += payload.price;
      Cookies.remove(COOKIE_KEY);
      Cookies.set(COOKIE_KEY, JSON.stringify(state.cartItem));
    },
    decrementItem: (state, { payload }) => {  
      const ItemQty = state.cartItem.find((item) => item.id === payload.id);
      if (ItemQty.quantity === 1) {
        return;
      }
      ItemQty.quantity--;
      state.quantity -=1;
      state.totalAmount -= payload.price;
      Cookies.remove(COOKIE_KEY);
      Cookies.set(COOKIE_KEY, JSON.stringify(state.cartItem)) 
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
