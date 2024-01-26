"use client";
import React, { useEffect } from "react";
import CustomFont from "@/assets/theme/CustomFont";
import Navigation from "./components/navigation/page";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { store } from "./store/store";
import { addToCartFromLocalStorage } from "./features/cart/cart";
import { useDispatch } from "react-redux";
import { addToWishListFromLocalStorage } from "./features/wishlist/wishlist";
import { addToBasketFromLocalStorage } from "./features/basket/basket";

const Mark = ({ children }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const basketData = window.localStorage.getItem("basketData");
    const cartData = window.localStorage.getItem("cartData");
    const wishListData = window.localStorage.getItem("wishListData");

    if (!!basketData && basketData.length > 0) {
      dispatch(addToBasketFromLocalStorage(JSON.parse(basketData)));
    }
    if (!!cartData && cartData.length > 0) {
      dispatch(addToCartFromLocalStorage(JSON.parse(cartData)));
    }
    if (!!wishListData && wishListData.length > 0) {
      dispatch(addToWishListFromLocalStorage(JSON.parse(wishListData)));
    }
  }, []);

  return <>{children}</>;
};

function Main({ children }: any) {
  return (
    <Provider store={store}>
      <Mark>
        <CustomFont>
          <Contacts />
          <Navigation />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
          <Footer />
        </CustomFont>
      </Mark>
    </Provider>
  );
}

export default Main;
