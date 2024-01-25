import React from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  CallOutlined,
  EmailOutlined,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";

function Contacts() {
  return (
    <Box
      height={46}
      display={{ xs: "none", md: "flex" }}
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#23856D"
    >
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box p="10px" display="flex">
          <CallOutlined fontSize="medium" sx={{ color: "#fff" }} />
          <Typography color="#FFF">(225) 555-0118</Typography>
        </Box>
        <Box p="10px" display="flex">
          <EmailOutlined fontSize="medium" sx={{ color: "#fff" }} />
          <Typography color="#FFF">michelle.rivera@example.com</Typography>
        </Box>
      </Box>
      <Box>
        <Typography color="#FFF" fontWeight={600}>
          Follow Us and get a chance to win 80% off
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" gap={2}>
        <Typography color="#FFF">Follow Us :</Typography>
        <Box display="flex" alignItems="center" gap={1}>
          <Instagram fontSize="medium" sx={{ color: "#fff" }} />
          <YouTube fontSize="medium" sx={{ color: "#fff" }} />
          <Facebook fontSize="medium" sx={{ color: "#fff" }} />
          <Twitter fontSize="medium" sx={{ color: "#fff" }} />
        </Box>
      </Box>
    </Box>
  );
}

export default Contacts;
