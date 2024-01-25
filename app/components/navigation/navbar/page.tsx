import React from "react";
import Link from "next/link";
import { Box, Button, Container, Typography } from "@mui/material";

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
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      marginLeft="38px"
      marginRight="17px"
    >
      <Box display="flex" alignItems="center">
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
        <Box display="flex">
          <LinkButton title="Home" link="/" color={"#737373"} />
          <LinkButton title="Shop" link="/shop" color={"#737373"} />
          <LinkButton title="About" link="/" color={"#737373"} />
          <LinkButton title="Blog" link="/" color={"#737373"} />
          <LinkButton title="Contact" link="/" color={"#737373"} />
          <LinkButton title="Pages" link="/" color={"#737373"} />
        </Box>
      </Box>
      <Box display="flex" flexDirection="row" alignItems="center">
        <LinkButton title="Login" link="/" color={"#23A6F0"} marginX={0} />
        <Typography color="#23A6F0">/</Typography>
        <LinkButton title="Register" link="/" color={"#23A6F0"} marginX={0} />
      </Box>
    </Box>
  );
};

export default Navbar;
