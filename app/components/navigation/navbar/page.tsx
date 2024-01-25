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

const LinkButton = ({ title, link, color, marginX = 7 }: any) => {
  return (
    <Button
      sx={{
        marginX: `${marginX}px`,
      }}
    >
      <Typography
        textTransform="capitalize"
        fontWeight="700"
        color={color}
        component="a"
        href={link}
      >
        {title}
      </Typography>
    </Button>
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

  return (
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
          <LinkButton title="Register" link="/" color={"#23A6F0"} marginX={0} />
        </Box>
        <Search fontSize="medium" sx={{ color: "#23A6F0" }} />
        <ShoppingCart fontSize="medium" sx={{ color: "#23A6F0" }} />
        <FavoriteOutlined fontSize="medium" sx={{ color: "#23A6F0" }} />
      </Box>
    </Box>
  );
};

export default Navbar;
