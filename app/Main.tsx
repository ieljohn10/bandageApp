"use client";
import React from "react";
import CustomFont from "@/assets/theme/CustomFont";
import Navigation from "./components/navigation/page";
import Footer from "./components/footer/Footer";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { store } from "./store/store";

function Main({ children }: any) {
  return (
    <Provider store={store}>
      <CustomFont>
        <Contacts />
        <Navigation />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        <Footer />
      </CustomFont>
    </Provider>
  );
}

export default Main;
