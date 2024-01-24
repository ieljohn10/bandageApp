"use client";
import { useState } from "react";
import Navbar from "./navbar/page";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Navbar toggle={toggle} /> */}
      <Navbar/>
    </>
  );
};

export default Navigation;