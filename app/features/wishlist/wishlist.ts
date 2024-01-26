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
export interface wishListState {
  products: Item[];
}

const initialState: wishListState = {
  products: [],
};

export const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Item>) => {
      state.products = [...state.products, action.payload];
      window.localStorage.setItem(
        "wishListData",
        JSON.stringify(state.products)
      );
    },

    addToWishListFromLocalStorage: (state, action: PayloadAction<Item[]>) => {
      state.products = action.payload;
    },

    removeFromWishList: (state, action: PayloadAction<{ id: number }>) => {
      const newWishList = state.products.filter(
        //@ts-ignore
        (item) => item.id !== action.payload?.id
      );

      state.products = newWishList;
      window.localStorage.setItem(
        "wishListData",
        JSON.stringify(state.products)
      );
    },
  },
});

export const selectWishListItems = (state: any) => state.wishList.products;
export const selectWishListItemsWithId = (state: any, id: number) =>
  state.wishList.products.filter((item: any) => item.id === id);

export const {
  addToWishList,
  addToWishListFromLocalStorage,
  removeFromWishList,
} = wishListSlice.actions;

export default wishListSlice.reducer;
