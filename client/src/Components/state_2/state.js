import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  stockists: [],
  heroBanner: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
   
    addToCart: (state, action) => {
      state.cart = [...state.cart, action.payload.item];
    },
    
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    increaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if(item.id === action.payload.id) {
          item.count++;
        }
        return item;
      })
    },

    decreaseCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if(item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      })
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },

    setStockists: (state, action) => {
      state.stockists = action.payload;
    },
    setHeroBanner: (state, action) => {
      state.heroBanner = action.payload;
    },
  }
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount, 
  setIsCartOpen,
  setStockists,
  setHeroBanner,
} = cartSlice.actions;

export default cartSlice.reducer;