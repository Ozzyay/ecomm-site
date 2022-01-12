import { createSlice } from "@reduxjs/toolkit";

const initialValue: {
  cart: any[],
  totalItems: number,
  totalPrice: number
} = {
  cart: [],
  totalItems: 0,
  totalPrice: 0,
}


const cartSlice = createSlice({
  name: "cart",
  initialState: initialValue,
  reducers: {
    addToCart(state, action) {
      const item = state.cart.find(element => element.productId === action.payload.productId)
      if (item) {
        const index = state.cart.indexOf(item);
        state.cart[index].quantity += 1;
      } else {
        state.cart = [...state.cart, action.payload];
      }
      state.totalItems++;
      const price = action.payload.price;
      state.totalPrice += price;
    },
    removeFromCart(state, action) {
      const item = state.cart.find(element => element.productId == action.payload.productId)
      if (!item) {
        return;
      }
      if (item.quantity === 1) {
        state.cart = state.cart.filter(elem => elem.productId !== action.payload.productId);
      } else {
        const index = state.cart.indexOf(item);
        state.cart[index].quantity--;
      }
      state.totalItems--;
      state.totalPrice -= item.price;
    },
    addOne(state, action) {
      const item = state.cart.find(element => element.productId == action.payload.productId)
      const index = state.cart.indexOf(item);
      state.cart[index].quantity += 1;
      state.totalItems++;
      state.totalPrice += item.price;
    }
  }
})


export const cartActions = cartSlice.actions;
export const cartReducer = cartSlice.reducer;