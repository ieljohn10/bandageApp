import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Item {
  products: {
    id: number;
    title: string;
    decription: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: [];
  };
}
export interface CartState {
  products: Item[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.products = [...state.products, action.payload];
    },

    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.products.findIndex(
        //@ts-ignore
        (item) => item.id === action.payload?.id
      );

      // ** create new copy of cart
      const newCart = [...state.products];

      if (index >= 0) {
        newCart.splice(index, 1);
      }

      state.products = newCart;
    },
  },
});

export const selectCartItems = (state: any) => state.cart.products;
export const selectCartItemsWithId = (state: any, id: number) =>
  state.cart.products.filter((item: any) => item.id === id);

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
