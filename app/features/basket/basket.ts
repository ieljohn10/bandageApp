import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface BasketState {
  value: {
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

const initialState: BasketState = {
  value: {
    id: 0,
    title: "",
    decription: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
    thumbnail: "",
    images: [],
  },
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.value = action.payload;
      window.localStorage.setItem("basketData", JSON.stringify(state.value));
    },
    addToBasketFromLocalStorage: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, addToBasketFromLocalStorage } = basketSlice.actions;

export default basketSlice.reducer;
