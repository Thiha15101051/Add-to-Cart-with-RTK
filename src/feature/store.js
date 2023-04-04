import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./services/cartSlice";

export default configureStore({
  reducer: {
    Cart:cartSlice
  },
});
