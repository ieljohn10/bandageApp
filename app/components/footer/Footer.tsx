import { Box, Button, Container, Divider, TextField } from "@mui/material";
import React from "react";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <>
      <Box bgcolor={"#FAFAFA"}>
        <Container>
          <Box
            display="flex"
            alignItems={{ xs: "self-start", md: "center" }}
            justifyContent="space-between"
            marginY={4}
            paddingY={3}
            gap={2}
            flexDirection={{ xs: "column", md: "row" }}
          >
            <Title title="Bandages" textAlign="left" />
            <Box display="flex" alignItems="center" gap={3}>
              <Facebook fontSize="medium" sx={{ color: "#23A6F0" }} />
              <Instagram fontSize="medium" sx={{ color: "#23A6F0" }} />
              <Twitter fontSize="medium" sx={{ color: "#23A6F0" }} />
            </Box>
          </Box>
          <Divider />
        </Container>
      </Box>
      <Container>
        <Box
          display="flex"
          flexDirection={{ xs: "column", md: "row" }}
          gap={3}
          marginX="auto"
          justifyContent="space-between"
          paddingY="50px"
        >
          <Box>
            <Title
              title="Company Info"
              variant="h6"
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="About Us"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Carrier"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="We are hiring"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Blog"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title title="Legal" variant="h6" textAlign="left" gutterBottom />
            <SubTitle
              title="About Us"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Carrier"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="We are hiring"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Blog"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title
              title="Features"
              variant="h6"
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Business Marketing"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="User Analytic"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Live Chat"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Unlimited Support"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title
              title="Resources"
              variant="h6"
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="IOS & Android"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Watch a Demo"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="Customers"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
            <SubTitle
              title="API"
              variant="body2"
              fontWeight={700}
              textAlign="left"
              gutterBottom
            />
          </Box>
          <Box>
            <Title
              title="Get In Touch"
              variant="h6"
              textAlign="left"
              gutterBottom
              marginBottom="20px"
            />
            <TextField
              id="outlined-basic"
              label="Your Email"
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <Button sx={{ paddingX: "25px" }} variant="contained">
                    Subscribe
                  </Button>
                ),
              }}
            />
            <SubTitle
              title="Lore imp sum dolor Amit"
              variant="subtitle2"
              textAlign="left"
              marginY={0.5}
            />
          </Box>
        </Box>
      </Container>
      <Box paddingY={"40px"} bgcolor={"#FAFAFA"}>
        <Container>
          <SubTitle
            textAlign={{ xs: "center", md: "left" }}
            title={"Made With Love By Finland All Right Reserved "}
            variant="body2"
            fontWeight={700}
          />
        </Container>
      </Box>
    </>
  );
}

export default Footer;
