import { createSlice } from '@reduxjs/toolkit';
import CartItems from '../../CartItems';

// immer library we don't have to return a new state and always avoid mutation
// because basically with user useReducer we always need to return the new state
// however with immer library behind the scenes does all the heavy lifting so in this case
// we can modify the state or mutate the state directly. (clearCart) will be the
// the code that mutates the state

const initialState = {
  cartItems: CartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
        const itemId = action.payload;
        state.cartItems = state.cartItems.filter((item) => 
         item.id !== itemId);
    },

    // functionality is, we look for the payload which is an object thats why we go
        // with payload.id to show case that we can pass more data and then we just increase the amount

        increase: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id
            === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },

        decrease: (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id
            === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
  },
});

// console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions;

export default cartSlice.reducer;
