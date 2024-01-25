import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";
import {
  FavoriteOutlined,
  Menu,
  Person,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import CartModal from "../../cartModal/CartModal";
import { selectCartItems } from "@/app/features/cart/cart";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

const LinkButton = ({ title, link, color, marginX = 7 }: any) => {
  return (
    <Link href={link}>
      <Button
        sx={{
          marginX: `${marginX}px`,
        }}
      >
        <Typography textTransform="capitalize" fontWeight="700" color={color}>
          {title}
        </Typography>
      </Button>
    </Link>
  );
};

const Navbar = () => {
  // const [display, setDisplay] = useState(true);

  // useEffect(() => {
  //   window.addEventListener("orientationchange", (data) => {
  //     if (window.screen.width > 900) {
  //       setDisplay(true);
  //     } else {
  //       setDisplay(false);
  //     }
  //   });
  // }, []);

  const cartData = useSelector((state: RootState) => state);
  const cartDataCount = selectCartItems(cartData);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        marginLeft={2}
        marginRight={2}
      >
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          sx={{ width: { xs: "100%", md: "auto" } }}
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: { xs: "100%", md: "auto" } }}
          >
            <Typography
              variant="h4"
              paddingY="13px"
              paddingRight="79px"
              fontSize="24px"
              fontWeight="700"
              lineHeight="32px"
              letterSpacing="0.1px"
            >
              Bandage
            </Typography>
            <Box
              display={{ xs: "block", md: "none" }}
              // onClick={() => {
              //   setDisplay((prev) => !prev);
              // }}
            >
              <Menu fontSize="medium" sx={{ color: "#737373" }} />
            </Box>
          </Box>
          <Box
            // display={display ? "flex" : "none"}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
          >
            <LinkButton title="Home" link="/" color={"#737373"} />
            <LinkButton title="Shop" link="/" color={"#737373"} />
            <LinkButton title="About" link="/" color={"#737373"} />
            <LinkButton title="Blog" link="/" color={"#737373"} />
            <LinkButton title="Contact" link="/" color={"#737373"} />
            <LinkButton title="Pages" link="/" color={"#737373"} />
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          alignItems="center"
          gap={2}
        >
          <Box display="flex" flexDirection="row" alignItems="center">
            <Person fontSize="medium" sx={{ color: "#23A6F0" }} />
            <LinkButton title="Login" link="/" color={"#23A6F0"} marginX={0} />
            <Typography color="#23A6F0">/</Typography>
            <LinkButton
              title="Register"
              link="/"
              color={"#23A6F0"}
              marginX={0}
            />
          </Box>
          <Search fontSize="medium" sx={{ color: "#23A6F0" }} />
          <Box position="relative" marginTop={0.5}>
            <ShoppingCart
              fontSize="medium"
              sx={{ color: "#23A6F0" }}
              onClick={handleOpen}
            />
            <Box
              textAlign="center"
              width={20}
              height={20}
              top={-8}
              left={12}
              bgcolor="#23856d"
              borderRadius={20}
              padding={0.2}
              position="absolute"
              fontSize={12}
              fontWeight={600}
              color="#fff"
            >
              {cartDataCount.length}
            </Box>
          </Box>
          <FavoriteOutlined fontSize="medium" sx={{ color: "#23A6F0" }} />
        </Box>
      </Box>
      <CartModal open={open} handleClose={handleClose} />
    </>
  );
};

export default Navbar;
